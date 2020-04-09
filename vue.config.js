module.exports = {
  devServer: {
    open: true, // 默认开启浏览器
    port: 8080, // 更改默认端口号为8000
    overlay: { // 遮罩层
      warnings: false,
      errors: false
    },
    proxy: { // 代理
      '/api': {
        target: 'http://m.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        con: '@/components',
        views: '@/views'
      }
    }
  }
}
