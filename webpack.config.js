const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const svgUrlLoader = require('svg-url-loader')

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|gif|jpg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/, 
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        encoding: 'base64'
                    }
                }
            }
        ]
    }
}