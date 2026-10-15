'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

const COUNTRIES = [
    'Nigeria',
    'Ghana',
    'Kenya',
    'South Africa',
    'Rwanda',
    'Uganda',
    'Cameroon',
    'United Kingdom',
    'United States',
    'Canada',
    'Other Country',
];

const GROWTH_FOCUS_AREAS = [
    'Personal Discipline & Daily Habits',
    'Career & Professional Advancement',
    'Spiritual Growth & Mental Clarity',
    'Leadership & Influence',
    'Financial Stewardship & Enterprise',
    'Relationship & Emotional Mastery',
];

export default function JoinPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        country: 'Nigeria',
        growthFocus: GROWTH_FOCUS_AREAS[0],
        linkedin: '',
        instagram: '',
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const res = await fetch('/api/onboard', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to register. Please try again.');
            }

            setSubmitted(true);
        } catch (err: any) {
            setErrorMessage(err.message || 'Something went wrong. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[90vh] py-16 px-6 bg-brand-navy relative overflow-hidden flex items-center justify-center">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl w-full mx-auto relative z-10 space-y-8">

                {/* Header / Intro */}
                <div className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold tracking-wider uppercase">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>The Community Registry</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-brand-white tracking-tight">
                        Step Into <span className="text-brand-gold">The Becoming</span>
                    </h1>
                    <p className="text-sm sm:text-base text-brand-muted max-w-lg mx-auto leading-relaxed">
                        Join a borderless Pan-African growth circle committed to self-honesty, courageous leadership, and intentional daily habits.
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-brand-slate/30 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
                    {submitted ? (
                        <div className="text-center space-y-6 py-6">
                            <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-2xl flex items-center justify-center mx-auto border border-brand-gold/30">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl sm:text-3xl font-black text-brand-white">
                                    Welcome, {formData.fullName.split(' ')[0]}!
                                </h2>
                                <p className="text-sm sm:text-base text-brand-muted max-w-md mx-auto">
                                    Your registration is confirmed. We&apos;ve sent a welcome email with your chapter details and community links to <span className="text-brand-white font-semibold">{formData.email}</span>.
                                </p>
                            </div>

                            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="https://t.me/thebecomingwithsam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold px-6 py-3.5 rounded-full text-xs hover:brightness-110 transition shadow-lg shadow-brand-gold/20"
                                >
                                    <span>Join Telegram Community</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="/resources"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-brand-white font-semibold px-6 py-3.5 rounded-full text-xs transition border border-white/10"
                                >
                                    <span>Explore Resource Hub</span>
                                </a>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {errorMessage && (
                                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center font-medium">
                                    {errorMessage}
                                </div>
                            )}

                            <div className="space-y-4">
                                {/* Full Name */}
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                        Full Name <span className="text-brand-gold">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. David Adebayo"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                        Email Address <span className="text-brand-gold">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="e.g. david@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                    />
                                </div>

                                {/* Country Chapter */}
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                        Country of Residence <span className="text-brand-gold">*</span>
                                    </label>
                                    <select
                                        value={formData.country}
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white focus:outline-none focus:border-brand-gold transition"
                                    >
                                        {COUNTRIES.map((c) => (
                                            <option key={c} value={c} className="bg-brand-navy text-brand-white">
                                                {c}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Growth Focus */}
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                        Primary Growth Focus <span className="text-brand-gold">*</span>
                                    </label>
                                    <select
                                        value={formData.growthFocus}
                                        onChange={(e) => setFormData({ ...formData, growthFocus: e.target.value })}
                                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white focus:outline-none focus:border-brand-gold transition"
                                    >
                                        {GROWTH_FOCUS_AREAS.map((area) => (
                                            <option key={area} value={area} className="bg-brand-navy text-brand-white">
                                                {area}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Social Media Grid (Optional) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                            LinkedIn <span className="text-brand-muted text-[10px] lowercase font-normal">(optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Profile URL or handle"
                                            value={formData.linkedin}
                                            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                            className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                            Instagram <span className="text-brand-muted text-[10px] lowercase font-normal">(optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="@username"
                                            value={formData.instagram}
                                            onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                                            className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Privacy Notice */}
                            <div className="flex items-center gap-2 text-[11px] text-brand-muted pt-2">
                                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                                <span>Your information is private and used solely for community mentorship updates.</span>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-brand-gold text-brand-navy font-black py-4 rounded-full text-xs uppercase tracking-widest hover:brightness-110 transition shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Registering...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Complete Registration</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>

                {/* Footer Link back to Home */}
                <div className="text-center">
                    <Link href="/" className="text-xs text-brand-muted hover:text-brand-gold transition">
                        &larr; Back to Homepage
                    </Link>
                </div>

            </div>
        </div>
    );
}