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

// Helper to correctly format the private key for Node.js crypto decoder
function formatPrivateKey(key: string | undefined): string {
    if (!key) return '';
    // Unescape literal \n characters and trim whitespace or quotes
    let cleaned = key.replace(/\\n/g, '\n').replace(/^["']|["']\$/g, '').trim();

    // Ensure header and footer have correct spacing if pasted tightly
    if (!cleaned.includes('-----BEGIN PRIVATE KEY-----')) {
        return cleaned;
    }

    return cleaned;
}

export async function appendMemberToSheet(data: MemberData) {
    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID?.trim();
    const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL?.trim();
    const RAW_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

    if (!SPREADSHEET_ID || !CLIENT_EMAIL || !RAW_PRIVATE_KEY) {
        throw new Error(
            `Missing Google Sheets ENV variables: ID=${!!SPREADSHEET_ID}, Email=${!!CLIENT_EMAIL}, Key=${!!RAW_PRIVATE_KEY}`
        );
    }

    const PRIVATE_KEY = formatPrivateKey(RAW_PRIVATE_KEY);

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
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
    const RAW_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

    if (!SPREADSHEET_ID || !CLIENT_EMAIL || !RAW_PRIVATE_KEY) {
        throw new Error(
            `Missing Google Sheets ENV variables: ID=${!!SPREADSHEET_ID}, Email=${!!CLIENT_EMAIL}, Key=${!!RAW_PRIVATE_KEY}`
        );
    }

    const PRIVATE_KEY = formatPrivateKey(RAW_PRIVATE_KEY);

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
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