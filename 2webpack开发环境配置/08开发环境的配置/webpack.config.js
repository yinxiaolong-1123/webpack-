/**
 * 开发环境的处理
 * 
 * 运行项目指令: 1. webpack 将的打包结果输出去
 *              2. npx webpack-dev-server 只会在内存中编译打包，没有输出
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");






module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                // 处理less资源
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                // 处理css资源
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                // 处理图片资源
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    esModule: false,
                    name: '[hash:10].[ext]',
                    outputPath: 'images'
                }
            },
            {
                // 处理html中img资源
                test: /\.html$/,
                loader: 'html-withimg-loader'
            },
            {
                // 处理其他资源
                exclude: /\.(html|js|css|less|jpg|png|gif|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: '[has:10].[ext]',
                    outputPath: 'media'
                }

            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    // mode: 'production'
    devServer: {
        contentBase: resolve(__dirname, 'build'), // 项目构建后的路径
        compress: true, // 启动gzip压缩 ---- 运行项目更快
        port: 3000, // 端口号
        open: true // 自动打开浏览器
    }
}