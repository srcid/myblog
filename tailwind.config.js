/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './_pages/*.md',
    './_routes/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem"
    }, 
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
  daisyui: {
    logs: false,
  },
  darkMode: ['selector', '[data-theme="dark"]']
}