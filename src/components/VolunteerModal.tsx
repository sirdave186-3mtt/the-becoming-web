'use client';

import { useState } from 'react';
import { X, Loader2, CheckCircle2 } from 'lucide-react';

interface VolunteerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TEAM_TRACKS = [
    'Prayer & Intercession',
    'Content & Editorial Writing',
    'Technical & Web Engineering',
    'Media, Graphics & Video Editing',
    'Community Moderation & Administration',
    'Logistics & Chapter Coordination',
];

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

export default function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        country: 'Nigeria',
        teamTrack: TEAM_TRACKS[0],
        reasonToServe: '',
        agreedToGuidelines: false,
        linkedin: '',
        instagram: '',
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.agreedToGuidelines) {
            setErrorMessage('Please confirm that you have reviewed the volunteer guidelines.');
            return;
        }

        setLoading(true);
        setErrorMessage('');

        try {
            const res = await fetch('/api/volunteer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to submit application.');

            setSubmitted(true);
        } catch (err: any) {
            setErrorMessage(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <div className="relative w-full max-w-xl bg-brand-navy border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-brand-muted hover:text-brand-white transition"
                >
                    <X className="w-5 h-5" />
                </button>

                {submitted ? (
                    <div className="text-center space-y-6 py-8">
                        <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-2xl flex items-center justify-center mx-auto border border-brand-gold/30">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-brand-white">Application Received!</h3>
                            <p className="text-sm text-brand-muted max-w-md mx-auto">
                                Thank you for stepping up to serve. We have sent a confirmation email with your service details and guidelines link to <span className="text-brand-white font-semibold">{formData.email}</span>.
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                setSubmitted(false);
                                onClose();
                            }}
                            className="bg-brand-gold text-brand-navy font-bold px-8 py-3 rounded-full text-xs uppercase tracking-wider"
                        >
                            Close Window
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div>
                            <span className="text-[10px] text-brand-gold font-bold tracking-widest uppercase block mb-1">
                                Core Workforce Recruitment
                            </span>
                            <h2 className="text-2xl font-black text-brand-white">
                                Join The Becoming Workforce
                            </h2>
                            <p className="text-xs text-brand-muted mt-1">
                                Contribute your skills, time, and dedication to building a movement of intentional people.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
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
                                    placeholder="e.g. Sarah Jenkins"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                />
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                        Email Address <span className="text-brand-gold">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="sarah@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                        WhatsApp / Phone <span className="text-brand-gold">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="+234..."
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                    />
                                </div>
                            </div>

                            {/* Country & Team Track */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                        Country <span className="text-brand-gold">*</span>
                                    </label>
                                    <select
                                        value={formData.country}
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-brand-white focus:outline-none focus:border-brand-gold transition"
                                    >
                                        {COUNTRIES.map((c) => (
                                            <option key={c} value={c} className="bg-brand-navy text-brand-white">
                                                {c}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                        Service Track <span className="text-brand-gold">*</span>
                                    </label>
                                    <select
                                        value={formData.teamTrack}
                                        onChange={(e) => setFormData({ ...formData, teamTrack: e.target.value })}
                                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-brand-white focus:outline-none focus:border-brand-gold transition"
                                    >
                                        {TEAM_TRACKS.map((t) => (
                                            <option key={t} value={t} className="bg-brand-navy text-brand-white">
                                                {t}
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
                                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
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
                                        className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition"
                                    />
                                </div>
                            </div>

                            {/* Reason to Serve */}
                            <div className="space-y-1">
                                <label className="block text-xs font-bold uppercase tracking-wider text-brand-white">
                                    Why do you wish to serve in this team?
                                </label>
                                <textarea
                                    rows={2}
                                    placeholder="Briefly share your heart or relevant experience..."
                                    value={formData.reasonToServe}
                                    onChange={(e) => setFormData({ ...formData, reasonToServe: e.target.value })}
                                    className="w-full bg-brand-navy/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-brand-white placeholder-brand-muted/50 focus:outline-none focus:border-brand-gold transition resize-none"
                                />
                            </div>

                            {/* Guidelines Checkbox */}
                            <div className="pt-2">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.agreedToGuidelines}
                                        onChange={(e) => setFormData({ ...formData, agreedToGuidelines: e.target.checked })}
                                        className="mt-1 rounded accent-brand-gold"
                                    />
                                    <span className="text-xs text-brand-muted leading-relaxed">
                                        I have reviewed and agree to abide by the <a href="/resources/volunteer-guidelines.pdf" target="_blank" className="text-brand-gold underline">Volunteer Guidelines</a> and code of conduct.
                                    </span>
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-brand-gold text-brand-navy font-black py-3.5 rounded-full text-xs uppercase tracking-widest hover:brightness-110 transition shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2 disabled:opacity-50 mt-4"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Submitting Application...</span>
                                    </>
                                ) : (
                                    <span>Submit Volunteer Application</span>
                                )}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}