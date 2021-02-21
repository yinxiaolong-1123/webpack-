const { resolve } = require("path");



module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'bulid')
    },
    module: {
        rules: []
    },
    plugins: [],
    mode: 'development'
}