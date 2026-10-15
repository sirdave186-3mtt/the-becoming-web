'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Loader2, CheckCircle2, ArrowRight } from 'lucide-react';

const AFRICAN_COUNTRIES = [
    'Algeria',
    'Angola',
    'Benin',
    'Botswana',
    'Burkina Faso',
    'Burundi',
    'Cameroon',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Comoros',
    'Congo',
    'Democratic Republic of the Congo',
    'Djibouti',
    'Egypt',
    'Equatorial Guinea',
    'Eritrea',
    'Eswatini',
    'Ethiopia',
    'Gabon',
    'Gambia',
    'Ghana',
    'Guinea',
    'Guinea-Bissau',
    'Ivory Coast',
    'Kenya',
    'Lesotho',
    'Liberia',
    'Libya',
    'Madagascar',
    'Malawi',
    'Mali',
    'Mauritania',
    'Mauritius',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Niger',
    'Nigeria',
    'Rwanda',
    'Sao Tome and Principe',
    'Senegal',
    'Seychelles',
    'Sierra Leone',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Sudan',
    'Tanzania',
    'Togo',
    'Tunisia',
    'Uganda',
    'Zambia',
    'Zimbabwe',
];

const GROWTH_FOCUS_OPTIONS = [
    'Spiritual Depth & Prayer Life',
    'Career, Business & Financial Growth',
    'Leadership & Personal Discipline',
    'Mental Resilience & Emotional Mastery',
    'Relationships & Family',
];

export default function JoinPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        country: 'Nigeria',
        growthFocus: GROWTH_FOCUS_OPTIONS[0],
        linkedin: '',
        instagram: '',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
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
            if (!res.ok) throw new Error(data.error || 'Failed to complete registration.');

            setSuccess(true);
        } catch (err: any) {
            setErrorMessage(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-xl bg-brand-navy border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
                {success ? (
                    <div className="text-center space-y-6 py-6">
                        <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-2xl flex items-center justify-center mx-auto border border-brand-gold/30">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-2xl sm:text-3xl font-black text-brand-white">Welcome to The Becoming!</h1>
                            <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                                Your registration has been successfully saved and a welcome email has been sent to{' '}
                                <span className="text-brand-white font-semibold">{formData.email}</span>.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-brand-slate/30 border border-white/10 space-y-4 text-left">
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block">
                                Next Steps
                            </span>
                            <p className="text-xs text-brand-muted">
                                Join our official community channel on Telegram to connect with other members and receive updates on our Sunday live sessions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <a
                                    href="https://t.me/thebecomingwithsam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-brand-gold text-brand-navy font-bold py-3 px-6 rounded-full text-xs uppercase tracking-wider text-center hover:brightness-110 transition flex items-center justify-center gap-2"
                                >
                                    <span>Join Telegram</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                                <Link
                                    href="/resources"
                                    className="flex-1 bg-white/5 border border-white/10 text-brand-white font-bold py-3 px-6 rounded-full text-xs uppercase tracking-wider text-center hover:bg-white/10 transition"
                                >
                                    Resource Hub
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div>
                            <span className="text-[10px] text-brand-gold font-bold tracking-widest uppercase block mb-1">
                                Borderless Community
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-black text-brand-white">
                                Join The Movement
                            </h1>
                            <p className="text-xs text-brand-muted mt-1">
                                Step into a community of intentional people committed to personal growth and courageous leadership.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {errorMessage && (
                                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center font-medium">
                                    {errorMessage}
                                </div>
                            )}

                            {/* Full Name */}
                            <div className="space-y-1">
                                <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                    Full Name <span className="text-brand-gold">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. David Adekunle"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-1">
                                <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                    Email Address <span className="text-brand-gold">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="david@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                />
                            </div>

                            {/* Country & Growth Focus */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                        African Country <span className="text-brand-gold">*</span>
                                    </label>
                                    <select
                                        value={formData.country}
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white focus:outline-none focus:border-brand-gold transition"
                                    >
                                        {AFRICAN_COUNTRIES.map((c) => (
                                            <option key={c} value={c} className="bg-brand-navy text-brand-white">
                                                {c}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                        Primary Growth Focus <span className="text-brand-gold">*</span>
                                    </label>
                                    <select
                                        value={formData.growthFocus}
                                        onChange={(e) => setFormData({ ...formData, growthFocus: e.target.value })}
                                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-brand-white focus:outline-none focus:border-brand-gold transition"
                                    >
                                        {GROWTH_FOCUS_OPTIONS.map((g) => (
                                            <option key={g} value={g} className="bg-brand-navy text-brand-white">
                                                {g}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Social Media Grid (Optional) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
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
                                <div className="space-y-1">
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

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-brand-gold text-brand-navy font-black py-4 rounded-full text-xs uppercase tracking-widest hover:brightness-110 transition shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2 disabled:opacity-50 mt-4"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Completing Registration...</span>
                                    </>
                                ) : (
                                    <span>Complete Registration</span>
                                )}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}