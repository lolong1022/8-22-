// 让webpack可以识别图片
//  - webpack4: url-loader和file-loader 处理图片资源
//  - webpack觉得处理文件资源(字体图标,图片,txt文本...)非常频繁

// webpack5 处理我们的文件资源 使用内置assetsMoudle处理
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    // output.path:指定输出目录
    path: path.join(__dirname, 'bundle'), // 绝对路径
    filename: 'bundle.js',
    clean: true,
  },

  module: {
    rules: [
      // 每一个对象被称为Rule对象
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      // 处理图片
      //  在正则当中 () 代表的是表达式结果

      // type:指定资源模块的方式(怎么处理图片)
      // 值: 'asset/resource' , 它会把图片打包成单独的文件
      {
        test: /\.(gif|jpg|png|svg|ico)$/,
        type: 'asset/resource'
      },
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