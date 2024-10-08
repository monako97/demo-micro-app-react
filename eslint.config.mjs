import neko from 'eslint-config-neko';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react/configs/recommended.js';

const conf = [
  ...neko.configs.recommended,
  { ignores: ['**/**/*.mdx?', 'lib', 'docs', 'coverage', 'prism.js'] },
];

export default conf.concat({ settings: { react: { version: 'detect' } }, plugins: { 'react-hooks': reactHooks } },).concat(react);
