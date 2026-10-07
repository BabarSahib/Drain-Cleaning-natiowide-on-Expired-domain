// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://maxsonplumbing.com',

  markdown: {
    processor: unified(),
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: false,
    },
    imageService: 'passthrough',
  }),
});