import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { resend } from '@/lib/resend';

export async function POST(request: Request) {
    try {
        const { fullName, email, country, growthFocus } = await request.json();

        if (!fullName || !email || !country) {
            return NextResponse.json(
                { error: 'Full name, email, and country are required.' },
                { status: 400 }
            );
        }

        // 1. Insert into Supabase
        const { error: dbError } = await supabase.from('becomers').insert([
            {
                full_name: fullName.trim(),
                email: email.trim().toLowerCase(),
                country: country.trim(),
                growth_focus: growthFocus || null,
            },
        ]);

        if (dbError) {
            // Handle unique email constraint gracefully
            if (dbError.code === '23505') {
                return NextResponse.json(
                    { message: 'You are already registered! Head straight to our Telegram community.' },
                    { status: 200 }
                );
            }
            console.error('Supabase error:', dbError);
            return NextResponse.json({ error: 'Failed to record details.' }, { status: 500 });
        }

        // 2. Trigger Welcome Email via Resend
        if (process.env.RESEND_API_KEY) {
            try {
                await resend.emails.send({
                    from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
                    to: email.trim().toLowerCase(),
                    subject: 'Welcome to The Becoming with Dr. Immanuelson Sam',
                    html: `
            <div style="font-family: sans-serif; background-color: #0A1128; color: #F8FAFC; padding: 32px; border-radius: 12px; max-width: 600px; margin: auto;">
              <h1 style="color: #F59E0B; margin-bottom: 8px;">Welcome to The Becoming</h1>
              <p style="color: #94A3B8; font-size: 16px;">Dear ${fullName},</p>
              <p style="color: #F8FAFC; font-size: 15px; line-height: 1.6;">
                We are thrilled to welcome you. The Becoming is more than a community—it is a space where we choose courageous growth, practical reflection, and meaningful action.
              </p>
              <div style="background-color: #1E293B; border-radius: 8px; padding: 20px; margin: 24px 0; border: 1px solid rgba(255,255,255,0.1);">
                <h3 style="color: #F59E0B; margin-top: 0;">Weekly Rhythm</h3>
                <p style="color: #F8FAFC; margin: 4px 0; font-size: 14px;">• <strong>Monday:</strong> The Becoming Question</p>
                <p style="color: #F8FAFC; margin: 4px 0; font-size: 14px;">• <strong>Wed/Thu:</strong> The Becoming Challenge</p>
                <p style="color: #F8FAFC; margin: 4px 0; font-size: 14px;">• <strong>Sunday (6:00 PM):</strong> Live Mentorship Gathering</p>
              </div>
              <div style="text-align: center; margin: 28px 0;">
                <a href="https://t.me/thebecomingwithsam" style="background-color: #F59E0B; color: #0A1128; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: bold; display: inline-block;">
                  Join The Telegram Community
                </a>
              </div>
              <p style="color: #94A3B8; font-size: 12px; text-align: center; margin-top: 32px;">
                "Don't just exist. Become." — Dr. Immanuelson Sam
              </p>
            </div>
          `,
                });
            } catch (emailError) {
                console.error('Resend delivery error:', emailError);
                // Non-blocking error so the user still proceeds to Telegram
            }
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error('Onboarding handler error:', err);
        return NextResponse.json({ error: 'Server error occurred.' }, { status: 500 });
    }
}