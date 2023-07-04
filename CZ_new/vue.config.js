const webpack = require('webpack')
const { defineConfig } = require('@vue/cli-service')
const TerserPlugin = require('terser-webpack-plugin');
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
// const productionGzipExtensions = ['html', 'js', 'css']
// var path = require('path');
if (process.env.NODE_ENV === 'production') {
  console.log('This is a log message');
}
module.exports = defineConfig({
  transpileDependencies: true,

  parallel: false,
  publicPath: "./",
  outputDir: 'iotweb',
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              // 移除console.log语句
              drop_console: true
            }
          }
        })
      ]
    }
  },
  devServer: {
    host: 'localhost', //target host
    // port: 8080,
    // proxy:{
    //   "/adminapi":{
    //     target:"http://localhost:3000",
    //     changeOrigin:true
    //   }
    // }
  }
})

