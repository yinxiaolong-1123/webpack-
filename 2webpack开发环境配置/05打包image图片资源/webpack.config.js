const { resolve } = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require("file-loader");




module.exports = {
    entry: './src/index.js',
    output: {
        publicPath:'./',
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // loader 配置
            {
                test: /\.less$/,
                // 多个loader 用数组
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                // 问题： 默认处理不了html中的image图片
                // 处理图片资源
                test: /\.(jpg|png|jpeg|gif)$/,
                // 单个loader直接写
                // 下载 url-loader file-loader
                loader: 'url-loader',
                options: {
                    // 图片大小小于8kb的时候会被base64处理
                    // 优点：减少请求数量（减轻服务器压力）
                    // 缺点：图片体积会更大（文件请求速度更慢）
                    limit: 8 * 1024,
                    // 问题： 因为url-loader 默认使用es6模块化解析， 而html-loader是用commonjs解析 所以报错
                    // 解决： 关闭url-loader的es6模块化使用commonjs解析就好了
                    esModule: false,
                    // 给图片进行重命名
                    // [hash: 10] 取图片的hash值前 10位
                    // [ext]：取文件原来的扩展名 比如： jpg / gif
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                // 处理html文件中的image图片（负责引入图片image从而被url-loader处理）
                loader: 'html-withimg-loader'  // html-loader 5.x版本会报错
            }
        ]
    },
    plugins: [
        // plugin 配置 --- 插件
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
    // mode: 'production'
}