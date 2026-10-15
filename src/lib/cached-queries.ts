import { cacheTag, cacheLife } from 'next/cache';
import { supabase } from '@/lib/supabase';

export interface CommunityStats {
    totalMembers: number;
    countryCounts: Record<string, number>;
}

export async function getCachedCommunityStats(): Promise<CommunityStats> {
    'use cache';
    cacheTag('community-stats');
    cacheLife('hours');

    try {
        const { data, count, error } = await supabase
            .from('becomers')
            .select('country', { count: 'exact' });

        if (error || !data) {
            console.error('[Community Stats Error]:', error?.message);
            return { totalMembers: 0, countryCounts: {} };
        }

        const countryCounts: Record<string, number> = {};
        for (const row of data) {
            const key = row.country?.trim() || 'Other';
            countryCounts[key] = (countryCounts[key] || 0) + 1;
        }

        return {
            totalMembers: count ?? data.length,
            countryCounts,
        };
    } catch {
        return { totalMembers: 0, countryCounts: {} };
    }
}