import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import VolunteerModal from '@/components/VolunteerModal';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'The Becoming | With Dr. Immanuelson Sam',
  description:
    'A borderless growth circle, courageous leadership network, and habit incubator founded by Dr. Immanuelson Sam.',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/images/logo.png', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-brand-navy text-brand-white flex flex-col antialiased selection:bg-brand-gold selection:text-brand-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <VolunteerModal />
        <Footer />
      </body>
    </html>
  );
}