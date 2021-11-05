import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import WindiCSS from 'vite-plugin-windicss';
import Icons from 'unplugin-icons/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    global: {},
  },
  plugins: [
    react(),
    VitePWA({
      base: '/',
      registerType: 'prompt',
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'apple-touch-icon.png',
        'robots.txt',
      ],
      manifest: {
        name: 'Vitact',
        short_name: 'Vitact',
        description: 'Opinionated Vite Starter Template',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    WindiCSS(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
  ],
});
