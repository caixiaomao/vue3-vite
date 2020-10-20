import { resolve } from 'path'

export default {
  port: 5000,
  open: false,
  // 必须以 / 开始
  alias: {
    '/@/': resolve(__dirname, './src')
  },
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}
