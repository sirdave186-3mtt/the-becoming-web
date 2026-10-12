import Image from "next/image";
import Link from "next/link";
import {
    Sparkles,
    ExternalLink,
    ArrowRight,
    CheckCircle2
} from "lucide-react";

const CREDENTIALS = [
    "Managing Partner at Goldenmuv Premium Consulting Limited (GMPC)",
    "Over 15 Years in Commercial Banking, Reform & Human Capital Development",
    "Certified Management Consultant & Certified Leadership / Executive Coach",
    "Fellow, Young African Leaders Initiative (YALI) & World Bank Digital Program Participant",
    "Advised & Supported 50+ Organizations across 10+ Industries in West Africa",
];

const SIGNATURE_TOPICS = [
    {
        title: "Servant Leadership in Emerging Markets",
        desc: "Empowering leaders to serve humbly and build high-performance, inclusive teams in Africa's dynamic economies.",
    },
    {
        title: "Navigating Organizational Change for Sustainable Impact",
        desc: "Blending risk management, innovation, and intentional culture shifts to thrive amid volatility.",
    },
    {
        title: "Building Future-Ready Leaders in Africa",
        desc: "Equipping executives with practical frameworks for economic inclusion, diversity, and resilience.",
    },
    {
        title: "Culture Transformation & Team Empowerment",
        desc: "Unlocking emotional intelligence, ethical decision-making, and workplace productivity.",
    },
];

const CORE_CONVICTIONS = [
    "True transformation begins with unsparing self-honesty, not motivational hype.",
    "Leadership without character is simply refined manipulation.",
    "Your background is a context, not a life sentence. You participate in who you become.",
    "Real influence is measured by how many people grow in your presence.",
];

export default function FounderPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
            {/* 1. Hero / Editorial Profile */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Biography */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-semibold tracking-wide">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>The Founder &amp; Convener</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-black text-brand-white tracking-tight leading-[1.08]">
                        Dr. Immanuelson <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold">
                            Sam.
                        </span>
                    </h1>

                    <p className="text-sm font-semibold tracking-wider text-brand-gold uppercase">
                        Management Consultant • Leadership Coach • Global Speaker[cite: 27]
                    </p>

                    <p className="text-base text-brand-muted leading-relaxed">
                        Dr. Immanuelson Sam is the Managing Partner at <strong className="text-brand-white">Goldenmuv Premium Consulting Limited (GMPC)</strong>, driving bold strategic transformation across Nigeria and West Africa[cite: 29]. With over 15 years of battle-tested experience in commercial banking, public sector reform, and human capital development, he leads multidisciplinary teams to unlock sustainable growth[cite: 29].
                    </p>

                    <p className="text-sm text-brand-muted leading-relaxed">
                        His expertise spans leadership strategy, culture transformation, organizational design, and risk governance—guiding CEOs, ministers, and impact-driven founders[cite: 30]. As the visionary convener of <strong className="text-brand-white">The Becoming</strong>, he stewards a borderless mentorship community spanning 7 African nations, guiding intentional people to bridge the gap between intention and action.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <a
                            href="https://www.goldenmuv.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-bold px-7 py-3 rounded-full hover:brightness-110 transition text-xs shadow-md shadow-brand-gold/15"
                        >
                            <span>Book Dr. Sam (Personal Website)</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <Link
                            href="/sessions"
                            className="inline-flex items-center gap-2 border border-white/10 bg-brand-slate/40 text-brand-white px-6 py-3 rounded-full hover:border-brand-gold/40 transition text-xs"
                        >
                            Sunday Sessions
                        </Link>
                    </div>
                </div>

                {/* Right: Portrait Image Card */}
                <div className="lg:col-span-5">
                    <div className="relative rounded-3xl bg-gradient-to-br from-brand-slate/60 to-brand-navy border border-white/10 p-5 space-y-5 shadow-2xl">
                        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-brand-navy">
                            <Image
                                src="/images/immanuelson-sam.jfif"
                                alt="Dr. Immanuelson Sam"
                                fill
                                sizes="(max-width: 1024px) 100vw, 400px"
                                className="object-cover object-top"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 text-left">
                                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">Convener</span>
                                <h3 className="text-lg font-bold text-brand-white">Dr. Immanuelson Sam</h3>
                                <p className="text-[11px] text-brand-muted">Managing Partner, GMPC • YALI Fellow[cite: 29, 30, 41]</p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-brand-navy/80 border border-white/5 space-y-1">
                            <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">The Becoming Conviction</span>
                            <p className="text-xs text-brand-muted italic leading-relaxed">
                                &ldquo;You are not finished. Your present circumstances or past mistakes do not define the full extent of who you can become.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Credentials & Battle-Tested Experience */}
            <section className="rounded-3xl border border-white/10 bg-brand-slate/40 p-8 sm:p-12 space-y-8">
                <div className="max-w-2xl mx-auto text-center space-y-2">
                    <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Track Record</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-white">Accreditations &amp; Institutional Impact</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {CREDENTIALS.map((cred, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-brand-navy border border-white/10 flex items-start gap-3.5">
                            <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                            <p className="text-xs text-brand-white leading-relaxed font-medium">{cred}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Signature Keynotes with Speaking Stage Action Shot (.jfif) */}
            <section className="space-y-10">
                <div className="text-center max-w-xl mx-auto space-y-2">
                    <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Keynotes &amp; Consulting[cite: 31, 32]</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-white">Signature Speaking Topics</h2>
                    <p className="text-sm text-brand-muted">Tailored for corporate retreats, summits, governance councils, and leadership forums[cite: 31].</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Action Image Column */}
                    <div className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-white/10 bg-brand-navy aspect-[3/4] shadow-2xl group">
                        <Image
                            src="/images/immanuelson-speaking.jfif"
                            alt="Dr. Immanuelson Sam delivering keynote"
                            fill
                            sizes="(max-width: 1024px) 100vw, 380px"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider block">Keynote Facilitation</span>
                            <p className="text-xs text-brand-white">Unlocking human potential across Africa</p>
                        </div>
                    </div>

                    {/* Topics Grid Column */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {SIGNATURE_TOPICS.map((topic) => (
                            <div
                                key={topic.title}
                                className="p-6 rounded-2xl bg-brand-slate/30 border border-white/10 hover:border-brand-gold/40 transition space-y-2.5 flex flex-col justify-between"
                            >
                                <h3 className="font-bold text-base text-brand-white leading-snug">{topic.title}</h3>
                                <p className="text-xs text-brand-muted leading-relaxed">{topic.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Core Convictions */}
            <section className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Philosophy</span>
                    <h2 className="text-3xl font-extrabold text-brand-white">Foundational Convictions</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {CORE_CONVICTIONS.map((conviction, index) => (
                        <div key={index} className="p-5 rounded-2xl bg-brand-slate/20 border border-white/5 flex items-start gap-4">
                            <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                            <p className="text-xs text-brand-white leading-relaxed">{conviction}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Booking Gateway */}
            <section className="rounded-3xl border border-brand-gold/30 bg-gradient-to-r from-brand-slate/60 to-brand-navy p-10 sm:p-12 text-center space-y-6">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-brand-white">
                    Book Dr. Immanuelson Sam
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted max-w-xl mx-auto leading-relaxed">
                    For keynotes, executive leadership retreats, strategic advisory, or one-on-one executive consultations, visit his official firm portal[cite: 31, 32, 33, 34].
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://www.goldenmuv.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold px-8 py-3.5 rounded-full hover:brightness-110 transition text-xs shadow-lg shadow-brand-gold/20"
                    >
                        <span>Visit www.goldenmuv.com[cite: 27, 30]</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link
                        href="/join"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 bg-brand-navy text-brand-white px-7 py-3.5 rounded-full hover:border-brand-gold/40 transition text-xs"
                    >
                        Join The Becoming Community
                    </Link>
                </div>
            </section>
        </div>
    );
}