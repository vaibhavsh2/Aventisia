/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#1E1B4B',
        canvas: '#F6F7FB',
        border: '#E6E9F2',
        muted: '#697286',
        soft: '#98A0B3',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 50px rgba(29, 36, 68, 0.08)',
        button: '0 12px 20px rgba(79, 70, 229, 0.22)',
      },
    },
  },
  plugins: [],
};
