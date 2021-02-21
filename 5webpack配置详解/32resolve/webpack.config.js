

const { resolve } =  require('path');
const htmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
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
        ]
    },
    plugins: [
        new htmlWebpackPlugin()
    ],
    mode: 'development',
    // mode: 'production'
    // 解析模块的规则
    resolve: {
        // 配置解析模块路径别名
        alias: {
            $css: resolve(__dirname, 'src/css')
        },
        // 配置省略文件路径的后缀名
        extensions: ['.js', '.vue', '.json', '.css'],
        // 告诉webpack解析模块取那个目录找
        modules: [resolve(__dirname, '../../node_modules'), 'node_modules' ]
    }

}