import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    testTimeout: 30000,
    setupFiles: './vitest.setup.ts',
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ibgram/authentication': path.resolve(__dirname, './authentication/src/index.ts'),
      '@ibgram/shared': path.resolve(__dirname, './shared/src/index.ts')
    }
  }
})
