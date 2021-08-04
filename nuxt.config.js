require("dotenv").config();
const { API_KEY } = process.env;
const nodeExternals = require("webpack-node-externals")



export default {

  privateRuntimeConfig: {
    MicroCmsApiKey: API_KEY,
  },


  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,


  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rura_lp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap',
        rel: 'stylesheet'
      }
    ],
    script: [
      {
        src: "https://unpkg.com/microcms-js-sdk@latest/dist/umd/microcms-js-sdk.js"
      }
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/slick.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios',],
  axios: {
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  },
  env: {
    API_KEY
  },
  markdownit: {
    html: true,
    injected: true,
    preset: 'default',
  },

  css: [
    '~/assets/css/normalize',
    '~/assets/css/style',
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css'
  ],

  buildModules: ["nuxt-microcms-module"],
  microcms: {
    options: {
      serviceDomain: "rura",
      apiKey: "905f8b65-262a-41b6-8a39-dd16be30f5c2",
    },
    mode: process.env.NODE_ENV === "production" ? "server" : "all",
  },

}
