

const { resolve } =  require('path');
const htmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/[name].js', // 文件名称 也可以指定名称 + 目录
        path: resolve(__dirname, 'build'),  // 输出的文件目录（将来所有资源输出的公共目录）
        publicPath: '/', // 生产环境 ---》所有资源引入路径的前缀 --》 路径的前面 如： imags/a.png --> /images/a.png
        chunkFilename: 'js/[name]_chunk.js', // 非入口chunk的名称
        library: '[name]', // 整个库向外暴露的变量名
        // libraryTarget: 'window', // 变量名添加到那个上  browser
        // libraryTarget: 'global', // 变量名添加到那个上  node
        libraryTarget: 'commonjs' 
    },
    module: {
        rules: [
            // 详细的loader 配置
        ]
    },
    plugins: [
        new htmlWebpackPlugin()
    ],
    mode: 'development'
    // mode: 'production'

}