const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// node环境变量: 决定使用browserslist的那换个环境
process.env.NODE_ENV = 'production';

// 复用的loader
const commonCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    // 兼容性处理
    {
        // 还需要在package.json中定义browserslist
        loader: 'postcss-loader'
    }
]



module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // 正常来讲一个文件只能被一个loader处理， 当一个文件要被多个loader处理，那么一定要指定loader的执行先后顺序
            // 先执行 eslint 后执行 babel
            {
                // 在package.json中eslintConfig ---> airbnb
                test: /\.js$/,
                exclude: /node_modules/,
                // 优先执行
                enforce: 'pre',
                loader: 'eslint-loader',
                // 自动修复eslint 问题
                options: {
                    fix: true
                }
            },
            {
                // oneOf 一下loader只会匹配一个
                // oneOf注意： 不能有两个配置处理同一种类型的文件
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [...commonCssLoader]
                    },
                    {
                        test: /\.less$/,
                        use: [
                            ...commonCssLoader,
                            'less-loader'
                        ]
                    },
                    {
                        // js兼容性处理
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
                    },
                    {
                        // 图片处理
                        test: /\.(jpg|png|gif|jpeg)$/,
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            name: '[hash:10].[ext]',
                            outputPath: 'image',
                            esModule: false
                        }
                    },
                    {
                        // html中的img
                        test: /\.html$/,
                        loader: 'html-loader'
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
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        }),
        // 提取css文件
        new MiniCssExtractPlugin({
            // 对输出的文件进行重命名
            filename: 'css/built.css'
        }),
        // 压缩css
        new OptimizeCssAssetsPlugin()
    ],
    mode: 'production'
}