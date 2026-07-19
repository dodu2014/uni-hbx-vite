import AutoImport from 'unplugin-auto-import/vite'

export const UnpluginAutoImport = AutoImport({
  imports: [
    'vue',
    'uni-app',
    {
      from: '@wot-ui/router',
      imports: ['createRouter', 'useRouter', 'useRoute'],
    },
    {
      from: '@wot-ui/ui',
      imports: ['useToast', 'useDialog', 'useNotify', 'CommonUtil'],
    },
    {
      from: 'alova/client',
      imports: ['usePagination', 'useRequest'],
    },
    {
      unocss: ['uno'],
    },
    'pinia',
    {
      '@/constant/pageConst.ts': ['PageUrlConst'],
      '@/util/eventUtil.ts': ['uniEvent'],
      '@/util/sharedUtil.ts': ['getCurrentPage', 'sleep'],
      '@/util/storageUtil.ts': ['uniStorage'],
    },
  ],
  dts: 'dts/auto-import.d.ts',
  dirs: ['store/module'],
  ignore: [],
  eslintrc: { enabled: true },
  vueTemplate: true,
})
