import Components from '@uni-helper/vite-plugin-uni-components'

import { WotResolver } from '../../resolver'

export const UniHelperVitePluginUniComponents = Components({
  resolvers: [WotResolver()],
  dts: 'dts/components.d.ts',
})
