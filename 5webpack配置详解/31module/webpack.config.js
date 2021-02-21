

const { resolve } =  require('path');
const htmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/[name].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // 详细的loader 配置
            {
                test: /\.css$/,
                // 多个loader用use
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                // 单个loader用 loader
                exclude: /node_modules/, // 排除node_modules
                include: resolve(__dirname, 'src'), // 只检查src下的js文件
                // enforce: 'pre', // 优先执行
                enforce: 'post', // 延后执行
                loader: 'eslint-loader'
            },
            {
                oneOf: [] // 一下配置只能生效一个
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin()
    ],
    mode: 'development'
    // mode: 'production'

}