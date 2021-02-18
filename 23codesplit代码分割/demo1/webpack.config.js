const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");




module.exports = {
    // entry: './src/js/index.js' 单入口
    entry: {
        // 多入口： 有一个入口，最终输出就有一个babel，有两个入口，最终输出就有两个babel
        main: './src/js/index.js',
        test: './src/js/test.js'
    },
    output: {
        // [name] :取文件名
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
    mode: 'production'
}