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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
