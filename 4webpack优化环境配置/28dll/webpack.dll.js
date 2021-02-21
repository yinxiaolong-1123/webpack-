/**
 * 使用dll技术，对某些库（第三方的库 如：jquery等）进行单独打包
 * 当运行webpack时默认运行 webpack.config.js
 * 需求;
 * 运行webpack.dll.js文件
 * --》 webpack --config webpack.dll.js
 */

const { resolve } = require("path");
const  webpack  = require("webpack");

module.exports = {
    entry: {
        // 最终打包生成的[name] --> jquery
        // ['jquery'] 要打包的库叫jquery
        jquery: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dll'),
        library: '[name]_[hash]'  // 打包的库里面向外暴露出去的内容叫什么名字
    },
    plugins: [
        // 打包生成一个mainfest.json ---> 提供和jQuery映射
        new webpack.DllPlugin({
            name: '[name]_[hash]', // 映射库的暴露的内容的名称
            path:resolve(__dirname, 'dll/manifest.json'),  // 输出的文件路径
        })
    ],
    mode: 'production'
}