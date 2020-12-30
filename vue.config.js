const path = require('path')
module.exports = {
  // lintOnSave: false
  devServer: {
    proxy: {
      '/api': {
        target: 'http://pudge.wang:3080',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
