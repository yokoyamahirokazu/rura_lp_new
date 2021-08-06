require("dotenv").config();
const { API_KEY, SERVICE_DOMAIN, GOOGLE_ANALYTICS_ID } = process.env;
const nodeExternals = require("webpack-node-externals")

import axios from "axios";


export default {


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
        src: "https://unpkg.com/microcms-js-sdk@latest/dist/umd/microcms-js-sdk.js",

      },
      { src: 'https://sdk.form.run/js/v2/embed.js' }
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/slick.js', mode: 'client' },
    { src: '~/plugins/scrollInview' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios',
    ['@nuxtjs/google-gtag', {
      id: 'UA-168809361-1',
      debug: true
    }],],
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
    },
    transpile: ['gsap'],
    babel: {
      plugins: [
        [
          "@babel/plugin-proposal-private-property-in-object",
          {
            "loose": true
          }
        ]
      ]
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
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css',
    '~/assets/css/style',
  ],

  buildModules: ["nuxt-microcms-module"],
  microcms: {
    options: {
      serviceDomain: SERVICE_DOMAIN,
      apiKey: API_KEY,
    },
    // mode: process.env.NODE_ENV === "production" ? "server" : "all",
  },

  generate: {
    async routes() {
      const pages = await axios
        .get('https://rura.microcms.io/api/v1/news/', {
          headers: { 'X-API-KEY': API_KEY }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/news/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  },

}
