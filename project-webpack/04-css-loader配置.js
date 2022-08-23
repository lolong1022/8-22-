// 配置打包css文件
// 安装loader
// - 1. 安装yarn add css-loader style-loader
//    - css-loader(识别css文件)
//    - style-loader(将css样式以style标签的形式插入document当中)
// - 2.配置loader: module.rules
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
  // 配置模块解析规则
  // module.rules:[] 配置我们的loader
  module: {
    rules: [
      // test: 正则, 匹配的文件,
      // use:[] 指定匹配上的文件使用什么loader
      // 重点: style-loader 要写在 css-loader的前面
      // use数组的解析, 从后往前解析的 
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
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