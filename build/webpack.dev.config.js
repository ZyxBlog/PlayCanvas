const path = require('path')
const WebpackMerge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base.config.js')

const rootPath = path.resolve(__dirname, '../')

const devConfig = WebpackMerge(baseConfig, {
    mode: 'development',
    entry: {
        index: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'js/[name]-[hash].js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new CleanWebpackPlugin(
            {
                root: rootPath,
                verbose: false,
            }
        ),
    ],
})

module.exports = devConfig