import { NextResponse } from 'next/server';
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
        } = await req.json();

        if (!fullName || !email || !phone || !country || !teamTrack) {
            return NextResponse.json(
                { error: 'Please provide all required fields' },
                { status: 400 }
            );
        }

        // 1. Insert into Supabase
        const { error: dbError } = await supabase.from('volunteers').insert([
            {
                full_name: fullName,
                email,
                phone,
                country,
                team_track: teamTrack,
                reason_to_serve: reasonToServe,
                agreed_to_guidelines: agreedToGuidelines,
            },
        ]);

        if (dbError) throw dbError;

        // 2. Append to Google Sheets
        await appendVolunteerToSheet({
            fullName,
            email,
            phone,
            country,
            teamTrack,
            reasonToServe,
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}