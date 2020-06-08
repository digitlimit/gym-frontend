import crypto from 'crypto';
const BUILDID = crypto.randomBytes(10).toString('hex');

export default {

  server: {
    host: "frontend.gym.test",
    port: 8000,
  },

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      //
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios'
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
 ** Nuxt.js modules
 */
  modules: [
    '@nuxtjs/axios',
  ],

  /*
  ** Build configuration
  */
  build: {
    splitChunks: {
      layouts: true
    },

    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },

    //extract css into files
    extractCSS: true,

    //generic unique css file
    filenames: {
      css: `${BUILDID}.[name].css`,
    },

    entry: ['webpack-hot-middleware/client.js?quiet=true'],
  },
  env: {
    apiBaseUrl: 'http://backend.gym.test'
  },

}
