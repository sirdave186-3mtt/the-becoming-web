import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import VolunteerModal from '@/components/VolunteerModal';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.becomerscommunity.com'),
  title: {
    default: 'The Becoming | With Dr. Immanuelson Sam',
    template: '%s | The Becoming Community',
  },
  description:
    'A borderless growth circle, courageous leadership network, and habit incubator founded by Dr. Immanuelson Sam.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Becoming | With Dr. Immanuelson Sam',
    description:
      'Don’t just exist. Become. A borderless Pan-African community for intentional growth, courageous leadership, and structured daily habits.',
    url: 'https://www.becomerscommunity.com',
    siteName: 'The Becoming Community',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/favicon.png',
        width: 512,
        height: 512,
        alt: 'The Becoming Community Logo',
      },
    ],
  },
  icons: {
    icon: [{ url: '/images/favicon.png', type: 'image/png' }],
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
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