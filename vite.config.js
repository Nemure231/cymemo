import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: true,
  //   https: true
  // },
  plugins: [
    vue(),
    VitePWA({
      mode: "development",
      base: "/",
      srcDir: "src",
      filename: "sw.ts",
      sourcemap: true,
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],  
      manifest: {
        name: 'Cymemo',
        short_name: 'Cymemo',
        description: 'A simple memo app',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-256x256.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-256x256.png',
            sizes: '256x256',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      },
      workbox: {
        cleanupOutdatedCaches: false  
      },
    })
  ]
})
