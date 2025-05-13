import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer({
      includePublic: true, // También optimiza imágenes en la carpeta public
      logStats: true,      // Muestra estadísticas de optimización en la consola
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { lossless: true },
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
