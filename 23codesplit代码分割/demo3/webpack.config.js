const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");




module.exports = {
    entry: './src/js/index.js',
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
    /**
     * 1.可以将node_modules中代码单独打包一个chunk最终输出
     * 2.自动分析多个入口chunk中，有没有公共的文件，如果有会打包成一个单独的一个chunk
     * 
     */
    optimization: {
        splitChunks:{
            chunks:'all',//同时分割同步和异步代码,推荐。
         }
    },
    mode: 'production'
}