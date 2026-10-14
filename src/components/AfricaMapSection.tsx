'use client';

import Link from 'next/link';
import { Globe, ArrowUpRight, Radio, Users } from 'lucide-react';

interface CountryItem {
    name: string;
    code: string;
    flagUrl: string;
    isOrigin?: boolean;
}

interface AfricaMapSectionProps {
    totalMembers?: number;
    countryCounts?: Record<string, number>;
}

const AFRICAN_NATIONS: CountryItem[] = [
    { name: 'Nigeria', code: 'NG', flagUrl: 'https://flagcdn.com/w80/ng.png', isOrigin: true },
    { name: 'Ghana', code: 'GH', flagUrl: 'https://flagcdn.com/w80/gh.png' },
    { name: 'Kenya', code: 'KE', flagUrl: 'https://flagcdn.com/w80/ke.png' },
    { name: 'Rwanda', code: 'RW', flagUrl: 'https://flagcdn.com/w80/rw.png' },
    { name: 'South Africa', code: 'ZA', flagUrl: 'https://flagcdn.com/w80/za.png' },
    { name: 'Liberia', code: 'LR', flagUrl: 'https://flagcdn.com/w80/lr.png' },
    { name: 'Uganda', code: 'UG', flagUrl: 'https://flagcdn.com/w80/ug.png' },
    { name: 'Zambia', code: 'ZM', flagUrl: 'https://flagcdn.com/w80/zm.png' },
    { name: 'Zimbabwe', code: 'ZW', flagUrl: 'https://flagcdn.com/w80/zw.png' },
];

export default function AfricaMapSection({
    totalMembers = 0,
    countryCounts = {},
}: AfricaMapSectionProps) {
    return (
        <section className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-semibold">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Pan-African Footprint</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-brand-white tracking-tight">
                    One Movement across Africa
                </h2>
                <p className="text-sm text-brand-muted leading-relaxed">
                    Founded and anchored in <strong className="text-brand-gold">Nigeria</strong>, The Becoming has expanded across borderlines into dynamic hubs across West, East, and Southern Africa.
                </p>
            </div>

            {/* Map & Epicenter Visualization */}
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-brand-slate/40 via-brand-navy to-brand-navy p-6 sm:p-12 overflow-hidden shadow-2xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    {/* African Continent Graphic with Pulsing Radar on Nigeria */}
                    <div className="lg:col-span-6 flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-[340px] aspect-[4/5] flex items-center justify-center">
                            <svg
                                viewBox="0 0 400 480"
                                className="w-full h-full text-slate-800/80 drop-shadow-xl"
                                fill="currentColor"
                            >
                                <path d="M 120,40 Q 200,30 260,50 Q 340,90 350,140 Q 360,180 320,220 Q 340,260 300,320 Q 270,390 230,450 Q 200,470 190,440 Q 180,360 160,300 Q 140,240 100,210 Q 50,190 60,130 Q 70,80 120,40 Z" />
                            </svg>

                            {/* Nigeria Epicenter Radar Beacon */}
                            <div className="absolute top-[37%] left-[36%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                <span className="absolute w-12 h-12 rounded-full bg-brand-gold/30 animate-ping" />
                                <span className="absolute w-6 h-6 rounded-full bg-brand-gold/60" />
                                <span className="relative w-3.5 h-3.5 rounded-full bg-brand-gold shadow-lg shadow-brand-gold border-2 border-brand-navy" />
                            </div>

                            {/* Nigeria Marker Tag */}
                            <div className="absolute top-[28%] left-[42%] bg-brand-navy/95 border border-brand-gold/50 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2">
                                <Radio className="w-3 h-3 text-brand-gold animate-pulse" />
                                <div>
                                    <span className="text-[10px] font-black text-brand-gold uppercase tracking-wider block">
                                        Epicenter &amp; Origin
                                    </span>
                                    <span className="text-xs font-bold text-brand-white">
                                        Nigeria 🇳🇬 {countryCounts['Nigeria'] ? `• ${countryCounts['Nigeria']}` : ''}
                                    </span>
                                </div>
                            </div>

                            {/* Sub-hubs pins */}
                            <div className="absolute top-[40%] left-[28%] w-2 h-2 rounded-full bg-amber-200/80" title="Ghana" />
                            <div className="absolute top-[48%] left-[68%] w-2 h-2 rounded-full bg-amber-200/80" title="Kenya & Rwanda" />
                            <div className="absolute top-[78%] left-[54%] w-2 h-2 rounded-full bg-amber-200/80" title="South Africa" />
                        </div>
                    </div>

                    {/* Contextual Narrative */}
                    <div className="lg:col-span-6 space-y-5 text-left">
                        <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">
                            The Epicenter Mandate
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-white leading-tight">
                            From West Africa to the Entire Continent
                        </h3>
                        <p className="text-sm text-brand-muted leading-relaxed">
                            What sparked as an intentional gathering under the leadership of Dr. Immanuelson Sam in Nigeria has evolved into a connected diaspora across multiple borders.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="p-4 rounded-2xl bg-brand-navy/90 border border-white/10 flex items-center gap-3.5">
                                <div className="text-2xl font-black text-brand-gold">9+</div>
                                <div className="text-xs text-brand-muted">
                                    Active national delegations connected weekly.
                                </div>
                            </div>

                            {totalMembers > 0 && (
                                <div className="p-4 rounded-2xl bg-brand-navy/90 border border-brand-gold/30 flex items-center gap-3.5">
                                    <Users className="w-6 h-6 text-brand-gold shrink-0" />
                                    <div>
                                        <div className="text-lg font-black text-brand-white">
                                            {totalMembers.toLocaleString()}+
                                        </div>
                                        <div className="text-[11px] text-brand-muted">
                                            Registered Becomers
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Flag Country Cards Grid */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">
                        Select Your Nation to Join
                    </span>
                    <span className="text-xs text-brand-muted">Click a flag to pre-fill registration</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
                    {AFRICAN_NATIONS.map((nation) => {
                        const count = countryCounts[nation.name];
                        return (
                            <Link
                                key={nation.name}
                                href={`/join?country=${encodeURIComponent(nation.name)}`}
                                className={`group p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center gap-3 hover:-translate-y-1 hover:shadow-xl ${nation.isOrigin
                                        ? 'bg-brand-slate/60 border-brand-gold/60 shadow-brand-gold/10'
                                        : 'bg-brand-slate/30 border-white/10 hover:border-brand-gold/50 hover:bg-brand-slate/50'
                                    }`}
                            >
                                <div className="relative w-12 h-8 rounded shadow-md overflow-hidden border border-white/10 group-hover:scale-105 transition-transform">
                                    <img
                                        src={nation.flagUrl}
                                        alt={`${nation.name} flag`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="space-y-0.5">
                                    <span className="text-xs font-bold text-brand-white block group-hover:text-brand-gold transition">
                                        {nation.name}
                                    </span>
                                    {nation.isOrigin ? (
                                        <span className="text-[9px] font-semibold text-brand-gold tracking-wide uppercase">
                                            Origin Base {count ? `• ${count}` : ''}
                                        </span>
                                    ) : (
                                        <span className="text-[9px] text-brand-muted group-hover:text-brand-white/80 transition flex items-center justify-center gap-0.5">
                                            <span>{count ? `${count} Joined` : 'Join'}</span>
                                            <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
                                        </span>
                                    )}
                                </div>
                            </Link>
                        );
                    })}

                    {/* Your Nation Next Card */}
                    <Link
                        href="/join?country=other"
                        className="group p-4 rounded-2xl border border-dashed border-brand-gold/40 bg-brand-gold/5 hover:bg-brand-gold/10 hover:border-brand-gold transition-all duration-300 flex flex-col items-center text-center gap-3 hover:-translate-y-1"
                    >
                        <div className="w-12 h-8 rounded bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-105 transition-transform">
                            <Globe className="w-5 h-5" />
                        </div>
                        <div className="space-y-0.5">
                            <span className="text-xs font-bold text-brand-gold block">
                                Your Nation Next
                            </span>
                            <span className="text-[9px] text-brand-muted flex items-center justify-center gap-0.5">
                                <span>Add yours</span>
                                <ArrowUpRight className="w-2.5 h-2.5" />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}