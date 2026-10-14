import Link from 'next/link';
import { Shield, FileText, Cookie, Users, AlertCircle, Camera, Mail, MapPin } from 'lucide-react';

export const metadata = {
    title: 'Website Policies & Governance | The Becoming',
    description: 'Privacy Notice, Terms of Use, Community Standards, and Disclaimers for The Becoming with Dr. Immanuelson Sam.',
};

const POLICY_NAVS = [
    { id: 'privacy', label: '1. Privacy Notice', icon: Shield },
    { id: 'terms', label: '2. Terms of Use', icon: FileText },
    { id: 'cookies', label: '3. Cookie Notice', icon: Cookie },
    { id: 'standards', label: '4. Community Standards', icon: Users },
    { id: 'disclaimer', label: '5. Mentorship Disclaimer', icon: AlertCircle },
    { id: 'media', label: '6. Media Consent', icon: Camera },
];

export default function PoliciesPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
            {/* Header */}
            <div className="space-y-4 text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">
                    Governance &amp; Trust
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-brand-white tracking-tight">
                    Website Policies
                </h1>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    Effective Date: 13 October 2026 • Last Updated: 13 October 2026
                </p>
            </div>

            {/* Quick Jump Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-brand-slate/40 border border-white/10">
                {POLICY_NAVS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="flex items-center gap-2.5 p-3 rounded-xl bg-brand-navy/80 border border-white/5 hover:border-brand-gold/40 text-xs font-semibold text-brand-white hover:text-brand-gold transition"
                        >
                            <Icon className="w-4 h-4 text-brand-gold shrink-0" />
                            <span>{item.label}</span>
                        </a>
                    );
                })}
            </div>

            {/* Policy Sections */}
            <div className="space-y-12 text-sm text-brand-muted leading-relaxed">
                {/* 1. PRIVACY NOTICE */}
                <section id="privacy" className="scroll-mt-28 rounded-3xl border border-white/10 bg-brand-slate/20 p-8 sm:p-10 space-y-6">
                    <div className="border-b border-white/10 pb-4">
                        <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">Section 01</span>
                        <h2 className="text-2xl font-black text-brand-white mt-1">Privacy Notice</h2>
                    </div>

                    <p>
                        <strong className="text-brand-white">The Becoming with Dr. Immanuelson Sam</strong> (&ldquo;The Becoming&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a community for people committed to personal growth, courageous leadership, purpose, character, and meaningful action. We respect the trust you place in us when you visit our website, register to join, attend an online session, or interact with our community.
                    </p>

                    <div className="p-4 rounded-2xl bg-brand-navy border border-white/10 space-y-1 text-xs">
                        <div className="font-bold text-brand-white">Data Controller &amp; Contact Information:</div>
                        <p>Responsible Party: <strong className="text-brand-white">The Becomers Community</strong></p>
                        <p>Location: <strong className="text-brand-white">Abuja, Nigeria</strong></p>
                        <p>Privacy Contact: <a href="mailto:immanuelsonsam416@gmail.com" className="text-brand-gold underline">immanuelsonsam416@gmail.com</a></p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-base font-bold text-brand-white">Information We Collect</h3>
                        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                            <li><strong className="text-brand-white">Registration details:</strong> Your name, email address, phone/WhatsApp (for volunteers), country, and primary area of growth submitted via our forms.</li>
                            <li><strong className="text-brand-white">Community information:</strong> Details you choose to share in discussions, feedback, session contributions, or weekly prompt responses.</li>
                            <li><strong className="text-brand-white">Communications:</strong> Information provided when you contact us or respond to an invitation.</li>
                            <li><strong className="text-brand-white">Technical information:</strong> Standard browser/device metadata and security logs generated when visiting our site.</li>
                        </ul>
                        <p className="text-xs italic text-amber-200/90 pt-1">
                            Please do not submit sensitive personal information—such as health details, government identity documents, or financial account details.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-base font-bold text-brand-white">How We Use &amp; Share Your Information</h3>
                        <p className="text-xs sm:text-sm">
                            We use your information to process your membership or volunteer request, send Sunday Session links and reminders, administer participation across Google Meet and Telegram, and maintain community safety. <strong className="text-brand-white">We do not sell personal information.</strong> We share limited data only with essential service providers (such as Supabase for database hosting, Resend for onboarding emails, and Google Workspace for community registries) and authorised community administrators bound by confidentiality.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-base font-bold text-brand-white">Your Rights &amp; Retention</h3>
                        <p className="text-xs sm:text-sm">
                            We retain information only as long as reasonably necessary for membership administration and community safety. You may request access, correction, deletion, or withdrawal of consent at any time by contacting <a href="mailto:immanuelsonsam416@gmail.com" className="text-brand-gold underline">immanuelsonsam416@gmail.com</a>. Individuals under 18 should not submit personal information without verified parent/guardian consent.
                        </p>
                    </div>
                </section>

                {/* 2. TERMS OF USE */}
                <section id="terms" className="scroll-mt-28 rounded-3xl border border-white/10 bg-brand-slate/20 p-8 sm:p-10 space-y-5">
                    <div className="border-b border-white/10 pb-4">
                        <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">Section 02</span>
                        <h2 className="text-2xl font-black text-brand-white mt-1">Website Terms of Use</h2>
                    </div>
                    <p className="text-xs sm:text-sm">
                        By accessing this website or submitting a registration form, you agree to these Terms. Membership in The Becoming is offered free of charge. You agree to provide accurate information, act respectfully, and never harass, spam, solicit members without permission, or share another person&apos;s private story without consent.
                    </p>
                    <p className="text-xs sm:text-sm">
                        <strong className="text-brand-white">Intellectual Property:</strong> Original website text, branding, session slide decks, and frameworks created by Dr. Immanuelson Sam and The Becoming are protected. You may download resources for personal, non-commercial growth, but may not commercially exploit or republish them without written permission.
                    </p>
                </section>

                {/* 3. COOKIE NOTICE */}
                <section id="cookies" className="scroll-mt-28 rounded-3xl border border-white/10 bg-brand-slate/20 p-8 sm:p-10 space-y-4">
                    <div className="border-b border-white/10 pb-4">
                        <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">Section 03</span>
                        <h2 className="text-2xl font-black text-brand-white mt-1">Cookie &amp; Similar Technologies Notice</h2>
                    </div>
                    <p className="text-xs sm:text-sm">
                        This website uses strictly necessary browser storage (such as `sessionStorage` to remember if you have already viewed our Volunteer prompt during your visit) and essential security/routing tokens provided by our hosting platform (Vercel). You can manage or clear cookies and local storage at any time via your browser settings.
                    </p>
                </section>

                {/* 4. COMMUNITY STANDARDS */}
                <section id="standards" className="scroll-mt-28 rounded-3xl border border-white/10 bg-brand-slate/20 p-8 sm:p-10 space-y-5">
                    <div className="border-b border-white/10 pb-4">
                        <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">Section 04</span>
                        <h2 className="text-2xl font-black text-brand-white mt-1">Community Standards</h2>
                    </div>
                    <p className="text-xs sm:text-sm">
                        Applies to all Sunday Sessions, Telegram spaces, and official channels:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <li className="p-3.5 rounded-xl bg-brand-navy border border-white/5"><strong className="text-brand-gold block">Respect is Non-Negotiable</strong> Treat members with dignity across nationality, profession, and background. Disagreement is welcome; abuse is not.</li>
                        <li className="p-3.5 rounded-xl bg-brand-navy border border-white/5"><strong className="text-brand-gold block">Protect Privacy</strong> Do not record, screenshot, forward, or publish private discussions or personal stories without permission.</li>
                        <li className="p-3.5 rounded-xl bg-brand-navy border border-white/5"><strong className="text-brand-gold block">Be Punctual (6:00 PM WAT)</strong> The Sunday Becoming Session begins strictly at 6:00 PM West Africa Time. Join on time and ready to engage.</li>
                        <li className="p-3.5 rounded-xl bg-brand-navy border border-white/5"><strong className="text-brand-gold block">Zero Spam or Solicitation</strong> No unsolicited promotions, chain messages, or fundraising using the community name.</li>
                    </ul>
                </section>

                {/* 5. DISCLAIMER */}
                <section id="disclaimer" className="scroll-mt-28 rounded-3xl border border-white/10 bg-brand-slate/20 p-8 sm:p-10 space-y-4">
                    <div className="border-b border-white/10 pb-4">
                        <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">Section 05</span>
                        <h2 className="text-2xl font-black text-brand-white mt-1">Personal Growth &amp; Mentorship Disclaimer</h2>
                    </div>
                    <p className="text-xs sm:text-sm">
                        The Becoming provides educational content, personal-development conversations, leadership learning, reflection prompts, and general mentorship perspectives. <strong className="text-brand-white">These materials are not medical, mental-health, legal, financial, investment, or tax advice.</strong> You are responsible for evaluating information and taking ownership of your decisions. The Becoming is not a crisis or emergency service.
                    </p>
                </section>

                {/* 6. MEDIA CONSENT */}
                <section id="media" className="scroll-mt-28 rounded-3xl border border-white/10 bg-brand-slate/20 p-8 sm:p-10 space-y-4">
                    <div className="border-b border-white/10 pb-4">
                        <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">Section 06</span>
                        <h2 className="text-2xl font-black text-brand-white mt-1">Media, Testimonials &amp; Recording Consent</h2>
                    </div>
                    <p className="text-xs sm:text-sm">
                        Participating in a live session does not automatically mean your image, voice, name, or story will be used in public promotional material. Whenever a session is recorded or a testimonial is featured publicly, we announce it clearly and seek separate, voluntary permission where applicable. You may withdraw future promotional consent at any time by emailing <a href="mailto:immanuelsonsam416@gmail.com" className="text-brand-gold underline">immanuelsonsam416@gmail.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}