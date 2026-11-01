/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#174F60',
          50: '#F0F6F7',
          100: '#DCE8EB',
          200: '#B8D1D7',
          300: '#8FB5C0',
          400: '#5C93A3',
          500: '#2A7288',
          600: '#1D5A6E',
          700: '#174F60', // Primary deep teal
          800: '#123D4B',
          900: '#0C2B35',
          950: '#071A21',
        },
        accent: {
          DEFAULT: '#2CB6B4',
          50: '#F0FAFA',
          100: '#D5F4F3',
          200: '#AFEBEA',
          300: '#7CDEDE',
          400: '#47CBCA',
          500: '#2CB6B4', // Turquoise accent
          600: '#219695',
          700: '#1B7676',
          800: '#185F5F',
          900: '#184F50',
          950: '#092C2D',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F4F8F7',
          border: '#DCE8E6',
        },
        ink: {
          primary: '#23383F',
          secondary: '#60757A',
          muted: '#8B9EA2',
          light: '#F4F8F7',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(23, 79, 96, 0.05), 0 1px 2px -1px rgba(23, 79, 96, 0.05)',
        'card': '0 4px 12px -2px rgba(23, 79, 96, 0.06), 0 2px 6px -2px rgba(23, 79, 96, 0.04)',
        'card-hover': '0 10px 25px -3px rgba(23, 79, 96, 0.1), 0 4px 10px -2px rgba(23, 79, 96, 0.05)',
        'floating': '0 20px 35px -5px rgba(23, 79, 96, 0.15), 0 8px 16px -6px rgba(23, 79, 96, 0.08)',
      },
      maxWidth: {
        'prose-ar': '72ch',
      },
    },
  },
  plugins: [],
}
