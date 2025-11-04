import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // 允许使用全局 test/expect 等，不需要 import
    environment: 'jsdom', // 如果你测试中需要 DOM（比如测试 React/Vue 组件）
    include: ['src/**/*.{js,ts}', '**/*.test.ts', '**/*.spec.ts'], // 支持 src 下的测试
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});