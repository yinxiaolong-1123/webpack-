

const { resolve } =  require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/builts.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            /**语法检查 eslint-loader eslint
             * 只检查自己写的代码 不检查第三方的库  否则会报错
             * 设置检查规则： 在package.json中eslintConfig中设置
             * airbnb 推荐规则：   https://github.com/topics/javascript
             * eslint-config-airbnb-base eslint eslint-plugin-import
             * 
             * "eslintConfig": {
                    "extends": "airbnb-base"
                }
            */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // 自动修复eslint错误
                    fix: true
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    // mode: 'production',
    mode: 'development'
}