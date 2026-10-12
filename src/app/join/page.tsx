"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Send, ShieldCheck, Sparkles, Loader2 } from "lucide-react";

const GROWTH_AREAS = [
    "Personal Growth & Self-Awareness",
    "Courageous Leadership",
    "Mindset & Emotional Resilience",
    "Communication & Clarity",
    "Purpose & Direction",
    "Character & Responsibility",
];

export default function JoinPage() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [growthFocus, setGrowthFocus] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            const res = await fetch("/api/onboard", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, email, country, growthFocus }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setSubmitted(true);
        } catch (err: any) {
            setErrorMessage(err.message || "Failed to submit. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            {!submitted ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    {/* Left Context Column */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-semibold">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Take The Next Step</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-white leading-tight">
                            Begin Your Journey as a <span className="text-brand-gold">Becomer</span>.
                        </h1>

                        <p className="text-sm text-brand-muted leading-relaxed">
                            Join intentional, growth-minded individuals across 7+ nations. Enter your details to access our weekly live sessions and private Telegram hub.
                        </p>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-2.5 text-xs text-brand-white">
                                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                                <span>Sunday sessions hosted live on Google Meet</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs text-brand-white">
                                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                                <span>Weekly prompt & challenge delivered on Telegram</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs text-brand-white">
                                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                                <span>100% Free community membership</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="md:col-span-7 bg-brand-slate/40 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {errorMessage && (
                                <div className="p-3 text-xs rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                                    {errorMessage}
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. David Okafor"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">
                                    Country *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Nigeria, Kenya, South Africa"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">
                                    Primary Area of Growth (Optional)
                                </label>
                                <select
                                    value={growthFocus}
                                    onChange={(e) => setGrowthFocus(e.target.value)}
                                    className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white focus:outline-none focus:border-brand-gold transition"
                                >
                                    <option value="">Select an area of focus</option>
                                    {GROWTH_AREAS.map((area) => (
                                        <option key={area} value={area} className="bg-brand-navy text-brand-white">
                                            {area}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-4 flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold py-3.5 rounded-xl hover:brightness-110 active:scale-[0.99] transition disabled:opacity-50 shadow-md shadow-brand-gold/10"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Securing Your Spot...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Complete Onboarding</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                /* Instant Success Screen */
                <div className="max-w-xl mx-auto text-center space-y-6 p-8 sm:p-10 rounded-3xl bg-brand-slate/40 border border-brand-gold/30">
                    <div className="w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-3xl font-extrabold text-brand-white">Welcome to The Becoming!</h2>
                        <p className="text-sm text-brand-muted">
                            Your details have been registered. An onboarding email is on its way to <strong className="text-brand-white">{email}</strong>.
                        </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-brand-navy border border-white/10 text-left space-y-3">
                        <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Final Step</span>
                        <h4 className="text-sm font-semibold text-brand-white">Join the Telegram Community Channel</h4>
                        <p className="text-xs text-brand-muted leading-relaxed">
                            This is where weekly prompts, challenges, and Google Meet session links are posted live.
                        </p>
                        <a
                            href="https://t.me/thebecomingwithsam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold py-3 rounded-xl hover:brightness-110 transition mt-2 text-sm"
                        >
                            <Send className="w-4 h-4" />
                            <span>Enter Telegram Channel Now</span>
                        </a>
                    </div>

                    <div className="pt-2">
                        <Link href="/" className="text-xs font-medium text-brand-muted hover:text-brand-white transition">
                            ← Return to Homepage
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}