// 修改webpack的默认配置

// 默认的入口和出口
// - src/index.js
// - dist/main.js

// 通过commonjs规范去导出一个配置项
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  // mode: 'production':生产 , 'development':开发
  // production模式会自动开启js压缩, developmetn不会开启
  // 如果不写mode默认是production
  mode: 'production',
  // webpack的自定义配置
  // entry:相对路径
  entry: './src/main.js',

  // output.path: 输出的目录 绝对路径
  // __dirname: 代表的是当前文件夹所在的绝对路径
  // output.filename: 输出的文件名字
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'bundle.js',
    clean: true // 先清除path目录, 再冲新打包
  },
  // plugins:[] 配置所有webpack的插件
  // 在webpack里, 所有的插件都是构造函数/类
  plugins: [
    new HtmlWebpackPlugin({
      // 指定html的模板, 相对路径
      template: './public/index.html'
    })
  ]
}