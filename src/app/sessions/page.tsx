import Link from "next/link";
import {
    Calendar,
    Clock,
    Video,
    CheckCircle2,
    ArrowRight
} from "lucide-react";

const AGENDA_STEPS = [
    {
        step: "01",
        title: "Welcome & Opening Reflection",
        desc: "Grounding thoughts, weekly check-in, and setting the conversational tone.",
    },
    {
        step: "02",
        title: "Guided Teaching / Presentation",
        desc: "A focused growth topic on communication, leadership, courage, or mindset hosted by Dr. Immanuelson Sam.",
    },
    {
        step: "03",
        title: "The Becoming Question",
        desc: "A direct prompt presented to the room that invites deep self-examination.",
    },
    {
        step: "04",
        title: "Member Perspectives & Discussion",
        desc: "Open, respectful dialogue where members across nations contribute insights and lived experiences.",
    },
    {
        step: "05",
        title: "The Becoming Challenge",
        desc: "A single, concrete action assigned to every Becomer to execute before the next gathering.",
    },
    {
        step: "06",
        title: "Closing Reflection & Next Steps",
        desc: "Final alignments, community announcements, and accountability pairings.",
    },
];

const COMMUNITY_STANDARDS = [
    "Be Punctual — Sessions begin at 6:00 PM (WAT) sharp.",
    "Participate with Maturity — Listen actively, speak with intention, and make room for others.",
    "Respect Every Member — Disagreement is welcome; disrespect is never tolerated.",
    "Protect Member Privacy — Personal stories shared inside the room remain in the room.",
];

export default function SessionsPage() {
    const googleCalendarUrl =
        "https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Becoming+Sunday+Session&details=Weekly+Mentorship+and+Growth+Gathering+with+Dr.+Immanuelson+Sam.+Join+link:+https://meet.google.com/fct-fmvo-qeu&dates=20261018T170000Z/20261018T183000Z&recur=RRULE:FREQ=WEEKLY;BYDAY=SU";

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
            {/* 1. Header & Live Meeting Banner */}
            <section className="text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-semibold tracking-wide">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Every Sunday • 6:00 PM Online</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-brand-white tracking-tight leading-[1.1]">
                    The Sunday <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold">
                        Becoming Session.
                    </span>
                </h1>

                <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">
                    A dedicated live online environment to reflect, connect across national borders, challenge limiting assumptions, and establish tangible actions for the week ahead.
                </p>

                {/* Quick Access Card */}
                <div className="pt-4 max-w-xl mx-auto">
                    <div className="p-6 rounded-3xl bg-brand-slate/40 border border-brand-gold/40 shadow-2xl shadow-brand-gold/10 space-y-4">
                        <div className="flex items-center justify-between text-xs font-bold">
                            <span className="text-brand-gold flex items-center gap-1.5">
                                <Video className="w-4 h-4" /> Google Meet Platform
                            </span>
                            <span className="text-brand-emerald flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" /> Free & Open Access
                            </span>
                        </div>

                        <div className="text-left space-y-1">
                            <h3 className="text-lg font-bold text-brand-white">Weekly Mentorship Gathering</h3>
                            <p className="text-xs text-brand-muted">Sundays at 6:00 PM (West Africa Time)</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a
                                href="https://meet.google.com/fct-fmvo-qeu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold py-3.5 px-4 rounded-xl hover:brightness-110 transition text-xs shadow-md shadow-brand-gold/20"
                            >
                                <Video className="w-4 h-4" />
                                <span>Join Google Meet Room</span>
                            </a>
                            <a
                                href={googleCalendarUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-navy border border-white/10 text-brand-white font-semibold py-3.5 px-4 rounded-xl hover:border-brand-gold/40 transition text-xs"
                            >
                                <Calendar className="w-4 h-4 text-brand-gold" />
                                <span>Add to Google Calendar</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Targeted Reduction on 6-Step Agenda Breakdown */}
            <section className="space-y-10">
                <div className="text-center max-w-xl mx-auto space-y-2">
                    <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Architecture</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-white">What Happens In A Session</h2>
                    <p className="text-sm text-brand-muted">Every Sunday follows an intentional, structured format designed for maximum insight and participation.</p>
                </div>

                {/* Retains full card proportions with a balanced p-6 padding */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {AGENDA_STEPS.map((agenda) => (
                        <div
                            key={agenda.step}
                            className="p-6 rounded-3xl bg-brand-slate/30 border border-white/10 hover:border-brand-gold/40 transition flex flex-col justify-between space-y-4 relative overflow-hidden"
                        >
                            <span className="text-3xl font-black text-brand-gold/40 block tracking-tight">
                                {agenda.step}
                            </span>
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg text-brand-white leading-snug">{agenda.title}</h3>
                                <p className="text-xs text-brand-muted leading-relaxed">{agenda.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Fully Restored Spacious "Beyond Sunday Night" Cadence */}
            <section className="rounded-3xl border border-white/10 bg-brand-slate/40 p-8 sm:p-12">
                <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
                    <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Continuity</span>
                    <h2 className="text-3xl font-extrabold text-brand-white">Beyond Sunday Night</h2>
                    <p className="text-sm text-brand-muted">
                        The session does not end when the call disconnects. Growth lives in the cadence of the week.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 space-y-3">
                        <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">Monday</span>
                        <h4 className="font-bold text-base text-brand-white">The Becoming Question</h4>
                        <p className="text-xs text-brand-muted leading-relaxed">
                            A single, sharp question dropped into the Telegram group to guide your mental focus and self-examination.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 space-y-3">
                        <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">Wed / Thu</span>
                        <h4 className="font-bold text-base text-brand-white">The Becoming Challenge</h4>
                        <p className="text-xs text-brand-muted leading-relaxed">
                            One tangible, uncomfortable, or necessary action to execute and share feedback on before Sunday.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 space-y-3">
                        <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">Sunday (6:00 PM)</span>
                        <h4 className="font-bold text-base text-brand-white">The Live Gathering</h4>
                        <p className="text-xs text-brand-muted leading-relaxed">
                            Where Becomers reconvene, report breakthroughs, learn together, and reset for the coming week.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Fully Restored Community Standards */}
            <section className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Culture</span>
                    <h2 className="text-3xl font-extrabold text-brand-white">How We Show Up For One Another</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {COMMUNITY_STANDARDS.map((standard, index) => (
                        <div key={index} className="p-5 rounded-2xl bg-brand-slate/20 border border-white/5 flex items-start gap-4">
                            <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                            <p className="text-xs text-brand-white leading-relaxed">{standard}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Fully Restored Bottom Call To Action */}
            <section className="rounded-3xl border border-brand-gold/30 bg-gradient-to-r from-brand-slate/60 to-brand-navy p-10 text-center space-y-6">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-brand-white">
                    Reserve Your Place In The Next Session
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted max-w-lg mx-auto">
                    Complete the 1-minute onboarding to receive session reminders directly to your inbox and access our Telegram forum.
                </p>
                <Link
                    href="/join"
                    className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-bold px-8 py-3.5 rounded-full hover:brightness-110 transition text-xs shadow-lg shadow-brand-gold/20"
                >
                    <span>Complete Onboarding</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </section>
        </div>
    );
}