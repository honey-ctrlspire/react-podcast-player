const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: ['@babel/polyfill', './src/index.js', './src/styles/app.scss'], // Which file we want to use to be our source file, entry point, that have modern JS
	},
	module: {
		rules: [
			{
				test: /\.(s?css)$/,
				// exclude: /node_modules/,
				sideEffects: true,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'source',
					},
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '../resources/sass_js/scss/_friends.scss',
		}),
	],
};
