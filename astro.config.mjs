// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://maxsonplumbing.com',

  markdown: {
    processor: unified(),
  },

  adapter: node({
    mode: 'standalone',
  }),
});