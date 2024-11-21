import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
  ],
  esbuild: {
    jsx: 'automatic',
    jsxDev: false,
    jsxImportSource: '../libs/Meact',
    jsxFactory: 'jsx',
  },
});