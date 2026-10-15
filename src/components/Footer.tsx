import Link from 'next/link';
import Image from 'next/image';
import {
    Mail,
    MapPin,
    ExternalLink,
    Calendar,
    FileText
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-brand-navy/95 text-brand-muted mt-24">
            <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
                {/* Main 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
                    {/* Column 1: Brand & Origin (4 cols) */}
                    <div className="lg:col-span-4 space-y-4">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-3 group">
                                <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-brand-gold/30 bg-brand-slate/40 shrink-0 flex items-center justify-center">
                                    <Image
                                        src="/images/favicon.png"
                                        alt="The Becoming Logo"
                                        fill
                                        sizes="40px"
                                        className="object-contain p-1"
                                    />
                                </div>
                                <div>
                                    <span className="text-lg font-black text-brand-white tracking-wider block leading-none group-hover:text-brand-gold transition">
                                        THE BECOMING
                                    </span>
                                    <span className="text-[10px] text-brand-gold font-bold tracking-widest uppercase block mt-1">
                                        WITH DR. IMMANUELSON SAM
                                    </span>
                                </div>
                            </Link>
                        </div>

                        <p className="text-xs text-brand-muted leading-relaxed">
                            Don&apos;t just exist. Become. A borderless Pan-African community for people committed to personal growth, courageous leadership, self-honesty, and meaningful action.
                        </p>

                        <div className="space-y-2 pt-1 text-xs">
                            <div className="flex items-center gap-2 text-brand-white/90">
                                <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                                <span>Epicenter: Abuja, Nigeria (Serving 9+ African Nations)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                                <a
                                    href="mailto:immanuelsonsam416@gmail.com"
                                    className="hover:text-brand-gold transition"
                                >
                                    immanuelsonsam416@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Navigation (2 cols) */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-white">
                            Platform
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            <li>
                                <Link href="/" className="hover:text-brand-gold transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-brand-gold transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/sessions" className="hover:text-brand-gold transition">
                                    Sunday Sessions
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="hover:text-brand-gold transition">
                                    Resource Hub
                                </Link>
                            </li>
                            <li>
                                <Link href="/founder" className="hover:text-brand-gold transition">
                                    The Founder
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/join"
                                    className="text-brand-gold font-semibold hover:underline"
                                >
                                    Join Community &rarr;
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Governance & Policies (3 cols) */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-white">
                            Policies &amp; Standards
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            <li>
                                <Link href="/policies#privacy" className="hover:text-brand-gold transition">
                                    Privacy Notice
                                </Link>
                            </li>
                            <li>
                                <Link href="/policies#terms" className="hover:text-brand-gold transition">
                                    Website Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link href="/policies#cookies" className="hover:text-brand-gold transition">
                                    Cookie Notice
                                </Link>
                            </li>
                            <li>
                                <Link href="/policies#standards" className="hover:text-brand-gold transition">
                                    Community Standards
                                </Link>
                            </li>
                            <li>
                                <Link href="/policies#disclaimer" className="hover:text-brand-gold transition">
                                    Mentorship Disclaimer
                                </Link>
                            </li>
                            <li>
                                <Link href="/policies#media" className="hover:text-brand-gold transition">
                                    Media &amp; Recording Consent
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Live Cadence & Executive Portal (3 cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-white">
                            Weekly Gathering
                        </h4>

                        <div className="p-4 rounded-2xl bg-brand-slate/30 border border-white/10 space-y-2">
                            <div className="flex items-center gap-2 text-brand-gold text-xs font-bold">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>Every Sunday • 6:00 PM WAT</span>
                            </div>
                            <p className="text-[11px] leading-relaxed">
                                Live online mentorship and accountability via Google Meet &amp; Telegram. Free &amp; open to intentional builders.
                            </p>
                        </div>

                        <div className="space-y-2 pt-1">
                            <a
                                href="https://www.goldenmuv.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-brand-white transition"
                            >
                                <span>Goldenmuv Consulting Portal</span>
                                <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
                            </a>

                            <a
                                href="/resources/volunteer-guidelines.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-brand-white transition"
                            >
                                <span>Volunteer Guidelines (PDF)</span>
                                <FileText className="w-3.5 h-3.5 text-brand-gold" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Disclaimer & Copyright Bar */}
                <div className="pt-8 border-t border-white/10 space-y-4 text-[11px] text-brand-muted/80">
                    <p className="leading-relaxed">
                        <strong className="text-brand-white/90">Disclaimer:</strong> The Becoming provides educational content, leadership learning, reflection prompts, and general mentorship perspectives. It is not a substitute for professional medical, mental-health, legal, financial, or tax advice.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                        <p>
                            &copy; 2026 The Becoming with Dr. Immanuelson Sam (The Becomers Community). All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="/policies#privacy" className="hover:text-brand-gold transition">
                                Privacy
                            </Link>
                            <span>•</span>
                            <Link href="/policies#terms" className="hover:text-brand-gold transition">
                                Terms
                            </Link>
                            <span>•</span>
                            <Link href="/policies#standards" className="hover:text-brand-gold transition">
                                Standards
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}