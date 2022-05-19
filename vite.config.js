import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DC from '@dvgis/vite-plugin-dc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DC()]
})
