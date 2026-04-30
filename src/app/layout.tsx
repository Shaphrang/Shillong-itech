import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';

export const metadata: Metadata = { title: site.name, description: site.description };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /><StickyCTA /></body></html>;
}
