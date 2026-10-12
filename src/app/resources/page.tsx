import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck, Target, Users2, Sparkles } from 'lucide-react';
import GlobalFootprint from '@/components/GlobalFootprint';
import WeeklyRhythmEngine from '@/components/WeeklyRhythmEngine';

const PILLARS = [
    { icon: Target, title: "Personal Growth", desc: "Build self-awareness, intentional daily habits, and practical discipline." },
    { icon: ShieldCheck, title: "Character & Courage", desc: "Confront limiting beliefs, practice accountability, and do what growth demands." },
    { icon: Compass, title: "Purpose & Leadership", desc: "Lead yourself first, serve others, and align beliefs with meaningful action." },
    { icon: Users2, title: "Border-Free Community", desc: "Engage with Becomers across 7+ nations and learn through shared experience." },
];

export default function Home() {
    return (
        <div className="space-y-24 pb-20">
            {/* 1. Hero Section */}
            <section className="relative pt-20 px-6 max-w-5xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-medium tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Members from 7 Nations & Growing</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                    Don&apos;t Just Exist. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold">
                        Become.
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-base sm:text-lg text-brand-muted leading-relaxed">
                    A growth community and mentorship platform hosted by global speaker <strong className="text-brand-white">Dr. Immanuelson Sam</strong> for people committed to courageous leadership and purposeful action.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link
                        href="/join"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold px-8 py-3.5 rounded-full hover:brightness-110 transition shadow-lg shadow-brand-gold/20"
                    >
                        Join The Becoming
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/sessions"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 bg-brand-slate/40 text-brand-white px-7 py-3.5 rounded-full hover:bg-brand-slate transition"
                    >
                        Explore Sunday Sessions
                    </Link>
                </div>
            </section>

            {/* 2. Global Footprint & 1,000 Milestone Counter */}
            <GlobalFootprint currentCount={84} />

            {/* 3. Dynamic Weekly Rhythm Engine */}
            <WeeklyRhythmEngine />

            {/* 4. Core Pillars Micro-Cards */}
            <section className="max-w-6xl mx-auto px-6 space-y-10">
                <div className="text-center max-w-xl mx-auto space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold">What We Grow In</h2>
                    <p className="text-brand-muted text-sm">Growth is not an accident. It is shaped by your choices, habits, and mindset.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {PILLARS.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div key={pillar.title} className="p-6 rounded-2xl bg-brand-slate/40 border border-white/10 hover:border-brand-gold/40 transition space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-semibold text-lg">{pillar.title}</h3>
                                <p className="text-sm text-brand-muted leading-relaxed">{pillar.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}