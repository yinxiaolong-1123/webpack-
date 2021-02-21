/**
 * webpack.config.js 是webpack的配置文件
 * 作用： 指示webpack干那些活（当运行webpack指令的时候 ， 会加载里面的配置）
 * 所有的构建工具都是基于nodejs平台运行的~模块化默认采用common.js.
 */

 // resolve 用来拼接绝对路径的方法
const { resolve, dirname } = require('path');

module.exports = {
    // wenpack 的配置
    // 入口起点
    entry: './src/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出的路径
        // __dirname nodejs的变量， 代表当前文件夹下目录的绝对路径
        path: resolve(__dirname, 'build')
    },
    // loader的配置
    module: {
        rules: [
            // 详细的loader配置
            // 不同文件必须配置不同的loader处理
            {
                // 配置那些文件
                test: /\.css$/,
                // 使用那些loader进行处理
                use: [
                    // use数组中的执行顺序，从右到左， 从下到上依次执行
                    // 创建style标签 将js中的样式资源插入， 添加到header中生效
                    'style-loader',
                    // 将css编译成 commonjs加载到js中， 里面的内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 需要下载less 和 less-loader
                    // 将less文件编译成css文件
                    'less-loader',
                ]
            }
        ]
    },
    // plugins配置 -- 插件
    plugins: [
        // 详细的plugins配置
    ],
    // 模式
    mode: 'development'
    // mode: 'production'
}