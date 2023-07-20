/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        weart: {
          50: '#f3f9fc',
          100: '#dee2e6',
          500: '#4668c6',
          600: '#273e7f',
          800: '#1e2d47',
          900: '#0a0f18',
        },
      }
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1280px',
        '2xl': '1500px',
      },
    },
    fontFamily: {
      "display": "var(--display-font)",
      "body": "var(--body-font)",
    },
  },
  plugins: [],
}
