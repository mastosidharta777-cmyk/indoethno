import type { Metadata } from 'next';
import './globals.css';
import { isPilot } from '@/lib/site';

export const metadata: Metadata = {
  title: isPilot ? 'IndoEthno Pilot — Discover Indonesia Through Its Sound' : 'IndoEthno — Coming Soon',
  description: 'Music-led cultural travel discovery across Indonesia.',
  robots: isPilot ? { index: false, follow: false } : { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
