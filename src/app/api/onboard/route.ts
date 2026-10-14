import { NextResponse } from 'next/server';
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

        // 1. Primary Database Insert
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

        // 2. Fire Resend Email & Google Sheets Append in Parallel
        const resendApiKey = process.env.RESEND_API_KEY;
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

        const emailPromise = resendApiKey
            ? new Resend(resendApiKey).emails.send({
                from: `The Becoming <${fromEmail}>`,
                to: email,
                subject: 'Welcome to The Becoming | With Dr. Immanuelson Sam',
                html: `
            <div style="font-family: sans-serif; max-width: 580px; margin: 0 auto; color: #0f172a; line-height: 1.6;">
              <h2 style="color: #0b132b;">Welcome to The Becoming, ${fullName}!</h2>
              <p>You have stepped into a borderless community of intentional people committed to personal growth, courageous leadership, and structured daily habits.</p>
              <div style="background: #f8fafc; border-left: 4px solid #f59e0b; padding: 16px; margin: 20px 0;">
                <strong>Weekly Live Gathering:</strong><br/>
                Every Sunday at 6:00 PM (West Africa Time) Online<br/>
                <strong>Your Selected Focus:</strong> ${growthFocus}
              </div>
              <p>Prepare to participate actively in your own progress. Don't just live—Become.</p>
              <p style="margin-top: 24px;">Warm regards,<br/><strong>Dr. Immanuelson Sam</strong><br/>Convener, The Becoming</p>
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

        const results = await Promise.allSettled([emailPromise, sheetPromise]);

        results.forEach((result, idx) => {
            if (result.status === 'rejected') {
                console.error(
                    `Parallel task ${idx === 0 ? 'Resend' : 'Google Sheets'} failed:`,
                    result.reason
                );
            }
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Onboarding error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}