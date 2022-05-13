const webpack = require("webpack");
const path = require("path");

// Webpack 5 configuration
// https://webpack.js.org/configuration
module.exports = {
	mode: "development",
	entry:{
		main: "./src/App.ts",
	},

	// Outputs compiled bundle to `./web/js/main.js`
	output:{
		path: path.resolve(__dirname, "/web/"),
		filename: "js/[name].js",
		publicPath: "/web/",
	},

	resolve: {
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],

		// Shortcuts to avoid up-one-level hell: 
		// Turns "../../../utils" into "Utils"
		alias: {
			Utils: path.resolve(__dirname, "./src/utils/"),
		},
	},

	module:{
		// Test file extension to run loader
		rules: [
			{
				test: /\.(glsl|vs|fs)$/, 
				loader: "ts-shader-loader"
			},
			{
				test: /\.tsx?$/, 
				exclude: [/node_modules/, /tsOld/],
				loader: "ts-loader"
			}
		]
	},

	// Enables dev server to be accessed by computers in local network
	devServer: {
		static: path.join(__dirname, '/'),
		port: 8000,
		host: "0.0.0.0",
	}
}