import Link from "next/link";
import {
    Compass,
    ShieldCheck,
    Sparkles,
    CheckCircle2,
    XCircle,
    ArrowRight,
    HeartHandshake,
    Scale,
    Award,
    Users
} from "lucide-react";

const PRINCIPLES = [
    {
        num: "01",
        title: "Awareness Precedes Change",
        desc: "You cannot transform what you refuse to acknowledge. Honest self-diagnosis is the foundation of real progress.",
    },
    {
        num: "02",
        title: "Ownership Over Blame",
        desc: "Circumstances shape your starting point, but responsibility dictates your trajectory. Own your decisions without shame.",
    },
    {
        num: "03",
        title: "Action Beyond Inspiration",
        desc: "Inspiration creates momentum, but only consistent implementation produces permanent transformation.",
    },
    {
        num: "04",
        title: "Courage Through Discomfort",
        desc: "Growth rarely happens within comfortable routines. Courage is acting with clarity despite uncertainty.",
    },
    {
        num: "05",
        title: "Community Over Isolation",
        desc: "Meaningful growth accelerates when pursued alongside others who hold you to your highest standard.",
    },
    {
        num: "06",
        title: "Progress Over Perfection",
        desc: "Perfection paralyses; iterative progress compounds. Small, disciplined steps consistently beat erratic bursts.",
    },
];

const VALUES = [
    { name: "Integrity", desc: "Alignment between personal conviction and public action." },
    { name: "Courage", desc: "Willingness to confront difficult truths and take necessary steps." },
    { name: "Respect", desc: "Honoring diverse perspectives across all background contexts." },
    { name: "Inclusion", desc: "A welcoming, border-free environment for intentional seekers." },
    { name: "Accountability", desc: "Following through on commitments and owning our outcomes." },
    { name: "Contribution", desc: "Using personal transformation to lift and empower others." },
    { name: "Humility", desc: "Recognizing that every leader remains an active learner." },
    { name: "Consistency", desc: "Prioritizing small, disciplined daily habits over sporadic hype." },
];

const BOUNDARIES = [
    {
        is: "A structured mentorship community focused on intentional personal development.",
        isNot: "A casual chat room or unregulated social network feed.",
    },
    {
        is: "A safe space for honest dialogue, self-reflection, and mutual accountability.",
        isNot: "A quick-fix motivational hype chamber with hollow promises.",
    },
    {
        is: "An environment of mutual respect, mature perspectives, and privacy protection.",
        isNot: "A platform for solicitation, self-promotion, or political debate.",
    },
];

export default function AboutPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
            {/* 1. Philosophy Hero */}
            <section className="text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-semibold tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Our Philosophy & Foundation</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-brand-white tracking-tight leading-[1.1]">
                    The Art of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold">
                        Intentional Becoming.
                    </span>
                </h1>

                <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
                    The Becoming is built on a single conviction: human potential is not fixed. We provide the structure, accountability, and guidance needed to bridge the gap between intention and action.
                </p>
            </section>

            {/* 2. The 6 Principles of Growth */}
            <section className="space-y-10">
                <div className="text-center max-w-xl mx-auto space-y-2">
                    <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Foundations</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-white">6 Principles of Growth</h2>
                    <p className="text-sm text-brand-muted">The core rules that guide every lesson, challenge, and conversation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PRINCIPLES.map((principle) => (
                        <div
                            key={principle.num}
                            className="p-6 rounded-3xl bg-brand-slate/30 border border-white/10 hover:border-brand-gold/40 transition flex flex-col justify-between space-y-4"
                        >
                            <span className="text-3xl font-black text-brand-gold/40 block tracking-tight">
                                {principle.num}
                            </span>
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-brand-white leading-snug">{principle.title}</h3>
                                <p className="text-xs text-brand-muted leading-relaxed">{principle.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Core Values Grid */}
            <section className="rounded-3xl border border-white/10 bg-brand-slate/40 p-8 sm:p-12 space-y-10">
                <div className="text-center max-w-xl mx-auto space-y-2">
                    <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Values</span>
                    <h2 className="text-3xl font-extrabold text-brand-white">Our 8 Pillars of Character</h2>
                    <p className="text-sm text-brand-muted">These non-negotiable standards define how we interact and grow together.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {VALUES.map((val) => (
                        <div key={val.name} className="p-5 rounded-2xl bg-brand-navy border border-white/10 space-y-2">
                            <h4 className="font-bold text-sm text-brand-gold">{val.name}</h4>
                            <p className="text-xs text-brand-muted leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Boundaries Matrix: What We Are vs What We Are Not */}
            <section className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Clarity</span>
                    <h2 className="text-3xl font-extrabold text-brand-white">What The Becoming Is &amp; Isn&apos;t</h2>
                    <p className="text-sm text-brand-muted">Setting clear expectations preserves the maturity of the space.</p>
                </div>

                <div className="space-y-4">
                    {BOUNDARIES.map((item, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-brand-slate/20 border border-white/10"
                        >
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-xs font-bold text-brand-white uppercase tracking-wider block mb-1">What It Is</span>
                                    <p className="text-xs text-brand-muted leading-relaxed">{item.is}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-4">
                                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">What It Is Not</span>
                                    <p className="text-xs text-brand-muted leading-relaxed">{item.isNot}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Call to Action */}
            <section className="rounded-3xl border border-brand-gold/30 bg-gradient-to-r from-brand-slate/60 to-brand-navy p-10 text-center space-y-6">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-brand-white">
                    Align With a Movement of Purpose
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted max-w-lg mx-auto">
                    If these principles align with how you desire to live and lead, your place is waiting.
                </p>
                <Link
                    href="/join"
                    className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-bold px-8 py-3.5 rounded-full hover:brightness-110 transition text-xs shadow-lg shadow-brand-gold/20"
                >
                    <span>Join The Community</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </section>
        </div>
    );
}