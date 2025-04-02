import UnpluginTypia from '@ryoppippi/unplugin-typia/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		UnpluginTypia({ tsconfig: './tsconfig.json' /* options */ }), // should be placed before other plugins like `react`, `svetle`, etc.
	],
});