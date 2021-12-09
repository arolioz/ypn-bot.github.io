const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
    mode: 'production',
    output: {
        uniqueName: 'YPN',
        path: path.resolve(__dirname, '../dist'),
        filename: '[contenthash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[contenthash].css',
            chunkFilename: '[id].css'
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            name: false
        },
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true }
                        }
                    ]
                }
            }),
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 8
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2
                    },
                    mangle: {
                        safari10: true
                    },
                    keep_classnames: true,
                    keep_fnames: true,
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true
                    }
                },
                extractComments: false
            })
        ]
    }
});
