const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './app/index.js',
    output: {
        path: './dist',
        filename: 'index.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            // loader: "style-loader!css-loader"
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.less$/,
            // loader: "style-loader!css-loader!less-loader"
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
        // new ExtractTextPlugin("style.css", {
        //     allChunks: true
        // })
    ]
};
