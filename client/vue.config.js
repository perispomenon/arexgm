module.exports = {
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:4444',
        secure: false
      }
    }
  }
}
