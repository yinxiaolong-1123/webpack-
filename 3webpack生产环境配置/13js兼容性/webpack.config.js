
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');
const { resolve } = require('path');


module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            /*
             * js兼容性处理：babel-loader @babel/core --》 不管那种方法都需要这两个模块
             * 1.基本的兼容性处理 --》》 @babel/preset-env 
             * 问题： 只能转换基本语法  如promise等高级语法转化不了
             * 用法：👇
             * {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    //预设：指示babel做怎么样的兼容性处理
                    presets:[
                        '@babel/preset-env'
                    ]
                }
            }
             * 
             * 2.全部js兼容性处理 --》》 @babelpolyfill ---用法：下载后在需要的页面引入即可
             * 
             * 问题： 我只要做部分兼容性问题， 但是将所有的兼容性代码全部引入 体积太大了
             * 
             * 3.需要做兼容性处理的 ---》》 按需加载  corejs（下载）  注意：  使用第三种就不能使用第二种
             * 用法 👇
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    //预设：指示babel做怎么样的兼容性处理
                    presets:[
                        [
                            '@babel/preset-env',
                            {
                                // 按需加载
                                useBuiltIns: 'usage',
                                // 指定core-js版本
                                corejs: {
                                    version: 3,
                                },
                                // 指定兼容浏览器版本范围
                                targets: {
                                    chrome: '70', // 谷歌版本70及以上
                                    firefox: '62',
                                    ie: '9',
                                    safari: '10',
                                    edge: '17',
                                }
                            }
                        ]
                    ]
                }
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}