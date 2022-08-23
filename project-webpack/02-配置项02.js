
// production模式打包的特点?  --> 开启压缩, 速度很慢

// 慢
//  - 内存当中打包  --> 输出到bundle/bundle.js

// webpack-dev-server
//- express编写的node服务器

//- 功能: 在内存中打包, 在内存当中部署到服务器上
// 1. yarn add webpack-dev-server -D
// 2. 在package.json配置脚本: "serve":"webpack serve"

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'bundle.js',
    clean: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  // development: 开发
  devServer: {
    // 当你serve以后, 自动的打开浏览器(默认浏览器)运行项目 
    open: true,
    // 默认端口号是8080, 可以设置的范围[0,65535]
    port: 8888
  }
}