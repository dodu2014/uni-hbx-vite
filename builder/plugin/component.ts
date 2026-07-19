import Components from '@uni-helper/vite-plugin-uni-components'

import { WotResolver } from '../../resolver'

export const UniHelperVitePluginUniComponents = Components({
  resolvers: [
    WotResolver(),
    {
      type: 'component',
      resolve: (name) => {
        if (name.match(/^.*Layout$/)) {
          return {
            name,
            from: `@/layout/${name}.vue`,
          }
        }
      },
    },
  ],
  dts: 'dts/components.d.ts',
})
