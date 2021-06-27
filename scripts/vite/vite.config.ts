import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { ConfigEnv, UserConfigExport } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

const config: UserConfigExport = {
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@test/': path.resolve('./__test__'),
      '@/': path.resolve('./src'),
      '@/mock': path.resolve('./src/mock'),
      '@/ui': path.resolve('./src/ui'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
};

// Todo 处理环境配置到 config
export default ({ command, mode }: ConfigEnv) => {
  console.log(command);
  const file = path.resolve(`scripts/env/.env${mode ? `.${mode}` : ''}`);
  try {
    const envConfig = dotenv.parse(fs.readFileSync(file));
    for (const key in envConfig) {
      if (Object.prototype.hasOwnProperty.call(envConfig, key)) {
        // process.env[key] = envConfig[key];
      }
    }
  } catch (error) {
    console.log(`realErr: ${error}`);
    console.log('配置文件不存在');
  }

  return config;
};
