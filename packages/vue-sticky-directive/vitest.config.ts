import path from 'node:path'
import Vue from '@vitejs/plugin-vue2'
import { defineProject } from 'vitest/config'

export default defineProject({
  plugins: [Vue()],
  test: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
    globals: true,
    testTimeout: 60_000,
  },
})
