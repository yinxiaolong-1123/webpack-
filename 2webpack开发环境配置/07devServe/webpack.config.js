const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");





module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // 详细的loader 配置
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 如何打包其他资源(除了js / css / html资源外的资源)
            {
                // 排除css / js / html 资源
                exclude: /\.(css|js|html)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                }
            }
        ]
    },
    plugins: [
        // 详细的plugins配置
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    // mode: 'production'
    // 开发服务器 devServer 作用： 自动编译/自动打开浏览器/自动刷新浏览器
    // 特点: 只会在内存中打包，不会有任何输出 ---》》 可以删除build 也可以正常运行
    // 启动devServer的指令：npx webpack-dev-server     ->> webpack-dev-server 需要下载
    devServer: {
        contentBase: resolve(__dirname, 'build'), // 项目构建后的路径
        compress: true, // 启动gzip压缩 ---- 运行项目更快
        port: 3000, // 端口号
        open: true // 自动打开浏览器
    }

};