import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-white-before': 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
        'gradient-white-after': 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)',
        'iphone1-pattern': "url(/assets/images/iPhone-card-1.png)"
      },
      colors: {
        "card-1": "rgb(234, 231, 255)",
        "card-2": "rgb(241, 221, 255)"
      },
      fontFamily: {
        'satoshi' : ['Satoshi'],
        'grifter' : ['Grifter']
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    },
  },
  plugins: [],
}
export default config
