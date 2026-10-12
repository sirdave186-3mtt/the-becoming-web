"use client";

import { useEffect, useState } from "react";
import { Globe2, Users, ArrowUpRight } from "lucide-react";

interface CountryStat {
    name: string;
    code: string;
}

const COUNTRIES: CountryStat[] = [
    { name: "Kenya", code: "KE" },
    { name: "Zambia", code: "ZM" },
    { name: "Botswana", code: "BW" },
    { name: "Nigeria", code: "NG" },
    { name: "Zimbabwe", code: "ZW" },
    { name: "Rwanda", code: "RW" },
    { name: "South Africa", code: "ZA" },
];

export default function GlobalFootprint({ currentCount = 84 }: { currentCount?: number }) {
    const [count, setCount] = useState(0);
    const targetCount = 1000;

    useEffect(() => {
        let start = 0;
        const duration = 1200; // ms
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = currentCount / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= currentCount) {
                setCount(currentCount);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [currentCount]);

    const percentage = Math.min(Math.round((count / targetCount) * 100), 100);

    return (
        <section className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl border border-white/10 bg-brand-slate/40 p-8 md:p-10 backdrop-blur-md relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Milestone Counter Progress */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="inline-flex items-center gap-2 text-brand-gold text-xs font-semibold tracking-wider uppercase">
                            <Users className="w-4 h-4" />
                            <span>Milestone 2026</span>
                        </div>
                        <h3 className="text-3xl font-black text-brand-white">
                            The Journey to <span className="text-brand-gold">1,000</span> Becomers
                        </h3>
                        <p className="text-sm text-brand-muted leading-relaxed">
                            We pursue healthy community growth, active participation, and visible transformation across borders.
                        </p>

                        <div className="pt-2 space-y-2">
                            <div className="flex justify-between text-xs font-semibold">
                                <span className="text-brand-white">{count} Registered Members</span>
                                <span className="text-brand-gold">{targetCount} Target</span>
                            </div>
                            <div className="w-full bg-brand-navy h-2.5 rounded-full overflow-hidden border border-white/5">
                                <div
                                    className="bg-gradient-to-r from-amber-500 to-brand-gold h-full rounded-full transition-all duration-700 ease-out"
                                    style={{ width: `${Math.max(percentage, 5)}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* 7 Nations Grid */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-wide text-brand-muted uppercase">
                            <Globe2 className="w-4 h-4 text-brand-gold" />
                            <span>Members Represented Across 7 Nations</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {COUNTRIES.map((country) => (
                                <div
                                    key={country.name}
                                    className="group p-3.5 rounded-xl bg-brand-navy/90 border border-white/10 hover:border-brand-gold/50 transition flex flex-col justify-between"
                                >
                                    <span className="text-xs font-semibold text-brand-muted group-hover:text-brand-gold transition">{country.code}</span>
                                    <span className="text-sm font-bold text-brand-white mt-1">{country.name}</span>
                                </div>
                            ))}
                            <div className="p-3.5 rounded-xl bg-brand-gold/10 border border-dashed border-brand-gold/40 flex flex-col justify-between text-brand-gold">
                                <ArrowUpRight className="w-4 h-4" />
                                <span className="text-xs font-bold leading-tight">+ Your Nation Next</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}