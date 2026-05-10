import type { MetadataRoute } from 'next';

import { site } from '@/data/site';

const paths = [
  '',
  '/about',
  '/services',
  '/projects',
  '/contact',

  '/services/website-development-shillong',
  '/services/mobile-app-development-shillong',
  '/services/software-development-shillong',
  '/services/digital-marketing-shillong',
  '/services/google-business-profile-setup',
  '/services/booking-system-development',
  '/services/admin-dashboard-development',
  '/services/business-automation',

  '/projects/la-ki-trep-resort',
  '/projects/shine-survey-app',
  '/projects/lsc-management-system',
  '/projects/myshillong-platform',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}