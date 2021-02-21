

const { resolve } =  require('path');

const htmlWebpackPlugin =  require('html-webpack-plugin');

const webpack = require('webpack');

const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // 详细的loader 配置
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            // 复制 ./src/index.html 文件并自动引入打包输出的所有资源(js/css)
            template: './src/index.html'
        }),
        // 告诉webpack那些库不参与打包，同时使用的名称也得改
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname, 'dll/mainfest.json')
        }),
        // 将某个文件打包输出 出去， 并在html中自动引入该资源
        new AddAssetHtmlWebpackPlugin({
            filepath: resolve(__dirname, 'dll/jquery.js')
        })
    ],
    // mode: 'development'
    mode: 'production'

}