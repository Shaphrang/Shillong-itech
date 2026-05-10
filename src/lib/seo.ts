import type { Metadata } from 'next';
import { site } from '@/data/site';

export const makeMetadata = (title: string, description: string, path = ''): Metadata => ({
  title: `${title} | ${site.name}`,
  description,
  alternates: { canonical: `${site.url}${path}` },
  openGraph: {
    title: `${title} | ${site.name}`,
    description,
    url: `${site.url}${path}`,
    siteName: site.name,
    locale: 'en_IN',
    type: 'website',
  },
});
