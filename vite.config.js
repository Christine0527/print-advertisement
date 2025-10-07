import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 如果不是 React 專案，刪掉這行與 plugins

export default defineConfig({
  plugins: [react()],
  base: '/print-advertisement/',   // 一定要與你的 repo 名稱完全相同
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
})