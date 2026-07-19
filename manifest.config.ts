import { URL, fileURLToPath } from 'node:url'

import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'
import { loadEnv } from 'vite'

import { getMode } from './builder/util'

const envDir = fileURLToPath(new URL('./env/', import.meta.url))
const env = loadEnv(getMode(), envDir) as unknown as ImportMetaEnv
const { VITE_APP_TITLE, VITE_UNI_APPID, VITE_VERSION_NAME, VITE_VERSION_CODE, VITE_BASE_PATH } = env

export default defineManifestConfig({
  name: VITE_APP_TITLE,
  appid: VITE_UNI_APPID,
  description:
    '量点聚合国内主流广告联盟，提供一站式流量变现方案。无需复杂对接，一次接入即可获取多家联盟优质广告资源，智能优化填充率与eCPM，助您轻松将用户访问转化为稳定收入，释放隐藏价值。从今天起，让流量真正点亮收益。',
  versionName: VITE_VERSION_NAME,
  versionCode: VITE_VERSION_CODE,
  transformPx: false,
  'app-plus': {
    usingComponents: true,
    nvueCompiler: 'uni-app',
    nvueStyleCompiler: 'uni-app',
    compilerVersion: 3,
    darkmode: true,
    themeLocation: 'theme.json',
    splashscreen: {
      alwaysShowBeforeRender: true,
      waiting: true,
      autoclose: true,
      delay: 0,
    },
    modules: {
      Canvas: 'nvue canvas', // 添加此项
      Camera: {},
      Geolocation: {},
      OAuth: {},
      Payment: {},
      Share: {},
      LivePusher: {},
    },
    distribute: {
      android: {
        permissions: [],
        schemes: 'zhiweige-adunion,zhiweige.adunion,liangdian.adunion',
        abiFilters: ['arm64-v8a'],
        minSdkVersion: 21,
        targetSdkVersion: 36,
      },
      ios: {
        dSYMs: false,
        privacyDescription: {
          NSMicrophoneUsageDescription: '请允许使用麦克风，以便于您进行录音、语音通话、视频通话',
          NSCameraUsageDescription: '请允许使用摄像头，以便于您进行拍照、语音通话、视频通话',
          NSPhotoLibraryUsageDescription: '请允许访问所有照片，以便更自由地上传、下载、分享',
          NSPhotoLibraryAddUsageDescription: '请允许保存图片到相册，以便更自由地上传、下载、分享',
          NSUserTrackingUsageDescription:
            '请放心，开启权限不会获取您在其他站点的隐私信息，该权限仅用于标识设备并保障服务安全与提示浏览体验',
          NSLocalNetworkUsageDescription: '请允许访问本地网络，以便为您提供更好的服务体验',
          NSLocationWhenInUseUsageDescription: '请允许使用定位，以便于您进行地理位置相关活动',
          NSLocationAlwaysUsageDescription: '请允许使用定位，以便于您进行地理位置相关活动',
        },
        idfa: true,
        urlschemewhitelist: 'iosamap,baidumap,qqmap',
      },
      sdkConfigs: {
        geolocation: {
          system: {
            __platform__: ['android'],
          },
        },
        ad: {
          gm: {},
          gdt: {},
          ks: {},
          sigmob: {},
          hw: {},
          bd: {},
          zy: {},
          bz: {},
          fl: {},
          jl: {},
          yt: {},
          jt: {},
          wa: {},
          'ks-content': {},
          'gm-content': {},
        },
        oauth: {
          weixin: {
            appid: 'wx7d5adabd3911a519',
            appsecret: '0c691d53aca3e286a32a0ec2c60e19aa',
            UniversalLinks: '',
          },
        },
        payment: {
          weixin: {
            __platform__: ['android'],
            appid: 'wx7d5adabd3911a519',
            UniversalLinks: '',
          },
        },
        share: {
          weixin: {
            appid: 'wx7d5adabd3911a519',
            UniversalLinks: '',
          },
        },
      },
      icons: {
        android: {
          hdpi: 'static/icons/72x72.png',
          xhdpi: 'static/icons/96x96.png',
          xxhdpi: 'static/icons/144x144.png',
          xxxhdpi: 'static/icons/192x192.png',
        },
        ios: {
          appstore: 'static/icons/1024x1024.png',
          ipad: {
            app: 'static/icons/76x76.png',
            'app@2x': 'static/icons/152x152.png',
            notification: 'static/icons/20x20.png',
            'notification@2x': 'static/icons/40x40.png',
            'proapp@2x': 'static/icons/167x167.png',
            settings: 'static/icons/29x29.png',
            'settings@2x': 'static/icons/58x58.png',
            spotlight: 'static/icons/40x40.png',
            'spotlight@2x': 'static/icons/80x80.png',
          },
          iphone: {
            'app@2x': 'static/icons/120x120.png',
            'app@3x': 'static/icons/180x180.png',
            'notification@2x': 'static/icons/40x40.png',
            'notification@3x': 'static/icons/60x60.png',
            'settings@2x': 'static/icons/58x58.png',
            'settings@3x': 'static/icons/87x87.png',
            'spotlight@2x': 'static/icons/80x80.png',
            'spotlight@3x': 'static/icons/120x120.png',
          },
        },
      },
      splashscreen: {
        androidStyle: 'default',
        useOriginalMsgbox: true,
        iosStyle: 'common',
      },
      plugins: {
        audio: {
          mp3: {
            description: 'Android平台录音支持MP3格式文件',
          },
        },
      },
    },
    compatible: {
      ignoreVersion: true,
    },
    runmode: 'liberate',
    nativePlugins: {},
  },
  h5: {
    sdkConfigs: {
      maps: {},
    },
    title: VITE_APP_TITLE,
    router: {
      mode: 'hash',
      base: VITE_BASE_PATH,
    },
    unipush: {
      enable: false,
    },
    optimization: {
      treeShaking: {
        enable: true,
      },
    },
  },
  uniStatistics: {
    enable: false,
  },
  vueVersion: '3',
  locale: 'zh-Hans',
  fallbackLocale: 'zh-Hans',
})
