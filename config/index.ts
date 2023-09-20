import { join } from 'path';
import type { ConfigType } from '@moneko/core';

const conf: Partial<ConfigType> = {
  output: {
    path: join(process.cwd(), 'docs'),
  },
  minifier: {
    css: {
      type: 'cssnano',
    },
  },
  routerMode: 'hash',
  basename: '/demo-micro-app-react',
  publicPath: '/demo-micro-app-react/',
  // 按需引入
  importOnDemand: {
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
          name: 'demo_remote_lib',
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
            'neko-ui',
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
