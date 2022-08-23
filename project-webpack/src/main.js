import { marquee } from './marquee'
import tabs from './tabs'


// 函数的调用
marquee()
tabs()

// webpack默认只能去打包js文件和json文件 
//  - 如果说我们想去扩展webapck的打包能力, 需要配置和下载对应的loader(加载器)

// 1.在main.js里引入css文件
//  - 引入css文件的时候, 直接引入整个文件
//  - 注意.css不能省略, .js可以省略

/* 
You may need an appropriate loader to handle this file type, 
currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> .marquee {
|   width: 100px;
|   height: 100px;
 @ ./src/main.js 12:0-27

*/
import './styles/index.css'

// 引入less
import './styles/index.less'

// 添加图片
// 1. 引入图片
//  - 引入src属性

// 2. 创建img节点

// 3. 给img节点赋值src属性

// 4. 将img添加到body最后边
import gifSrc from './assets/1.gif'
const img = document.createElement('img')
img.src = gifSrc
document.body.appendChild(img)


import pngSrc from './assets/logo_small.png'
const img2 = document.createElement('img')
img2.src = pngSrc
document.body.appendChild(img2)

// 引入字体图标的css
// 字体和入口文件产生间接的的关系
// webpack只能打包.js和.json, 为什么可以打包.woff/.svg?
// 是因为css-loader新特性可以处理字体图标
import './assets/fonts/iconfont.css'


// 有兼容性问题的语法
class Person {
  name = '张三'
  age = 18
}
console.log(Person)