// 需求: 打包以后的图片放在bundle/images里
// 配置

// generator 生成器: 指定打包以后的产物生成到哪里
// Rule.generator

// extension:扩展名
// generator.filename : 指定生成文件名字
// [name]: 文件的原名字  [hash:字符串的位数] 代表随机生成的字符串
// [ext]:代表文件的原始后缀

// 铺垫一个知识
//  - base64

// 总结: assetModule
// asset/resource  将文件打包成单独的文件
// asset/inline 将文件打包成base64
// asset 以8kb为界限, 大于8kb打包成文件, 小于8kb打包成base64
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      // {
      //   test: /\.(gif|jpg|png|svg|ico)$/,
      //   type: 'asset/resource', // 图片打包成单独文件
      //   generator: {
      //     filename: 'images/[name]-[hash:6][ext]'
      //   }
      // },

      // {
      //   test: /\.(gif|jpg|png|svg|ico)$/,
      //   // 他会把图片 以base64的形式打包进js
      //   type: 'asset/inline'
      // },
      {
        test: /\.(gif|jpg|png|svg|ico)$/,
        // 以8kb大小做界限, 大于8kb会打包成文件, 小于8kb的会打包成base64
        // 如果不想以8kb为界限了?
        // Rule.parser
        type: 'asset',
        generator: {
          filename: 'images/[name]-[hash:6][ext]'
        },
        parser: {
          // base64打包的时候的选项调教
          dataUrlCondition: {
            // maxSize单位是字节  1kb = 1024字节
            maxSize: 25 * 1024 //25kb
          }
        }
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