//src/data/services.ts

export type Service = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: 'business-websites',
    title: 'Business Websites',
    summary:
      'Modern websites for local businesses.',
    bullets: [
      'Resorts & homestays',
      'Restaurants & cafes',
    ],
  },

  {
    slug: 'booking-systems',
    title: 'Booking Systems',
    summary:
      'Online booking and customer management.',
    bullets: [
      'Room bookings',
      'Appointments & services',
    ],
  },

  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    summary:
      'Apps for customers and business operations.',
    bullets: [
      'Android & iPhone apps',
      'Booking & management apps',
    ],
  },

  {
    slug: 'admin-dashboards',
    title: 'Admin Dashboards',
    summary:
      'Manage bookings, customers, and reports.',
    bullets: [
      'Business management',
      'Reports & analytics',
    ],
  },

  {
    slug: 'crm-software',
    title: 'CRM Software',
    summary:
      'Custom systems for managing your business.',
    bullets: [
      'Customer management',
      'Staff & workflow management',
    ],
  },

  {
    slug: 'google-business',
    title: 'Google Business Setup',
    summary:
      'Get your business visible on Google.',
    bullets: [
      'Google Maps setup',
      'Business profile optimization',
    ],
  },

  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    summary:
      'Help customers discover your business online.',
    bullets: [
      'Local SEO',
      'Online visibility',
    ],
  },

  {
    slug: 'small-business-solutions',
    title: 'Small Business Solutions',
    summary:
      'Simple digital solutions for growing businesses.',
    bullets: [
      'Clothing brands',
      'Shops, spas & tourism',
    ],
  },
];