const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
            filename: 'index.html',
            meta: {
                viewport: 'width=device-width,initial-scale=1'
            },
            title: 'YPN',
            hash: true
        }),
        new GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
        new CopyPlugin({
            patterns: [{ from: 'public/robots.txt', to: 'robots.txt' }]
        })
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js?$/i,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[contenthash][ext]'
                }
            }
        ]
    }
};
