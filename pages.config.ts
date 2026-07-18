import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  easycom: {
    autoscan: false,
  },
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: false,
    'app-plus': {
      bounce: 'none',
    },
  },
  tabBar: {
    list: [
      {
        visible: true,
        pagePath: 'page/launch/index-page',
        text: '启动',
      },
      {
        visible: true,
        pagePath: 'page/login/index-page',
        text: '登录',
      },
      {
        visible: true,
        pagePath: 'page/home/index-page',
        text: '首页',
      },
    ],
  },
})
