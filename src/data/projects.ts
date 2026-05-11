//src\data\projects.ts
export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string;
  outcome: string;
  image: string;
};

//src/data/projects.ts
export const projects: Project[] = [
  {
    slug: 'la-ki-trep-resort',
    name: 'La Ki Trep Resort Website & Admin',
    description:
      'Resort website with cottage listing, booking flow, admin dashboard, billing and reports.',
    tech:
      'Next.js, Tailwind CSS, Supabase/PostgreSQL',
    outcome:
      'Improved booking visibility and smoother staff operations.',
    image: '/projects/la-ki-trep.png',
  },

  {
    slug: 'shine-survey-app',
    name: 'SHINE Survey App',
    description:
      'Offline-first Flutter field survey app for data collection, location setup, forms and sync-ready workflow.',
    tech:
      'Flutter, Hive, Supabase',
    outcome:
      'Faster field data collection with reliable sync workflow.',
    image: '/projects/shine-app.png',
  },

  {
    slug: 'lsc-management-system',
    name: 'LSC Management System',
    description:
      'Web dashboard for profiles, services, funds, vendors, approvals and reports.',
    tech:
      'Next.js, PostgreSQL/Supabase, Tailwind CSS',
    outcome:
      'Centralized operations and easier compliance reporting.',
    image: '/projects/lsc-dashboard.jpg',
  },

  {
    slug: 'myshillong-platform',
    name: 'MyShillong Platform',
    description:
      'Local marketplace platform for food businesses, offers, accommodation, real estate, events and local services.',
    tech:
      'Next.js, Flutter, Express.js, PostgreSQL/Supabase',
    outcome:
      'Unified discovery platform for local businesses and users.',
    image: '/projects/myshillong.jpg',
  },
];