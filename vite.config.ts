import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 让你可以使用 @/ 来引用 src 下的模块
    },
  },
  test: {
    environment: 'jsdom'
  }
});