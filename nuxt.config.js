//开发环境
const NODE_ENV = process.env.NODE_ENV !== 'production';

module.exports =
  {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{ description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {

    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      //console.log(ctx.dev);
      if (ctx.dev && ctx.isClient) {
        //console.log(config.module);
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          //loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
   },
    /**
     *以下为根据文档学习添加的内容
     */
    // analyze:true,
    // analyze: {
    //   analyzerMode: 'static'
    // },
    // cache:true,
    /**
     * 设置cache为true,相当于设置默认缓存组件为1000个，若超过则最先缓存的会从缓存中清除掉，
     * 默认缓存时间为15分钟
     */
    //or
    // cache:{
    //   max:1000,
    //   maxAge:900000
    // }
    // loaders:[
    //   {
    //     test: /\.s[a|c]ss$/,
    //     loader: ["vue-style-loader", "css-loader", "sass-loader"]
    //   }
    // ]
    /**
     * 配置 Nuxt.js 应用是开发模式还是生产模式。
     */
    dev:(NODE_ENV),
    /**
     * 配置在客户端和服务端共享的环境变量。
     */
    env:{
      communityAPI: NODE_ENV ? 'http://cmadmin.api.v.vidahouse.com/v1' : 'http://api.cmadmin.vidahouse.com/v1',
    },


    /**
     * 第三方插件打包
     */
    vendor:['element-ui','axios'],

    css: [
          '~/assets/css/main.css',
          'element-ui/lib/theme-chalk/index.css',
          'quill/dist/quill.snow.css',
          'quill/dist/quill.bubble.css',
          'quill/dist/quill.core.css'
        ],
    plugins:[
      {src: '~/plugins/element-ui', ssr: false},
      {src: '~plugins/vue-quill-editor.js', ssr: false }
    ]
}
