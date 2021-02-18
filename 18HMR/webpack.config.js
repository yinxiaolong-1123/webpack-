/**
 * HMR: hot module replacement 热模块替换
 * 作用： 一个模块发生变化，只会重新打包这一个模块 而不是打包所有模块 极大优化性能
 * 
 * 样式文件： 可以使用HMR功能，因为style-loader内部实现了
 * js文件：默认不能使用HMR功能
 * html文件：默认不能使用HMR功能，同时会导致问题 --- 》 html文件不能热更新了。（不做HMR更新）
 * 解决： 修改entry入口， 将index.html文件引入
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");






module.exports = {
    entry: ['./src/js/index.js', './src/index.html'],
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
        open: true, // 自动打开浏览器
        hot: true, // 开启HMR功能
    }
}