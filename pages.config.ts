import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  easycom: {
    autoscan: false,
  },
  globalStyle: {
    // 导航栏配置
    navigationBarBackgroundColor: '@navBgColor',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: '量点',

    // 页面背景配置
    backgroundColor: '@bgColor',
    backgroundTextStyle: '@bgTxtStyle',
    backgroundColorTop: '@bgColorTop',
    backgroundColorBottom: '@bgColorBottom',

    // 下拉刷新配置
    enablePullDownRefresh: false,
    onReachBottomDistance: 50,

    // 动画配置
    animationType: 'pop-in',
    animationDuration: 300,

    'app-plus': {
      bounce: 'none',
    },
  },
  tabBar: {
    color: '@tabColor',
    selectedColor: '@tabSelectedColor',
    backgroundColor: '@tabBgColor',
    borderStyle: '@tabBorderStyle',

    list: [
      {
        visible: true,
        pagePath: 'page/launch/index-page',
        text: '短剧',
        iconPath: 'static/tabbar/tabbar-icon_home-default.png',
        selectedIconPath: 'static/tabbar/tabbar-icon_home-selected.png',
      },
      {
        visible: true,
        pagePath: 'page/login/index-page',
        text: '短视频',
        iconPath: 'static/tabbar/tabbar-icon_video-default.png',
        selectedIconPath: 'static/tabbar/tabbar-icon_video-selected.png',
      },
      {
        visible: true,
        pagePath: 'page/home/index-page',
        text: '赚钱',
        iconPath: 'static/tabbar/tabbar-icon_script-default.png',
        selectedIconPath: 'static/tabbar/tabbar-icon_script-selected.png',
      },
      {
        visible: true,
        pagePath: 'pages/my/index-page',
        text: '我的',
        iconPath: 'static/tabbar/tabbar-icon_user-default.png',
        selectedIconPath: 'static/tabbar/tabbar-icon_user-selected.png',
      },
    ],
  },
})
