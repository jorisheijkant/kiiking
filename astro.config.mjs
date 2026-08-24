// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://kiiking.com',
	integrations: [mdx(), sitemap()],
	i18n: {
		defaultLocale: 'et',
		locales: ['en', 'et'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
