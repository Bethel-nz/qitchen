import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        texture: `url('/texture.png')`,
        'menu-bg': `url('/qitchen-menu-bg-image.png')`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        muted: '#181818',
      },
      borderColor: {
        default: '#EFE7D2',
        muted: '#181818',
      },
      colors: {
        default: '#EFE7D2',
        muted: '#F5F2EA',
        inverse: '#0A0B0A',
      },
    },
  },
  plugins: [],
};
export default config;
