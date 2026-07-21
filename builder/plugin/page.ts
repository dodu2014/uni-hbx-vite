import UniPages from '@uni-helper/vite-plugin-uni-pages'

import { handlePageName, scanPageFilter, writePageConst } from '../util'

export const UniHelperVitePluginUniPages = UniPages({
  dir: 'pages',
  subPackages: ['subPages'],
  exclude: ['**/component/**/**.*'],
  dts: 'dts/uni-pages.d.ts',
  outDir: '',
  onAfterScanPages: (ctx) => {
    scanPageFilter(ctx, 'pages')
    scanPageFilter(ctx, 'subPages')
  },
  onAfterMergePageMetaData: (ctx) => {
    handlePageName(ctx, 'pageMetaData')
    handlePageName(ctx, 'subPageMetaData')
  },
  onAfterWriteFile(ctx) {
    writePageConst(ctx)
  },
})
