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
            },
            { test: /\.png$/, loader: "url-loader?prefix=img/&limit=5000000" },
            { test: /\.jpg$/, loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.gif$/, loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.woff$/, loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.eot$/, loader: "file-loader?prefix=font/" },
            { test: /\.ttf$/, loader: "file-loader?prefix=font/" },
            { test: /\.svg$/, loader: "file-loader?prefix=font/" }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
        // new ExtractTextPlugin("style.css", {
        //     allChunks: true
        // })
    ]
};
