/* 
为什么要配置脚本?
"scripts": {
  "build": "webpack", // webpack-cli
  "serve":"webpack serve"
}
*/

// npx 脚本命令
// npx webpack
// - 首先到node_modules找webpack命令,执行他
// - 看看有没有安装webpack, 使用webpack打包了.
// - 如果没有安装? 下载webpack并且打包, 打包完了再删除

// npx webpack 启动打包
// npx webpack serve 启动开发服务器

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
  devServer: {
    open: true,
    port: 8888
  }
}