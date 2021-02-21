const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 设置node环境变量
// process.env.NODE_ENV = 'development';
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');


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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                    } 
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        // 压缩css
        new optimizeCssAssetsWebpackPlugin()
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