import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
    // Optional: Verify CRON_SECRET if configured in Vercel Environment Variables
    const authHeader = req.headers.get('authorization');
    if (
        process.env.CRON_SECRET &&
        authHeader !== `Bearer ${process.env.CRON_SECRET}`
    ) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        // Lightweight metadata query to register database activity
        const { count, error } = await supabase
            .from('becomers')
            .select('*', { count: 'exact', head: true });

        if (error) throw error;

        return NextResponse.json({
            ok: true,
            status: 'Supabase database pinged successfully',
            registeredBecomers: count ?? 0,
            timestamp: new Date().toISOString(),
        });
    } catch (err: any) {
        return NextResponse.json(
            { ok: false, error: err.message || 'Database ping failed' },
            { status: 500 }
        );
    }
}