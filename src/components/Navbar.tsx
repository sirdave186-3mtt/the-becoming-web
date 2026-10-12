"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/sessions", label: "Sunday Sessions" },
    { href: "/resources", label: "Resources" },
    { href: "/founder", label: "The Founder" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-brand-navy/85 border-b border-white/10 transition-colors">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Brand Identity */}
                <Link href="/" className="group flex flex-col justify-center">
                    <span className="text-lg font-black tracking-tight text-brand-white group-hover:text-brand-gold transition duration-200">
                        THE BECOMING
                    </span>
                    <span className="text-[11px] font-medium tracking-widest text-brand-gold uppercase -mt-0.5">
                        with Dr. Immanuelson Sam
                    </span>
                </Link>

                {/* Global Standard Minimal Navigation Links */}
                <nav className="hidden md:flex items-center space-x-9 text-sm font-medium">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative py-2 transition-colors duration-200 ${isActive
                                        ? "text-brand-white font-semibold"
                                        : "text-brand-muted hover:text-brand-white"
                                    }`}
                            >
                                <span>{link.label}</span>

                                {/* Refined underline indicator for the active route */}
                                {isActive ? (
                                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold rounded-full" />
                                ) : (
                                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent hover:bg-white/20 rounded-full transition-colors duration-200" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Action Button */}
                <Link
                    href="/join"
                    className="bg-brand-gold text-brand-navy font-bold px-5 py-2.5 rounded-full text-xs hover:brightness-110 active:scale-95 transition shadow-md shadow-brand-gold/10"
                >
                    Join Community
                </Link>
            </div>
        </header>
    );
}