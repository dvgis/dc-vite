import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import DC from '@dvgis/vite-plugin-dc'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), eslint(), DC()],
})
