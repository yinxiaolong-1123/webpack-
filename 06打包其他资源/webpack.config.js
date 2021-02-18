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
    mode: 'development'
    // mode: 'production'
}