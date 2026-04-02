import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mp4', '**/*.m4a'], // Thêm dòng này để Vite hiểu video là tài nguyên
})
