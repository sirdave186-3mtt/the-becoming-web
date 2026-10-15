import { unstable_cache } from 'next/cache';
import { supabase } from '@/lib/supabase';

export const getCachedCommunityStats = unstable_cache(
    async () => {
        // 1. Fetch total count strictly from 'becomers'
        const { count, error } = await supabase
            .from('becomers')
            .select('*', { count: 'exact', head: true });

        if (error) {
            console.error('[Stats Error]:', error);
            return { totalMembers: 1, countryCounts: {} };
        }

        // 2. Fetch country breakdown strictly from 'becomers' for the map
        const { data: membersData, error: mapError } = await supabase
            .from('becomers')
            .select('country');

        const countryCounts: Record<string, number> = {};
        if (!mapError && membersData) {
            membersData.forEach((member) => {
                if (member.country) {
                    countryCounts[member.country] = (countryCounts[member.country] || 0) + 1;
                }
            });
        }

        return {
            totalMembers: count || 0,
            countryCounts,
        };
    },
    ['community-stats'],
    { tags: ['community-stats'], revalidate: 3600 }
);