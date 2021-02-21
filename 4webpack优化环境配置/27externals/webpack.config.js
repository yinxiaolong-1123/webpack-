

const { resolve } =  require('path');

const htmlWebpackPlugin =  require('html-webpack-plugin');



module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // 详细的loader 配置
        ]
    },
    plugins: [
        // 详细的plugins 配置
        // html-webpack-plugin
        // 功能： 默认会创建一个空的html， 自动引入打包输出的所有资源(js/css)
        // 需求：需要有结构的html文件
        new htmlWebpackPlugin({
            // 复制 ./src/index.html 文件并自动引入打包输出的所有资源(js/css)
            template: './src/index.html'
        })
    ],
    // mode: 'development',
    mode: 'production',
    externals: {
        // 拒绝jquery被打包
        jquery: 'jQuery'
    }

}