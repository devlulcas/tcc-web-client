import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$lib: './src/lib',
			$stores: './src/stores',
			$utils: './src/utils',
			$routes: './src/routes',
			$pages: './src/routes',
			$layouts: './src/layouts',
			$assets: './src/assets',
			$styles: './src/styles',
			$config: './src/config',
			$services: './src/services'
		}
	}
};

export default config;
