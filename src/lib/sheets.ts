import { google } from 'googleapis';

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
    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID?.trim();
    const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL?.trim();
    const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.trim();

    if (!SPREADSHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
        throw new Error(
            `Missing Google Sheets ENV variables: ID=${!!SPREADSHEET_ID}, Email=${!!CLIENT_EMAIL}, Key=${!!PRIVATE_KEY}`
        );
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

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

    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Members!A:G',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [row] },
    });

    return response.data;
}

export async function appendVolunteerToSheet(data: VolunteerData) {
    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID?.trim();
    const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL?.trim();
    const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.trim();

    if (!SPREADSHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
        throw new Error(
            `Missing Google Sheets ENV variables: ID=${!!SPREADSHEET_ID}, Email=${!!CLIENT_EMAIL}, Key=${!!PRIVATE_KEY}`
        );
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

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

    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Volunteers!A:I',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [row] },
    });

    return response.data;
}