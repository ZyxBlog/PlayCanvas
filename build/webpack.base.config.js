const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const rootPath = path.resolve(__dirname, '../')

const  webpackConfig = {
    module: {
        rules: [
            {
                test: /(\.jsx?$)/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg|ttf|woff|eot)$/,
                loaders: ['url-loader?limit=10240&name=css/images/[name].[ext]'],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.ts'],
        alias: {
            'jquery': 'jquery' 
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'views/index.ejs',
            template: rootPath + '/src/index.ejs',
            chunks: ['index'],
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
}

module.exports = webpackConfig