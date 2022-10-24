/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.tsx'),
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		open: true,
		compress: true,
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.less$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ 
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true,
							}
						}
					}
				]
			},
			{
				test: /\.(s[ac]ss|css)$/i,
				exclude: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: ['src/components', 'src/globalStyles'],
							},
						},
					},
				],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
				use: 'svgo-loader',
				exclude: [path.resolve(__dirname, 'src/globalStyles/fonts')],
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
				include: [path.resolve(__dirname, 'src/globalStyles/fonts')],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, '..', './build'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			favicon: path.resolve(__dirname, './src/img/favicon.ico')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ESLintPlugin(),
	],
};