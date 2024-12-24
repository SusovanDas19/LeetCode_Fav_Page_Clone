import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/LeetCode_Fav_Page_Clone/',
  plugins: [react()],
})
