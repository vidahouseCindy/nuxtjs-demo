# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

***cindy.Cheng***
***2017.11.16***

一、问题记录
1.准备在.vue文件中,写scss样式表，本来以为要在nuxt.config.js配置webpack扩展，结果发现不用，
只要安装vue-style-loader,css-loader,node-sass,saaa-loader,
-- npm install vue-style-loader/ css-loader/node-sass/sass-loader


***cindy.Cheng***
***2017.11.17***

######一、关于路由

nuxt.js会自动为pages文件夹中的.vue文件配置路由，

1.基础路由
如pages/new.vue,就可以通过/new访问；

2.动态路由
如要通过 "/:id"类似的参数访问，要建立下划线前缀的.vue文件，
如pages/users/_id.vue,可以通过users/:id访问

3.嵌套路由
在同一级目录下建立同名的.vue文件和文件夹（存放子组件），而且在父组件（即.vue文件中加上<nuxt-child></nuxt-child>）


***cindy.Cheng***
***2017.12.20***

###### 一、Vuex














