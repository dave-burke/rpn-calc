/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA()],
  test: {
    // VSCode doesn't see this and still complains :-/
    // globals: true,
    environment: 'happy-dom',
    include: ['test/**/*.test.ts'],
  }
})
