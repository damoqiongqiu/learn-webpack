const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
    entry: ["babel-polyfill","./src/index.js"],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: "./dist",
        port:3000
    },
    plugins: [
        new ManifestPlugin(),
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "增加Babel，ES6转ES5"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        cacheDirectory:true,
                        presets:['env'],
                        plugins:['transform-runtime']
                    }
                }
            }
        ]
    }
};
