'use client';

import { Suspense, useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

const COUNTRIES = [
    'Nigeria',
    'Ghana',
    'Kenya',
    'Rwanda',
    'South Africa',
    'Liberia',
    'Uganda',
    'Zambia',
    'Zimbabwe',
    'Other',
];

const GROWTH_AREAS = [
    'Personal Growth & Self-Discipline',
    'Courageous & Servant Leadership',
    'Career & Strategic Clarity',
    'Mindset, Resilience & Character',
    'Purpose & Impactful Living',
];

function JoinForm() {
    const searchParams = useSearchParams();
    const countryParam = searchParams.get('country');

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('Nigeria');
    const [customCountry, setCustomCountry] = useState('');
    const [growthFocus, setGrowthFocus] = useState(GROWTH_AREAS[0]);
    const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
    const [optionalUpdates, setOptionalUpdates] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const customCountryRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (countryParam) {
            if (countryParam.toLowerCase() === 'other') {
                setCountry('Other');
                setTimeout(() => customCountryRef.current?.focus(), 150);
            } else {
                const matched = COUNTRIES.find(
                    (c) => c.toLowerCase() === countryParam.toLowerCase()
                );
                if (matched) {
                    setCountry(matched);
                } else {
                    setCountry('Other');
                    setCustomCountry(countryParam);
                }
            }
        }
    }, [countryParam]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');

        if (!agreedToPrivacy) {
            setErrorMsg('Please confirm that you have read and acknowledged the Privacy Notice.');
            return;
        }

        const finalCountry = country === 'Other' ? customCountry.trim() : country;
        if (!finalCountry) {
            setErrorMsg('Please specify your country of residence.');
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch('/api/onboard', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName,
                    email,
                    country: finalCountry,
                    growthFocus,
                    agreedToPrivacy,
                    optionalUpdates,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to submit registration');

            setIsSubmitted(true);
        } catch (err: any) {
            setErrorMsg(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="rounded-3xl border border-brand-gold/30 bg-brand-slate/40 p-8 sm:p-12 text-center space-y-6 max-w-lg mx-auto shadow-2xl animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto border border-brand-gold/30">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-white">
                        Welcome to The Becoming
                    </h2>
                    <p className="text-sm text-brand-muted leading-relaxed">
                        You are now registered, <strong className="text-brand-white">{fullName}</strong>. A confirmation email with the session guidelines and link has been sent to <span className="text-brand-gold">{email}</span>.
                    </p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-navy border border-white/5 space-y-2">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                        Next Live Gathering
                    </span>
                    <p className="text-xs text-brand-white">
                        Every Sunday • 6:00 PM (West Africa Time) Online
                    </p>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto text-left">
            {errorMsg && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs">
                    {errorMsg}
                </div>
            )}

            <div className="space-y-2">
                <label className="text-xs font-bold text-brand-white uppercase tracking-wider block">
                    Full Name
                </label>
                <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Oluwaseun Adeleke"
                    className="w-full px-4 py-3.5 rounded-xl bg-brand-navy border border-white/10 text-brand-white placeholder:text-brand-muted/50 focus:border-brand-gold focus:outline-none transition text-sm"
                />
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold text-brand-white uppercase tracking-wider block">
                    Email Address
                </label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. seun@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-brand-navy border border-white/10 text-brand-white placeholder:text-brand-muted/50 focus:border-brand-gold focus:outline-none transition text-sm"
                />
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold text-brand-white uppercase tracking-wider block">
                    Country of Residence
                </label>
                <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-brand-navy border border-white/10 text-brand-white focus:border-brand-gold focus:outline-none transition text-sm"
                >
                    {COUNTRIES.map((c) => (
                        <option key={c} value={c} className="bg-brand-navy text-brand-white">
                            {c}
                        </option>
                    ))}
                </select>
            </div>

            {country === 'Other' && (
                <div className="space-y-2 animate-in fade-in duration-200">
                    <label className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                        Enter Your Country
                    </label>
                    <input
                        ref={customCountryRef}
                        type="text"
                        required
                        value={customCountry}
                        onChange={(e) => setCustomCountry(e.target.value)}
                        placeholder="Type your country..."
                        className="w-full px-4 py-3.5 rounded-xl bg-brand-navy border border-brand-gold/50 text-brand-white placeholder:text-brand-muted/50 focus:border-brand-gold focus:outline-none transition text-sm"
                    />
                </div>
            )}

            <div className="space-y-2">
                <label className="text-xs font-bold text-brand-white uppercase tracking-wider block">
                    Primary Area of Growth
                </label>
                <select
                    value={growthFocus}
                    onChange={(e) => setGrowthFocus(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-brand-navy border border-white/10 text-brand-white focus:border-brand-gold focus:outline-none transition text-sm"
                >
                    {GROWTH_AREAS.map((area) => (
                        <option key={area} value={area} className="bg-brand-navy text-brand-white">
                            {area}
                        </option>
                    ))}
                </select>
            </div>

            {/* Privacy Copy & Consent Checkboxes */}
            <div className="p-4 rounded-2xl bg-brand-navy/80 border border-white/10 space-y-3.5">
                <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <p className="text-[11px] text-brand-muted leading-relaxed">
                        We&apos;ll use the information you provide to process your request to join The Becoming, support onboarding, and send essential community and Sunday Session updates. We will handle your information in line with our{' '}
                        <Link href="/policies#privacy" className="text-brand-gold underline hover:brightness-110">
                            Privacy Notice
                        </Link>{' '}
                        and may use service providers to operate the website and community. Please do not submit sensitive personal information through this form.
                    </p>
                </div>

                <div className="space-y-2.5 pt-1 border-t border-white/5">
                    {/* Required Privacy & Standards Acknowledgement */}
                    <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                            type="checkbox"
                            required
                            checked={agreedToPrivacy}
                            onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                            className="mt-0.5 accent-brand-gold rounded cursor-pointer"
                        />
                        <span className="text-[11px] text-brand-white leading-tight">
                            I have read the{' '}
                            <Link href="/policies#privacy" className="text-brand-gold underline">
                                Privacy Notice
                            </Link>{' '}
                            and{' '}
                            <Link href="/policies#standards" className="text-brand-gold underline">
                                Community Standards
                            </Link>{' '}
                            and understand how The Becoming may use my personal information to administer my membership request. <span className="text-brand-gold">*</span>
                        </span>
                    </label>

                    {/* Optional Updates Checkbox */}
                    <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={optionalUpdates}
                            onChange={(e) => setOptionalUpdates(e.target.checked)}
                            className="mt-0.5 accent-brand-gold rounded cursor-pointer"
                        />
                        <span className="text-[11px] text-brand-muted leading-tight">
                            I would like to receive optional news, resources, and updates from The Becoming. I understand that I can unsubscribe at any time.
                        </span>
                    </label>
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold px-6 py-4 rounded-xl hover:brightness-110 transition text-sm shadow-lg shadow-brand-gold/20 disabled:opacity-60 cursor-pointer"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Registering...</span>
                    </>
                ) : (
                    <>
                        <span>Join The Becoming</span>
                        <ArrowRight className="w-4 h-4" />
                    </>
                )}
            </button>

            <p className="text-center text-[11px] text-brand-muted">
                Zero cost • Free weekly sessions on Sundays at 6:00 PM WAT
            </p>
        </form>
    );
}

export default function JoinPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
            <div className="text-center space-y-3 max-w-xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Community Membership</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-brand-white tracking-tight">
                    Step Into The Room
                </h1>
                <p className="text-sm text-brand-muted leading-relaxed">
                    The Becoming is a borderless growth circle convening every Sunday. Register below to receive session invites and weekly prompts.
                </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-brand-slate/40 p-6 sm:p-10 shadow-2xl">
                <Suspense
                    fallback={
                        <div className="py-12 flex justify-center text-brand-gold">
                            <Loader2 className="w-8 h-8 animate-spin" />
                        </div>
                    }
                >
                    <JoinForm />
                </Suspense>
            </div>
        </div>
    );
}