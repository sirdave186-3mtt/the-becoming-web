'use client';

import { useState, useEffect } from 'react';
import { X, HeartHandshake, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

const VOLUNTEER_TRACKS = [
    'Media, Design & Communications',
    'Community Welcoming & Member Care',
    'Sunday Sessions Technical & Meeting Host',
    'Weekly Prompts & Accountability Circle',
    'Prayer & Intercessory Team',
    'Strategy & Administration',
];

export default function VolunteerModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('Nigeria');
    const [teamTrack, setTeamTrack] = useState(VOLUNTEER_TRACKS[0]);
    const [reasonToServe, setReasonToServe] = useState('');
    const [agreed, setAgreed] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    // Auto-trigger pop-up once after 20 seconds of browsing
    useEffect(() => {
        const hasSeen = sessionStorage.getItem('seen_volunteer_prompt');
        if (!hasSeen) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem('seen_volunteer_prompt', 'true');
            }, 20000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreed) {
            setErrorMsg('Please confirm that you agree to uphold the volunteer guidelines.');
            return;
        }

        setIsSubmitting(true);
        setErrorMsg('');

        try {
            const res = await fetch('/api/volunteer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName,
                    email,
                    phone,
                    country,
                    teamTrack,
                    reasonToServe,
                    agreedToGuidelines: agreed,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to submit application');

            setIsSubmitted(true);
        } catch (err: any) {
            setErrorMsg(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Floating CTA pill */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-brand-slate/90 hover:bg-brand-slate border border-brand-gold/40 text-brand-gold px-4 py-2.5 rounded-full text-xs font-bold shadow-xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
            >
                <HeartHandshake className="w-4 h-4 text-brand-gold" />
                <span>Volunteer with Us</span>
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-brand-navy border border-white/15 p-6 sm:p-8 shadow-2xl text-left">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-5 right-5 p-2 rounded-xl text-brand-muted hover:text-brand-white hover:bg-white/5 transition"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {isSubmitted ? (
                            <div className="text-center py-8 space-y-4">
                                <div className="w-14 h-14 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto border border-brand-gold/30">
                                    <CheckCircle2 className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-white">
                                    Thank You for Stepping Up
                                </h3>
                                <p className="text-xs text-brand-muted leading-relaxed">
                                    Your commitment to build the culture of <strong className="text-brand-white">The Becoming</strong> has been received. Our team will reach out to you via WhatsApp / Email shortly.
                                </p>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="mt-4 bg-brand-gold text-brand-navy font-bold px-6 py-2.5 rounded-full text-xs"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div>
                                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block">
                                        Build The Culture
                                    </span>
                                    <h3 className="text-2xl font-black text-brand-white">
                                        Become a Volunteer Builder
                                    </h3>
                                    <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                                        &ldquo;You are not just helping to run a community. You are helping to build its culture.&rdquo;
                                    </p>
                                </div>

                                {errorMsg && (
                                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs">
                                        {errorMsg}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-brand-white uppercase">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            placeholder="Your name"
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-brand-slate/40 border border-white/10 text-brand-white text-xs focus:border-brand-gold focus:outline-none"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-brand-white uppercase">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@email.com"
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-slate/40 border border-white/10 text-brand-white text-xs focus:border-brand-gold focus:outline-none"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[11px] font-bold text-brand-white uppercase">
                                                WhatsApp / Phone
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+234..."
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-slate/40 border border-white/10 text-brand-white text-xs focus:border-brand-gold focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-brand-white uppercase">
                                            Country of Residence
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            placeholder="e.g. Nigeria, Ghana, Kenya..."
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-brand-slate/40 border border-white/10 text-brand-white text-xs focus:border-brand-gold focus:outline-none"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-brand-white uppercase">
                                            Preferred Team Track
                                        </label>
                                        <select
                                            value={teamTrack}
                                            onChange={(e) => setTeamTrack(e.target.value)}
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-brand-slate/40 border border-white/10 text-brand-white text-xs focus:border-brand-gold focus:outline-none"
                                        >
                                            {VOLUNTEER_TRACKS.map((track) => (
                                                <option key={track} value={track} className="bg-brand-navy">
                                                    {track}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[11px] font-bold text-brand-white uppercase">
                                            Why do you want to serve?
                                        </label>
                                        <textarea
                                            rows={2}
                                            value={reasonToServe}
                                            onChange={(e) => setReasonToServe(e.target.value)}
                                            placeholder="Briefly share your motivation..."
                                            className="w-full px-3.5 py-2 rounded-xl bg-brand-slate/40 border border-white/10 text-brand-white text-xs focus:border-brand-gold focus:outline-none resize-none"
                                        />
                                    </div>

                                    {/* Commitment Checkbox matching Guideline 10 & Standard */}
                                    <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                                        <input
                                            type="checkbox"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                            className="mt-0.5 accent-brand-gold rounded"
                                        />
                                        <span className="text-[11px] text-brand-muted leading-tight">
                                            I agree to lead by example, honor punctuality (6:00 PM), and uphold the 12 Volunteer Guidelines of The Becoming.
                                        </span>
                                    </label>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 px-4 rounded-xl bg-brand-gold text-brand-navy font-bold text-xs hover:brightness-110 transition flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                <span>Submitting...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Submit Volunteer Application</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}