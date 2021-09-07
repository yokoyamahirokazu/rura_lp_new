
import axios from "axios";
require('dotenv').config();
const { API_KEY, SERVICE_ID, GOOGLE_ANALYTICS_ID_G, GOOGLE_ANALYTICS_ID } = process.env;



export default {

  vue: {
    devtools: true
  },

  publicRuntimeConfig: {
    apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
    serviceId: process.env.NODE_ENV !== 'production' ? SERVICE_ID : undefined,
    serviceId: process.env.NODE_ENV !== 'production' ? GOOGLE_ANALYTICS_ID_G : undefined,
    serviceId: process.env.NODE_ENV !== 'production' ? GOOGLE_ANALYTICS_ID : undefined,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '遠隔接客サービス RURA｜まるで瞬間移動。 高スキルのスタッフを全国に０秒派遣。 お店の無人化や人材不足に効果を発揮。',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '時給450円から店舗スタッフを採用可能遠隔接客サービス RURA※特許出願中。RURAはロボットやバーチャルキャラクター越しに接客を行なうシステムで、全国各地にいるRURAワーカーが、WEB経由で店舗の接客。一人のスタッフが複数店舗をまたいで接客が可能' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { hid: "favicon", rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { hid: "favicon", rel: 'icon alternate', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
      { name: 'msapplication-square70x70logo', content: '/site-tile-70x70.png' },
      { name: 'msapplication-square150x150logo', content: '/site-tile-150x150.png' },
      { name: 'msapplication-wide310x150logo', content: '/site-tile-310x150.png' },
      { name: 'msapplication-square310x310logo', content: '/site-tile-310x310.png' },
      { name: 'msapplication-TileColor', content: '#00A0E9' },
      { property: 'og:title', content: 'RURA｜遠隔接客サービス' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'http://timeleap-rura.com' },
      { property: 'og:image', content: '/og_image.jpg' },
      { property: 'og:site_name', content: 'RURA｜遠隔接客サービス' },
      {
        property: 'og:description'
        , content: '時給450円から店舗スタッフを採用可能遠隔接客サービス RURA※特許出願中。RURAはロボットやバーチャルキャラクター越しに接客を行なうシステムで、全国各地にいるRURAワーカーが、WEB経由で店舗の接客。一人のスタッフが複数店舗をまたいで接客が可能'
      },
      { property: 'og:locale', content: 'ja_JP' },
      {
        name: 'twitter:card', content: 'summary_large_image'
      },

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


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/normalize',
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css',
    '~/assets/css/style',
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/slick.js', mode: 'client' },
    { src: '~/plugins/scrollInview' },
    { src: '~/plugins/adobeFont' },
    { src: '~/plugins/vuelidate'  },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-microcms-module',
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag',
    '@nuxtjs/vuetify',
  ],
  modules: [
  ],



  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID, //あなたのGoogleアナリティクスのプロパティID
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload

    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },



  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },


  build: {
    transpile: ["vee-validate/dist/rules"]
  },


  generate: {
    async routes() {
      const pages = await axios
        .get('https://rura.microcms.io/api/v1/news/', {
          headers: { 'X-API-KEY': process.env.API_KEY }
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
