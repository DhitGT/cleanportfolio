module.exports = {
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './pages/*.vue',
      './plugins/**/*.js',
      './nuxt.config.js'
    ],
    options: {
      safelist: ['html', 'body'], // Keep these classes in the build
    },
  },
  theme: {
    extend: {
      fontFamily: {
        'jt-collect': ['JT Collect', 'sans-serif'],
      },
      rotate: {
        '-90': '-90deg',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
