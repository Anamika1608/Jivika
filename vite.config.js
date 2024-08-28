import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.png'],
  manifest: {
    name: 'Jivika',
    short_name: 'JIVIKA',
    description: 'Pixel Plants , Real Health',
    icons: [
      {
        src: '/J192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/J512.png',
        sizes: '512X512',
        type: 'image/png',
        purpose: 'favicon'

      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon',

      },
      {
        src: '/J144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },

      {
        src: '/J256.png',
        sizes: '256x256',
        type: 'image/png',
        purpose: 'icon'
      },
      {
        src: '/maskable_icon.png',
        sizes: '259x259',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],

    screenshots: [
      {
        src: '/s1.jpg',
        sizes: '1080x2154',
        type: 'image/jpg',
        form_factor: 'narrow' 
      },
      {
        src: '/s2.jpg',
        sizes: '1080x2154',
        type: 'image/jpg',
        form_factor: 'narrow'
      },
      {
        src: '/s3.jpg',
        sizes: '1080x2154',
        type: 'image/jpg',
        form_factor: 'narrow'
      }
    ],
    theme_color: "#2196f3",
    background_color: "#2196f3",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: 'portrait'
  }

}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() , VitePWA(manifestForPlugin)],
})
