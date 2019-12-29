var webpack = require('webpack');
var path = require('path');

module.exports = {
	mode: 'development',
	devtool: '#eval-source-map',
	// context: path.join(__dirname, '../src', 'js'),
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
        // './src/js/client/main',
	],
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'docs/assets/', 'js'),
		publicPath: '/docs/assets/js/'
	},
	plugins: [
	    new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	    // new webpack.NoEmitOnErrorsPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader', 'babel-loader']
			}
		]
	}
};