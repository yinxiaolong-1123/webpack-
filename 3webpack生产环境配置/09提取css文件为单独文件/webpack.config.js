const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');




module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/builts.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 创建style标签 将样式放在html 中的header中
                    // 'style-loader',
                    MiniCssExtractPlugin.loader, // 这个loader取代style-loader。 作用： 提取js中的css为单独文件
                    // 将css文件整合到js文件中
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // 对输出的文件进行重命名
            filename: 'css/built.css'
        })
    ],
    mode: 'production',
    // mode: 'development'

    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
        open: true
    }
}