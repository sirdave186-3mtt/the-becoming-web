import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

export interface MemberData {
    fullName: string;
    email: string;
    country: string;
    growthFocus: string;
    linkedin?: string;
    instagram?: string;
}

export interface VolunteerData {
    fullName: string;
    email: string;
    phone: string;
    country: string;
    teamTrack: string;
    reasonToServe: string;
    linkedin?: string;
    instagram?: string;
}

export async function appendMemberToSheet(data: MemberData) {
    if (!SPREADSHEET_ID) {
        console.warn('[Google Sheets] SPREADSHEET_ID is missing');
        return;
    }

    try {
        const timestamp = new Date().toISOString();
        const row = [
            timestamp,
            data.fullName,
            data.email,
            data.country,
            data.growthFocus,
            data.linkedin || '',
            data.instagram || '',
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Members', // Open-ended range automatically appends to the next available row
            valueInputOption: 'USER_ENTERED',
            requestBody: { values: [row] },
        });
    } catch (error) {
        console.error('[Google Sheets Member Sync Error]:', error);
    }
}

export async function appendVolunteerToSheet(data: VolunteerData) {
    if (!SPREADSHEET_ID) {
        console.warn('[Google Sheets] SPREADSHEET_ID is missing');
        return;
    }

    try {
        const timestamp = new Date().toISOString();
        const row = [
            timestamp,
            data.fullName,
            data.email,
            data.phone,
            data.country,
            data.teamTrack,
            data.reasonToServe,
            data.linkedin || '',
            data.instagram || '',
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Volunteers', // Open-ended range automatically appends to the next available row
            valueInputOption: 'USER_ENTERED',
            requestBody: { values: [row] },
        });
    } catch (error) {
        console.error('[Google Sheets Volunteer Sync Error]:', error);
    }
}