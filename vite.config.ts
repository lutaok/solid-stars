import { defineConfig } from 'vite';
import path from 'path';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'solid-stars',
      fileName: (format) => `solid-stars.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['solid-js'],
      output: {
        globals: {
          'solid-js': 'SolidJS',
        },
      },
    },
  },
});
