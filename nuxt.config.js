module.exports = {
  mode: 'spa',
  srcDir: 'client',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: '~assets/css/tailwind.css', lang: 'css' },
    { src: '~assets/css/ag-grid.css', lang: 'css' },
    { src: '~assets/css/ag-theme-material.css', lang: 'css' },
    // {
    //   src: 'ag-grid-community/dist/styles/ag-theme-material.css',
    //   lang: 'scss'
    // },
    { src: '~assets/scss/index.scss', lang: 'scss' }
  ],
  // server: {
  //   host: '0.0.0.0',
  //   port: '8030'
  // },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: true
  },
  // purgeCSS: {
  //   whitelist: () => ['ag']
  // },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/ag-grid', ssr: false },
    { src: '~/plugins/tui-grid', ssr: false },
    { src: '~/plugins/tui-editor', ssr: false },
    { src: '~/plugins/vue-js-modal', ssr: false },
    { src: '~/plugins/vue-plyr', ssr: false },
    { src: '~/plugins/vue-chartjs', ssr: false },
    { src: '~/plugins/vuejs-datepicker', ssr: false },
    { src: '~/plugins/vue-daum-postcode', ssr: false },
    { src: '~/plugins/vee-validate', ssr: false },
    { src: '~/plugins/apexcharts', ssr: false },
    { src: '~/plugins/fontawesome', ssr: false },
    { src: '~/plugins/GlobalComponents', ssr: false }
    // { src: '~/plugins/directives', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment'
  ],
  moment: {
    locales: ['ko']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL || 'http://192.168.5.11:8040'
    // baseURL: process.env.API_URL || 'http://sample.bmaster.kro.kr/'
  },
  router: {
    middleware: ['auth', 'router-info']
  },
  auth: {
    // See https://auth.nuxtjs.org/reference/schemes
    // scopeKey: "roles",
    redirect: {
      login: false,
      logout: false,
      home: false
    },
    strategies: {
      local: {
        tokenType: 'Bearer',
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'result'
          },
          logout: false,
          user: false
          // user: {
          //   url: '/mypage1/profile1',
          //   method: 'get',
          //   propertyName: 'result',
          // },
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    // extractCSS: true,
    // transpile: ['/plugins'],
    // vendor: ['vue-i18n'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // if (!ctx.isDev) {
      //   // Remove unused CSS using PurgeCSS. See https://github.com/FullHuman/purgecss
      //   // for more information about PurgeCSS.
      //   config.plugins.push(
      //     new PurgecssPlugin({
      //       // paths: glob.sync([
      //       //   path.join(__dirname, './pages/**/*.vue'),
      //       //   path.join(__dirname, './layouts/**/*.vue'),
      //       //   path.join(__dirname, './components/**/*.vue')
      //       // ]),
      //       whitelist: ['html', 'body', 'ag']
      //     })
      //   )
      // }
    }
    // postcss: {
    //   plugins: {
    //     tailwindcss: [require('tailwindcss')]
    //   }
    // }
  }
  // 페이지 트랜지션 설정
  // transition: {
  //   name: 'fade',
  //   mode: 'out-in'
  // }
}
