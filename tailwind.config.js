/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        light: '#f5f5f5',
        // 'teal-50': '#f0fdfa',
        // 'teal-100': '#ccfbf1',
        // 'teal-200': '#99f6e4',
        // 'teal-300': '#5eead4',
        // 'teal-400': '#2dd4bf',
        // 'teal-500': '#14b8a6',
        // 'teal-600': '#0d9488',
        // 'teal-700': '#0f766e',
        // 'teal-800': '#115e59',
        // 'teal-900': '#134e4a',
        // 'teal-950': '#042f2e',
      },
      fontFamily: {
        body: [
          // 'purna_shrestha',
          // 'Syne',
          'Bricolage Grotesque',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        inherit: 'inherit',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1600px',
        },
      },
    },
  },
  plugins: [],
};
