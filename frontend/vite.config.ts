/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    // VSCode doesn't see this and still complains :-/
    // globals: true,
    environment: 'jsdom'
  }
})
