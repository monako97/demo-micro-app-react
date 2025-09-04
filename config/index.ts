import { type ConfigType, isDev, PACKAGENAME, resolveProgram } from '@moneko/core';

const conf: Partial<ConfigType> = {
  output: {
    path: resolveProgram('docs'),
    crossOriginLoading: false,
  },
  routerMode: 'hash',
  basename: `/${PACKAGENAME}/`,
  publicPath: `/${PACKAGENAME}/`,
  virtualModule: {
    a: { a: 1 },
    c: 'export default "cs"',
  },
  reactJsxRuntime: isDev ? 'classic' : 'automatic',
  moduleFederation: [
    {
      name: 'demo_micro_app_react',
      // 接入 moduleFederation
      remotes: [
        {
          // moduleFederation的名称
          name: 'demo_module_federation',
          // moduleFederation 的地址
          host: 'https://monako97.github.io/demo-module-federation',
          // 从 moduleFederation 载入的依赖
          library: [
            'react',
            'react/jsx-runtime',
            'react-dom',
            'react-dom/client',
            'react-router',
            'react-router-dom',
            'dayjs',
          ],
        },
      ],
    },
  ],
};

export default conf;
