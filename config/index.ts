import { type ConfigType, PACKAGENAME, resolveProgram } from '@moneko/core';

const conf: Partial<ConfigType> = {
  output: resolveProgram('docs'),
  routerMode: 'hash',
  basename: `/${PACKAGENAME}/`,
  publicPath: `/${PACKAGENAME}/`,
  // 按需引入
  importOnDemand: {
    'neko-ui': {
      transform: 'es/${member}',
      memberTransformers: ['dashed_case'],
    },
    '@moneko/common': {
      transform: 'lib/${member}',
    },
    lodash: {
      transform: '${member}',
    },
  },
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
  proxy: [
    {
      context: ['/api/'],
      target: 'http://127.0.0.1:8001/',
      changeOrigin: true,
      pathRewrite: { '^/api/': '/' },
      secure: false,
    },
  ],
};

export default conf;
