var webpack = require("webpack");

module.exports = {
	// application entry file
	entry: "./src/jquery.plugin.ts",

	// bundled application output file
	output: {
		path: __dirname,
		filename: "/dist/accordion.min.js"
	},

	// Currently we need to add '.ts' to the resolve.extensions array.
	resolve: {
		extensions: ['', '.ts']
	},

	// Source maps support ('inline-source-map' also works)
	devtool: 'source-map',

	// Add the loader for .ts files.
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			}
		],

		preLoaders: [
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true
		})
	]
};
