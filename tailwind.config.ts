import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f8f5ef',
        forest: '#103b2a',
        charcoal: '#111111',
        accent: '#f97316',
      },
    },
  },
  plugins: [],
};

export default config;
