import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        app: 'rgba(0, 0, 0, 0.25) 0px 2px 11px 0px',
      },
      fontSize: {
        large: ['32px', '46px'],
        titleOne: ['28px', '34px'],
        titleTwo: ['24px', '32px'],
        subtitle: ['16px', '24px'],
        body: ['16px', '24px'],
        text: ['14px', '18px'],
        capture: ['14px', '18px'],
        footnote: ['13px', '18px'],
      },
      colors: {
        app: {
          blue: '#3177F2',
          orange: '#FF5D17',
          black: '#2B2B2B',
          grey: '#646464',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
