const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");




module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/[name][contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        })
    ],
    optimization: {
        splitChunks:{
            chunks:'all',//同时分割同步和异步代码,推荐。
         }
    },
    mode: 'production'
}