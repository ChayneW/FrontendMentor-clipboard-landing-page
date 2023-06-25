/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baijam: ['Bai Jamjuree', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'strong-cyan': 'hsl(171, 66%, 44%)',
        'light-blue': 'hsl(233, 100%, 69%)',
        'grayish-blue': 'hsl(201, 11%, 66%)',
        'dark-gray-blue': 'hsl(210, 10%, 33%)',
      }
    },
  },
  plugins: [],
}

