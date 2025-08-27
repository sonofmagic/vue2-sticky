import vue from '@vitejs/plugin-vue2'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths(),
    dts(
      {
        rollupTypes: true,
      },
    ),
  ],
  build: {
    lib: {
      entry: [
        'src/directives/index.ts',
        'src/hooks/index.ts',
      ],
      name: 'index',
      cssFileName: 'index',
    },
    rollupOptions: {
      external: ['gemini-scrollbar-next', 'resize-observer-polyfill', 'throttle-debounce'],
    },
  },
})
