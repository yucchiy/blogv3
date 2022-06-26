/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: '1.5rem',
              lineHeight: '2rem',
            },
            h2: {
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
            },
            h3: {
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
