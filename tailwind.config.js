/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      container: {
        center: true,
        padding: '1rem', // Optional, adjust padding for the container
        screens: {
          '2xl': '1440px', // Custom container width at 2XL screens and above
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
