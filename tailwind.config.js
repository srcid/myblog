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
    theme: {
      extend: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
  daisyui: {
    logs: false,
  },
}
