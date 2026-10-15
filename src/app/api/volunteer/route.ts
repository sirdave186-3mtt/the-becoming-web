import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';
import { appendVolunteerToSheet } from '@/lib/sheets';

export async function POST(req: Request) {
    try {
        const {
            fullName,
            email,
            phone,
            country,
            teamTrack,
            reasonToServe,
            agreedToGuidelines,
            linkedin,
            instagram,
        } = await req.json();

        if (!fullName || !email || !phone || !country || !teamTrack) {
            return NextResponse.json(
                { error: 'Please provide all required fields' },
                { status: 400 }
            );
        }

        // 1. Insert into Supabase 'volunteers' table
        const { error: dbError } = await supabase.from('volunteers').insert([
            {
                full_name: fullName,
                email,
                phone,
                country,
                team_track: teamTrack,
                reason_to_serve: reasonToServe,
                agreed_to_guidelines: agreedToGuidelines,
                linkedin: linkedin || null,
                instagram: instagram || null,
            },
        ]);

        if (dbError) throw dbError;

        // 2. Fire Volunteer Confirmation Email & Google Sheets Sync in Parallel
        const resendApiKey = process.env.RESEND_API_KEY?.trim();
        const envFrom = process.env.RESEND_FROM_EMAIL?.trim().replace(/^["']|["']\$/g, '');

        const fromEmail =
            envFrom && !envFrom.endsWith('@resend.dev')
                ? envFrom
                : 'welcome@becomerscommunity.com';

        const emailPromise = resendApiKey
            ? new Resend(resendApiKey).emails.send({
                from: `The Becoming Workforce <${fromEmail}>`,
                to: [email.trim()],
                replyTo: 'immanuelsonsam416@gmail.com',
                subject: 'Volunteer Application Received | The Becoming Community',
                html: `
            <div style="font-family: sans-serif; max-width: 580px; margin: 0 auto; color: #0f172a; line-height: 1.6; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
              <h2 style="color: #0b132b; margin-top: 0;">Thank you for stepping up, ${fullName}!</h2>
              <p>We have received your application to serve with <strong>The Becoming Core Workforce</strong>.</p>
              
              <div style="background: #f8fafc; border-left: 4px solid #f59e0b; padding: 16px; margin: 20px 0; border-radius: 4px;">
                <strong>Selected Service Track:</strong> ${teamTrack}<br/>
                <strong>Country:</strong> ${country}<br/>
                <strong>Phone / WhatsApp:</strong> ${phone}
              </div>

              <p>Our coordination team will review your submission and reach out to you via WhatsApp or email with onboarding steps.</p>
              <p style="margin: 20px 0;">
                <a href="https://www.becomerscommunity.com/resources/volunteer-guidelines.pdf" style="background: #0b132b; color: #ffffff; font-weight: bold; text-decoration: none; padding: 10px 20px; border-radius: 999px; display: inline-block; font-size: 13px;">
                  Review Volunteer Guidelines (PDF) &rarr;
                </a>
              </p>

              <p style="margin-top: 28px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 14px;">
                With gratitude,<br/>
                <strong>Dr. Immanuelson Sam</strong><br/>
                <span style="color: #64748b; font-size: 12px;">Global Speaker | African Mentor | Consultant</span><br/>
                <a href="https://www.becomerscommunity.com" style="color: #d97706; text-decoration: none; font-size: 12px;">www.becomerscommunity.com</a>
              </p>
            </div>
          `,
            })
            : Promise.resolve();

        const sheetPromise = appendVolunteerToSheet({
            fullName,
            email,
            phone,
            country,
            teamTrack,
            reasonToServe,
            linkedin: linkedin || '',
            instagram: instagram || '',
        });

        const [emailResult, sheetResult] = await Promise.allSettled([
            emailPromise,
            sheetPromise,
        ]);

        if (emailResult.status === 'rejected') {
            console.error('[Volunteer Resend Error]:', emailResult.reason);
        }

        return NextResponse.json({
            success: true,
            sheetSync:
                sheetResult.status === 'fulfilled'
                    ? sheetResult.value
                    : { synced: false },
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}