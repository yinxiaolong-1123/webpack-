const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 设置node环境变量
// process.env.NODE_ENV = 'development';



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
                    /**
                     * css兼容处理: postcss --> postcss-loader postcss-preset-env
                     * postcss-preset-env --》 帮助postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式
                     * 
                     * "browserslist": {
                     *      开发环境 ---》》 要设置为开发环境 设置node环境 ---》》 process.env.NODE_ENV = development
                            "development": [
                            "last 1 chrome version",
                            "last 1 firefox version",
                            "last 1 safari version"
                            ],
                            生产环境---》》 默认看生产环境
                            "production": [
                            ">0.2%",
                            "not dead",
                            "not op_mini all"
                            ]
                        }
                     */
                    // 'postcss-loader', // 默认配置
                    // 修改loader 配置
                    {
                        loader: 'postcss-loader',
                        // options: {  这个写法postcss已经不兼容了 --- >> 在根目录下创建postcss.config.js
                        //     ident: 'postcss',
                        //     plugins: () => [
                        //         // postcss 插件 --- 数组
                        //         require('postcss-preset-env')()
                        //     ]
                        // }
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