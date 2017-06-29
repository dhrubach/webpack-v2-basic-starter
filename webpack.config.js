const webpack = require('webpack');
const path = require('path');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let config = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[chunkhash].js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'babel-loader' },
					{ loader: 'ts-loader' },
				],
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				enforce: 'pre',
				loader: 'tslint-loader',
				options: {
					formattersDirectory: 'node_modules/custom-tslint-formatters/formatters',
					formatter: 'grouped'
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract({
					use: [
						{ loader: 'css-loader' },
						{ loader: 'resolve-url-loader' },
						{
							loader: 'sass-loader',
							options: { sourcemap: true },
						},
						{ loader: 'postcss-loader' },
					],
					fallback: 'style-loader',
				})
			},
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module) {
				return module && module.context && module.context.indexOf('node_modules') > -1;
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/index-template.ejs',
			title: 'Webpack v2 Basic Starter',
			filename: 'index.html'
		}),
		new InlineChunkManifestHtmlWebpackPlugin(),
		new ExtractTextWebpackPlugin('styles.css'),
	],
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		historyApiFallback: true,
		inline: true,
		open: true,
	},
	resolve: {
		extensions: ['.js', '.ts', '.scss'],
	},
	devtool: 'cheap-module-source-map',
};

module.exports = config;

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new OptimizeCssAssetsPlugin()
	);
}
