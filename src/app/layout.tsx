import type { Metadata, Viewport } from 'next';
import '../styles/tokens.css';
import '../styles/globals.css';
import '../styles/print.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FloatingDock } from '@/components/FloatingDock';

export const metadata: Metadata = {
  title: 'DEVSON Renewable Energy — PM Surya Ghar Rooftop Solar & Bihar Subsidy Platform',
  description:
    'DEVSON Renewable Energy Private Limited — Powering Bihar with Green Energy. Official 1–10 kW rooftop solar installations under PM Surya Ghar Muft Bijli Yojana & Bihar state subsidies.',
  icons: {
    icon: '/assets/logos/devson-logo.png',
  },
  openGraph: {
    title: 'DEVSON Renewable Energy — PM Surya Ghar Rooftop Solar & Bihar Subsidy Platform',
    description:
      'DEVSON Renewable Energy Private Limited — Powering Bihar with Green Energy. Official 1–10 kW rooftop solar installations under PM Surya Ghar Muft Bijli Yojana & Bihar state subsidies.',
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
      <body>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <FloatingDock />
        </LanguageProvider>
      </body>
    </html>
  );
}
