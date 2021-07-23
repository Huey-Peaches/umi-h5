/*
 * @Author: KeMull
 * @Date: 2021-07-23 12:04:02
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-23 17:07:51
 */
import { defineConfig } from 'umi';
import { Routes } from './config/router';
import WebpackPlugin from './config/plugin.config';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes:Routes,
  fastRefresh: {},
  mfsu: {},
  define: {
    'process.env': {
      MY_NODE_ENV: process.env.MY_NODE_ENV,
      VERSION_CODE: process.env.VERSION_CODE,
    },
  },
  devServer: {
    port: Number(process.env.PORT_ENV) || 8000,
    open: true,
  },
  hash: true,
  styles: [
    './node_modules/antd-mobile/dist/antd-mobile.css'
  ],
  // chainWebpack: WebpackPlugin,
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  }
});
