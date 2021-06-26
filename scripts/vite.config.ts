import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@test/': path.resolve(__dirname, './__test__'),
      '@/': path.resolve(__dirname, './src'),
      '@/mock': path.resolve(__dirname, './src/mock'),
    }
  },
  plugins: [reactRefresh()],
});


