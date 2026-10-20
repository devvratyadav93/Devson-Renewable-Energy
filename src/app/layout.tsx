import type { Metadata, Viewport } from 'next';
import '../styles/tokens.css';
import '../styles/globals.css';
import '../styles/print.css';

export const metadata: Metadata = {
  title: '12,500 KWp DC Grid-Connected Ground Mount Turnkey Solar Project — ASA EPC',
  description:
    'A techno-commercial offer prepared for D K Builders — Bawadiya Kala, Bhopal, MP, built on nine years of solar EPC delivery and a Waaree Energy partnership.',
  icons: {
    icon: '/assets/logos/asa-epc-logo.png',
  },
  openGraph: {
    title: '12,500 KWp DC Grid-Connected Ground Mount Turnkey Solar Project — ASA EPC',
    description:
      'A techno-commercial offer prepared for D K Builders — Bawadiya Kala, Bhopal, MP, built on nine years of solar EPC delivery and a Waaree Energy partnership.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
