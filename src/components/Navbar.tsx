'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, HeartHandshake } from 'lucide-react';
import VolunteerModal from '@/components/VolunteerModal';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/sessions', label: 'Sessions' },
    { href: '/resources', label: 'Resources' },
    { href: '/founder', label: 'The Founder' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-navy/85 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Brand Icon & Title Lockup */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-brand-gold/30 bg-brand-slate/40 shrink-0 flex items-center justify-center shadow-sm">
                            <Image
                                src="/images/favicon.png"
                                alt="The Becoming Logo"
                                fill
                                sizes="40px"
                                className="object-contain p-0.5"
                                priority
                            />
                        </div>
                        <div>
                            <span className="text-base sm:text-lg font-black text-brand-white tracking-wider block leading-none group-hover:text-brand-gold transition">
                                THE BECOMING
                            </span>
                            <span className="text-[9px] sm:text-[10px] text-brand-gold font-bold tracking-widest uppercase block mt-1">
                                WITH DR. IMMANUELSON SAM
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-7">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-xs font-semibold tracking-wide transition ${isActive
                                            ? 'text-brand-gold'
                                            : 'text-brand-muted hover:text-brand-white'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => setVolunteerModalOpen(true)}
                            className="text-xs font-semibold text-brand-muted hover:text-brand-gold transition flex items-center gap-1.5"
                        >
                            <HeartHandshake className="w-3.5 h-3.5 text-brand-gold" />
                            <span>Volunteer</span>
                        </button>
                        <Link
                            href="/join"
                            className="inline-flex items-center gap-1.5 bg-brand-gold text-brand-navy font-bold px-5 py-2.5 rounded-full text-xs hover:brightness-110 transition shadow-md shadow-brand-gold/15"
                        >
                            <span>Join Now</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-xl border border-white/10 text-brand-white hover:border-brand-gold/40 transition"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-white/10 bg-brand-navy px-6 py-5 space-y-3">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block py-2 text-sm font-semibold ${isActive ? 'text-brand-gold' : 'text-brand-muted'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setVolunteerModalOpen(true);
                            }}
                            className="block py-2 text-sm font-semibold text-brand-muted hover:text-brand-gold text-left w-full"
                        >
                            Volunteer / Workforce
                        </button>
                        <div className="pt-2">
                            <Link
                                href="/join"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold px-5 py-3 rounded-full text-xs"
                            >
                                <span>Join The Community</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Global Volunteer Modal triggered from Navbar */}
            <VolunteerModal
                isOpen={volunteerModalOpen}
                onClose={() => setVolunteerModalOpen(false)}
            />
        </>
    );
}