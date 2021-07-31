const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const WebpackBar = require('webpackbar');
const ESLintPlugin = require('eslint-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    devServer: {
        open: true,
        port: 5000,
        contentBase: path.join(__dirname, '../dist'),
        historyApiFallback: true,
        publicPath: '/',
        hot: true,
        quiet: true,
        overlay: false,
    },
    devtool: 'eval-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CleanWebpackPlugin({ dry: true, verbose: true }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new WebpackBar(),
        new ESLintPlugin({
            context: 'src/',
            extensions: 'js',
            exclude: 'node_modules',
            failOnWarning: true,
        }),
    ],
    optimization: {
        minimize: false,
    },
    target: 'web',
});
