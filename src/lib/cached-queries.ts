import { unstable_cache } from 'next/cache';
import { supabase } from '@/lib/supabase';

export const getCommunityStats = unstable_cache(
    async () => {
        // Strictly count ONLY the 'becomers' table (excluding volunteers)
        const { count, error } = await supabase
            .from('becomers')
            .select('*', { count: 'exact', head: true });

        if (error) {
            console.error('[Stats Error]:', error);
            return { totalMembers: 1 }; // Fallback
        }

        return { totalMembers: count || 0 };
    },
    ['community-stats'],
    { tags: ['community-stats'], revalidate: 3600 }
);