import { defineConfig } from 'vite'
import { resolve } from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import env from './src/config/env'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    AutoImport({
      dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
      imports: ['vue'],
    }),
    Components({
      // 指定组件位置，默认是src/components
      dirs: ['src/components'],
      // ui库解析器
      // resolvers: [ElementPlusResolver()],
      extensions: ['vue'],
      // 配置文件生成位置
      dts: 'src/components.d.ts',
    }),
    uni(),
  ],
  server: {
    port: 3000,
    open: true, //自动打开
    base: './ ', //生产环境路径
    proxy: {
      // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '^/api': {
        target: env.apiBaseUrl, // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
