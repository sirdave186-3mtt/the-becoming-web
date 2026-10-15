import { google } from 'googleapis';

function extractSpreadsheetId(rawIdOrUrl?: string): string | undefined {
    if (!rawIdOrUrl) return undefined;
    const trimmed = rawIdOrUrl.trim();
    // If a full Google Sheets URL was provided, extract the ID between /d/ and /
    const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    return match ? match[1] : trimmed;
}

function getFormattedPrivateKey(): string | undefined {
    const rawKey = process.env.GOOGLE_PRIVATE_KEY;
    if (!rawKey) return undefined;

    let key = rawKey
        .trim()
        .replace(/^["']|["']\$/g, '')
        .replace(/\\n/g, '\n');

    // Fix accidental leading 'n' if '\n' lost its backslash when copied
    if (key.startsWith('nMII')) {
        key = key.slice(1);
    }

    // Automatically wrap in PEM headers if missing
    if (!key.includes('-----BEGIN PRIVATE KEY-----')) {
        key = `-----BEGIN PRIVATE KEY-----\n${key}\n-----END PRIVATE KEY-----\n`;
    }

    return key;
}

function getSheetsClient() {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL?.trim();
    const privateKey = getFormattedPrivateKey();

    if (!clientEmail || !privateKey) {
        console.warn(
            '[Google Sheets Sync] Missing GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY.'
        );
        return null;
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: clientEmail,
            private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return google.sheets({ version: 'v4', auth });
}

export async function appendMemberToSheet(member: {
    fullName: string;
    email: string;
    country: string;
    growthFocus: string;
}) {
    const spreadsheetId = extractSpreadsheetId(process.env.GOOGLE_SHEET_ID);
    const sheets = getSheetsClient();

    if (!spreadsheetId || !sheets) {
        console.warn('[Google Sheets Sync] Skipped: Missing GOOGLE_SHEET_ID or client.');
        return;
    }

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId,
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
        console.log('[Google Sheets Sync] Successfully appended member to Members tab.');
    } catch (err: any) {
        console.error('[Google Sheets Sync] Failed to append member:', err?.message || err);
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
    const spreadsheetId = extractSpreadsheetId(process.env.GOOGLE_SHEET_ID);
    const sheets = getSheetsClient();

    if (!spreadsheetId || !sheets) {
        console.warn('[Google Sheets Sync] Skipped: Missing GOOGLE_SHEET_ID or client.');
        return;
    }

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId,
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
                        volunteer.reasonToServe || '',
                    ],
                ],
            },
        });
        console.log('[Google Sheets Sync] Successfully appended volunteer to Volunteers tab.');
    } catch (err: any) {
        console.error('[Google Sheets Sync] Failed to append volunteer:', err?.message || err);
    }
}