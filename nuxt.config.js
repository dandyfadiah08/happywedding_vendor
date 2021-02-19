export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'happy_wedding',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Calistoga&family=Cormorant+Garamond:wght@400;700&family=Cormorant+Upright:wght@700&family=Crete+Round&family=Montserrat:wght@400;700&family=Poppins:wght@400;600;700&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', mode: 'client' },
    { src: '~/plugins/lightbox.js', mode: 'client' },
    { src: '~/plugins/capitalization.js' },
    { src: '~/plugins/price.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/device',
    'nuxt-vue-select',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
  },

  proxy: {
    '/api': {
      target: 'http://dev.happywedding.id',
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
