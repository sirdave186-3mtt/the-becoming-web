import type { Metadata, Viewport } from 'next';
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Becoming | With Dr. Immanuelson Sam",
  description: "A community for people committed to personal growth, courageous leadership, and meaningful action.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-brand-navy text-brand-white selection:bg-brand-gold selection:text-brand-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 py-10 text-center text-brand-muted text-xs">
          <p>© 2026 The Becoming with Dr. Immanuelson Sam. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}