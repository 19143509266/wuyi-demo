import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';

export default defineConfig({
  plugins: [pluginReact(), pluginLess(), pluginNodePolyfill()],
  source: {
    preEntry: './src/global.less',
  },
  output: {
    cssModules: {
      auto: (resource) => {
        return resource.includes('.less');
      },
    },
    assetPrefix: '/wuyi-demo/',
  },
});
