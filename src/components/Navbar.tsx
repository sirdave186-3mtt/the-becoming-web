'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Sunday Sessions', href: '/sessions' },
    { name: 'Resources', href: '/resources' },
    { name: 'The Founder', href: '/founder' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile drawer on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-brand-navy/95 backdrop-blur-md border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link href="/" className="flex flex-col group">
                        <span className="text-base sm:text-xl font-black text-brand-white tracking-wider group-hover:text-brand-gold transition">
                            THE BECOMING
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                            WITH DR. IMMANUELSON SAM
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-brand-muted">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative py-1 transition-colors hover:text-brand-white ${isActive ? 'text-brand-white font-bold' : ''
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/join"
                            className="inline-flex items-center justify-center bg-brand-gold text-brand-navy font-bold px-5 py-2.5 rounded-full hover:brightness-110 transition text-xs shadow-md shadow-brand-gold/20"
                        >
                            Join Community
                        </Link>
                    </div>

                    {/* Mobile Header Actions */}
                    <div className="flex md:hidden items-center gap-2">
                        <Link
                            href="/join"
                            className="inline-flex items-center justify-center bg-brand-gold text-brand-navy font-bold px-3 py-1.5 rounded-full text-xs"
                        >
                            Join
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                            className="p-2 rounded-xl text-brand-white hover:bg-white/10 transition"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Full-Screen Mobile Drawer Overlay */}
            {isOpen && (
                <div className="fixed inset-x-0 top-[72px] h-[calc(100dvh-72px)] z-[100] bg-brand-navy border-t border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto">
                    <nav className="flex flex-col gap-2">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center justify-between px-4 py-4 rounded-2xl text-base font-semibold transition ${isActive
                                            ? 'bg-brand-slate/80 text-brand-gold font-bold border border-brand-gold/40'
                                            : 'text-brand-muted hover:text-brand-white hover:bg-white/5'
                                        }`}
                                >
                                    <span>{link.name}</span>
                                    <ArrowRight
                                        className={`w-4 h-4 ${isActive ? 'text-brand-gold' : 'opacity-40'}`}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="pt-6 pb-4 border-t border-white/10 space-y-4">
                        <Link
                            href="/join"
                            className="w-full inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold px-6 py-4 rounded-full text-sm shadow-lg shadow-brand-gold/20"
                        >
                            <span>Join The Becoming</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <p className="text-center text-[11px] text-brand-muted">
                            Weekly Sundays at 6:00 PM Online • Free &amp; Borderless
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}