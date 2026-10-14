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

export async function appendMemberToSheet(member: {
    fullName: string;
    email: string;
    country: string;
    growthFocus: string;
}) {
    if (!SPREADSHEET_ID || !process.env.GOOGLE_CLIENT_EMAIL) return;

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Members!A:E',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        new Date().toISOString(),
                        member.fullName,
                        member.email,
                        member.country,
                        member.growthFocus,
                    ],
                ],
            },
        });
    } catch (err) {
        console.error('Failed to append member to Google Sheet:', err);
    }
}

export async function appendVolunteerToSheet(volunteer: {
    fullName: string;
    email: string;
    phone: string;
    country: string;
    teamTrack: string;
    reasonToServe: string;
}) {
    if (!SPREADSHEET_ID || !process.env.GOOGLE_CLIENT_EMAIL) return;

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Volunteers!A:G',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        new Date().toISOString(),
                        volunteer.fullName,
                        volunteer.email,
                        volunteer.phone,
                        volunteer.country,
                        volunteer.teamTrack,
                        volunteer.reasonToServe,
                    ],
                ],
            },
        });
    } catch (err) {
        console.error('Failed to append volunteer to Google Sheet:', err);
    }
}