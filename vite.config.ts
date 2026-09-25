/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import vitePluginSvgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSvgr()],
  resolve: {
    alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment:'jsdom',
    setupFiles: "./src/shared/config/test/setupTest.ts"
  }
})
