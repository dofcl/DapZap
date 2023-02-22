const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
  chainWebpack:
      config => {
        config.optimization.delete('splitChunks')
      }
}