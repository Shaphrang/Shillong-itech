//src\data\services.ts
export type Service = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: 'website-development-shillong',
    title: 'Website Development',
    summary:
      'Fast, mobile-first business websites built to convert visitors into leads.',
    bullets: [
      'Responsive pages',
      'Contact and WhatsApp CTAs',
      'SEO-ready structure',
    ],
  },

  {
    slug: 'mobile-app-development-shillong',
    title: 'Mobile App Development',
    summary:
      'Practical Android/iOS apps for operations, customers, and field teams.',
    bullets: [
      'Flutter/React Native',
      'Offline-first flows',
      'API integration',
    ],
  },

  {
    slug: 'software-development-shillong',
    title: 'Custom Software Development',
    summary:
      'Business systems designed around your exact workflows and data.',
    bullets: [
      'Role-based modules',
      'Reports and exports',
      'Clean maintainable code',
    ],
  },

  {
    slug: 'admin-dashboard-development',
    title: 'Admin Dashboards',
    summary:
      'Control panels for teams, approvals, analytics, and day-to-day management.',
    bullets: [
      'Charts and reports',
      'User permissions',
      'Workflow automation',
    ],
  },

  {
    slug: 'booking-system-development',
    title: 'Booking Systems',
    summary:
      'Booking engines for resorts, services, and appointments with real-time status.',
    bullets: [
      'Availability workflows',
      'Payment-ready architecture',
      'Automated confirmations',
    ],
  },

  {
    slug: 'business-automation',
    title: 'Business Automation',
    summary:
      'Remove manual steps with smart forms, triggers, and integrated systems.',
    bullets: [
      'Process mapping',
      'Automation rules',
      'Efficiency improvements',
    ],
  },

  {
    slug: 'digital-marketing-shillong',
    title: 'Digital Marketing & Online Visibility',
    summary:
      'Improve discoverability and local lead generation with practical digital strategy.',
    bullets: [
      'Local SEO basics',
      'Content planning',
      'Campaign support',
    ],
  },

  {
    slug: 'google-business-profile-setup',
    title: 'Google Business Profile Setup',
    summary:
      'Setup and optimize your profile so customers can discover and contact you quickly.',
    bullets: [
      'Profile setup',
      'Category optimization',
      'Photo and post guidance',
    ],
  },
];