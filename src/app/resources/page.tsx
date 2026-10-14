'use client';

import { useState } from 'react';
import {
    FileText,
    Download,
    Eye,
    Sparkles,
    CheckCircle2,
    Copy,
    Check,
    BookOpen,
    ArrowRight
} from 'lucide-react';

interface SlideDeck {
    title: string;
    subtitle: string;
    session: string;
    theme: string;
    description: string;
    pdfPath: string;
    frameworkSteps: string[];
    becomingQuestion: string;
}

const DECKS: SlideDeck[] = [
    {
        title: 'Who Are You Becoming?',
        subtitle: 'Don’t just live. Become.',
        session: 'Sunday Session 01',
        theme: 'Habit Architecture & Intentionality',
        description:
            'The foundational keynote establishing why our future is quietly constructed through ordinary, repeated decisions rather than sudden arrivals.',
        pdfPath: '/resources/who-are-you-becoming.pdf',
        frameworkSteps: ['1. Awareness', '2. Decision', '3. Action', '4. Consistency'],
        becomingQuestion:
            'If your current habits, choices, and priorities continued for the next five years, would you be proud of the person you become?',
    },
    {
        title: 'The Person You Have Become',
        subtitle: 'The Journey Within',
        session: 'Sunday Session 03',
        theme: 'Deconstruction & Rebuilding Identity',
        description:
            'A deep dive into examining what has shaped you—unlearning inherited beliefs, dismantling excuses, and taking radical responsibility for what comes next.',
        pdfPath: '/resources/the-person-you-have-become.pdf',
        frameworkSteps: ['1. Awareness', '2. Question', '3. Unlearn', '4. Rebuild'],
        becomingQuestion:
            'What part of who you are today was shaped by a belief, environment, or experience that you have never stopped to question?',
    },
];

export default function ResourcesPage() {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (text: string, idx: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(idx);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-semibold">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Curated Growth Decks &amp; Frameworks</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-brand-white tracking-tight">
                    The Resource Hub
                </h1>
                <p className="text-sm text-brand-muted leading-relaxed">
                    Access the official slide decks, weekly prompts, and foundational frameworks delivered by Dr. Immanuelson Sam during our Sunday Sessions.
                </p>
            </div>

            {/* Featured Slide Decks Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {DECKS.map((deck, idx) => (
                    <div
                        key={deck.title}
                        className="rounded-3xl border border-white/10 bg-brand-slate/30 p-8 flex flex-col justify-between space-y-6 hover:border-brand-gold/40 transition duration-300"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">
                                    {deck.session}
                                </span>
                                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-brand-muted">
                                    Official Slide Deck
                                </span>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-brand-white leading-tight">
                                    {deck.title}
                                </h2>
                                <p className="text-xs text-brand-gold font-semibold mt-1">
                                    {deck.subtitle}
                                </p>
                            </div>

                            <p className="text-xs text-brand-muted leading-relaxed">
                                {deck.description}
                            </p>

                            {/* Framework Pills */}
                            <div className="space-y-2 pt-2">
                                <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider block">
                                    Core Framework
                                </span>
                                <div className="grid grid-cols-2 gap-2">
                                    {deck.frameworkSteps.map((step) => (
                                        <div
                                            key={step}
                                            className="px-3 py-2 rounded-xl bg-brand-navy border border-white/5 text-[11px] font-medium text-brand-white flex items-center gap-1.5"
                                        >
                                            <CheckCircle2 className="w-3 h-3 text-brand-gold shrink-0" />
                                            <span>{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* The Becoming Question Box */}
                            <div className="p-4 rounded-2xl bg-brand-navy border border-brand-gold/20 space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">
                                        The Becoming Question
                                    </span>
                                    <button
                                        onClick={() => handleCopy(deck.becomingQuestion, idx)}
                                        className="text-[10px] text-brand-muted hover:text-brand-gold flex items-center gap-1 transition"
                                    >
                                        {copiedIndex === idx ? (
                                            <>
                                                <Check className="w-3 h-3 text-green-400" />
                                                <span className="text-green-400">Copied</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-3 h-3" />
                                                <span>Copy</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                                <p className="text-xs text-brand-white italic leading-relaxed">
                                    &ldquo;{deck.becomingQuestion}&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* Download & View Actions */}
                        <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                            <a
                                href={deck.pdfPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold py-3 px-4 rounded-xl text-xs hover:brightness-110 transition shadow-md shadow-brand-gold/10"
                            >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Read Online</span>
                            </a>

                            <a
                                href={deck.pdfPath}
                                download
                                className="inline-flex items-center justify-center gap-2 border border-white/15 bg-brand-navy text-brand-white font-semibold py-3 px-4 rounded-xl text-xs hover:border-brand-gold/40 transition"
                            >
                                <Download className="w-3.5 h-3.5" />
                                <span>Download PDF</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Volunteer Culture Anchor Banner */}
            <div className="rounded-3xl border border-brand-gold/30 bg-gradient-to-r from-brand-slate/60 to-brand-navy p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-2 text-center md:text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                        Culture &amp; Service
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-brand-white">
                        The Becoming Volunteer Guidelines
                    </h3>
                    <p className="text-xs text-brand-muted max-w-xl leading-relaxed">
                        Review the 12 core guidelines, cultural standards, and leadership principles that govern the builders of this community.
                    </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                    <a
                        href="/resources/volunteer-guidelines.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/10 text-brand-gold font-bold px-6 py-3 rounded-full hover:bg-brand-gold hover:text-brand-navy transition text-xs"
                    >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Read Guidelines</span>
                    </a>
                </div>
            </div>
        </div>
    );
}