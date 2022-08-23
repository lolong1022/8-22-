// 安装loader
//  - yarn add less-loader less
//    - less-loader(识别.less文件), less的作用将.less转成.css文件

// 配置less-loader
//  - module.rules
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

  module: {
    rules: [
      // 对应的一种文件的类型
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 1. less-loader:识别less文件,调用less --> css
        // 2. css-loader 识别css文件
        // 3. style-loader css文件以style便签形式插入文档当中
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
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