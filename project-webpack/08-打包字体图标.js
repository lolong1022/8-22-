// 打包字体图标

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'bundle'), // 绝对路径
    filename: 'bundle.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        // 配置loader
        // loader有字符串的写法, 也有对象的写法
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            // 配置loader的选项
            options: { url: false }
          }]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },

      {
        test: /\.(gif|jpg|png|svg|ico)$/,

        type: 'asset',
        generator: {
          filename: 'images/[name]-[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        // assetModule 打包文件(图片/字体图标/.txt/.mps/mp4/.avi)
        // assetModule: asset/ asset/inline  / asset/resource
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name]-[hash:10][ext]'
        }
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