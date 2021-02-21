
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
    },
    devtool: 'eval-source-map' // inline-source-map/hidden-source-map/eval-source-map 
}

/**
 * 'source-map'  一种 提供源代码到构建后映射代码 技术（如果构建后的代码出错了，通过映射可以追踪到源代码错误）
 * [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
 * 
 * source-map： 外部 ---》作用： 提示错误代码的准确信息 和 源代码错误的准确位置（精确到行和列）
 * 
 * inline-source-map： 内联  只生产一个内联source-map ---》 作用： 提示错误代码的准确信息 和 源代码错误的准确位置
 * 
 * hidden-source-map： 外部 ---》 作用： 提示错误代码的原因但是没有错误的准确位置，不能追踪到源代码错误，只能提示到构建后的代码的错误位置
 * 
 * eval-source-map： 内联 每个文件都生成一个source-map 并都在eval函数中  ---》作用： 提示错误代码的准确信息 和 源代码错误的准确位置
 * 
 * nosources-source-map： 外部 ---》 作用： 提示错误代码的准确信息，但是没有任何源代码信息
 * 
 * cheap-source-map： 外部 ---》作用： 提示错误代码的准确信息 和 源代码错误的准确位置（只能精确到行）
 * 
 * cheap-module-source-map： 外部  ---》作用： 提示错误代码的准确信息 和 源代码错误的准确位置
 * module会将loader的source-map加入
 * 
 * 
 * 内联 和 外联 的区别： 1. 外联生成外部文件.map，内联在构建后的js文件 最后面生成 2.内联速度更快
 * 
 * 
 * 怎么用好：
 * 
 * 开发环境：速度快，调试友好
 * 
 * 速度：eval>inline>cheap... 
 * eval-cheap-source-map > eval-source-map
 * 调试更友好：
 * source-map > cheap-module-source-map > cheap-source-map
 * 综合上述：eval-source-map 最好， （eval-cheap-module-source-map也行）
 * 
 * 生产环境：考虑源代码要不要隐藏？调试要不要更友好 
 * 
 * 内联会使代码体积变大 所以生产环境不用内联
 * 考虑源代码要不要隐藏： nosources-source-map 全部隐藏/hidden-source-map 只隐藏原代码，会提示构建后的代码错误信息
 * 调试要不要更友好： source-map
 */