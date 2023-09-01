import { join } from 'path';
import type { ConfigType } from '@moneko/core';

const conf: Partial<ConfigType> = {
  output: {
    path: join(process.cwd(), 'docs'),
  },
  routerMode: 'hash',
  basename: '/demo-micro-app-react',
  publicPath: '/demo-micro-app-react/',
  importOnDemand: {
    lodash: {
      transform: '${member}',
    },
  },
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
