

const { resolve } =  require('path');
const htmlWebpackPlugin =  require('html-webpack-plugin');
/**
 * entry: 入口起点：
 * 1.string ---> './src/index.js' 打包形成一个chunk输出一个bable文件,此时chunk的默认文件是main
 * 2.array
 * 3.object
 */

module.exports = {
    // entry: './src/index.js', -- 单入口
    // entry: ['./src/index.js', './src/add.js'], // 多入口 ---》 所有入口文件最终只会形成一个chunk，输出只有一个bunble文件 ，作用：只有在HMR功能中让html热更新生效
    // 多入口，有几个文件就形成几个chunk，输出几个bunble文件，此时chunk的名称就是key
    entry: {
        index: './src/index.js',
        add: './src/add.js'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build')
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