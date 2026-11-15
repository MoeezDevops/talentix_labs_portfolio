import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2020',
    // Chunk the client bundle; SSR builds externalize react and must not
    // try to manualChunk it.
    ...(isSsrBuild
      ? {}
      : {
          rollupOptions: {
            output: {
              manualChunks: {
                vendor: ['react', 'react-dom', 'react-router-dom'],
                motion: ['framer-motion'],
              },
            },
          },
        }),
  },
}))
