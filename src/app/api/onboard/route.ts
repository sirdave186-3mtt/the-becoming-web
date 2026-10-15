import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';
import { appendMemberToSheet } from '@/lib/sheets';

export async function POST(req: Request) {
    try {
        const { fullName, email, country, growthFocus } = await req.json();

        if (!fullName || !email || !country) {
            return NextResponse.json(
                { error: 'Full name, email, and country are required.' },
                { status: 400 }
            );
        }

        // 1. Primary Database Insert into 'becomers' (Members table)
        const { error: dbError } = await supabase.from('becomers').insert([
            {
                full_name: fullName,
                email,
                country,
                growth_focus: growthFocus,
            },
        ]);

        if (dbError) {
            if (dbError.code === '23505') {
                return NextResponse.json(
                    { error: 'This email is already registered in The Becoming.' },
                    { status: 409 }
                );
            }
            throw dbError;
        }

        // 2. Instantly refresh the Homepage Cached Counter!
        revalidateTag('community-stats', 'max');

        // 3. Fire Resend Email (via becomerscommunity.com) & Google Sheets Append in Parallel
        const resendApiKey = process.env.RESEND_API_KEY;
        const fromEmail =
            process.env.RESEND_FROM_EMAIL || 'welcome@becomerscommunity.com';

        const emailPromise = resendApiKey
            ? new Resend(resendApiKey).emails.send({
                from: `The Becoming <${fromEmail}>`,
                to: email,
                replyTo: 'immanuelsonsam416@gmail.com',
                subject: 'Welcome to The Becoming | With Dr. Immanuelson Sam',
                html: `
            <div style="font-family: sans-serif; max-width: 580px; margin: 0 auto; color: #0f172a; line-height: 1.6; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
              <h2 style="color: #0b132b; margin-top: 0;">Welcome to The Becoming, ${fullName}!</h2>
              <p>You have stepped into a borderless community of intentional people committed to personal growth, courageous leadership, and structured daily habits.</p>
              
              <div style="background: #f8fafc; border-left: 4px solid #f59e0b; padding: 16px; margin: 20px 0; border-radius: 4px;">
                <strong>Weekly Live Gathering:</strong><br/>
                Every Sunday at 6:00 PM (West Africa Time) Online<br/>
                <strong>Your Selected Focus:</strong> ${growthFocus}<br/>
                <strong>Country Chapter:</strong> ${country}
              </div>

              <p>Explore official session slides and frameworks anytime on our Resource Hub:</p>
              <p style="margin: 24px 0;">
                <a href="https://www.becomerscommunity.com/resources" style="background: #f59e0b; color: #0b132b; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 999px; display: inline-block; font-size: 14px;">
                  Access Resource Hub &rarr;
                </a>
              </p>

              <p>Prepare to participate actively in your own progress. Don't just live—Become.</p>
              <p style="margin-top: 28px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 14px;">
                Warm regards,<br/>
                <strong>Dr. Immanuelson Sam</strong><br/>
                <span style="color: #64748b; font-size: 12px;">Global Speaker | African Mentor | Consultant</span><br/>
                <a href="https://www.becomerscommunity.com" style="color: #d97706; text-decoration: none; font-size: 12px;">www.becomerscommunity.com</a>
              </p>
            </div>
          `,
            })
            : Promise.resolve();

        const sheetPromise = appendMemberToSheet({
            fullName,
            email,
            country,
            growthFocus,
        });

        const [emailResult, sheetResult] = await Promise.allSettled([
            emailPromise,
            sheetPromise,
        ]);

        if (emailResult.status === 'rejected') {
            console.error('[Resend Error]:', emailResult.reason);
        } else if (
            emailResult.value &&
            'error' in emailResult.value &&
            emailResult.value.error
        ) {
            console.error('[Resend API Error]:', emailResult.value.error);
        }

        if (sheetResult.status === 'rejected') {
            console.error('[Google Sheets Error]:', sheetResult.reason);
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Onboarding error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}