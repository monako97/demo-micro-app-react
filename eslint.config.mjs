import neko from '@moneko/core/eslint/react';

export default [
  ...neko,
  { ignores: ['**/**/*.mdx?', 'lib', 'docs', 'coverage', 'prism.js'] },
];
