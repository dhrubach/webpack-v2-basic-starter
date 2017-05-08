const webpack = require("webpack");

let config = {
    entry: './index.js',
    output: {
        filename: './dist/output.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};

module.exports = config;
