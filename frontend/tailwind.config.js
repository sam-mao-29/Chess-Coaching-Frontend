/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#4B5563',
            DEFAULT: '#1F2937',
            dark: '#111827',
          },
          accent: {
            light: '#60A5FA',
            DEFAULT: '#3B82F6',
            dark: '#2563EB',
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          chess: ['Noto Chess', 'sans-serif']
        }
      },
    },
    plugins: [],
  }
  