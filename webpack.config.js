const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: {
        index: "./src/index.js",
        another: "./src/another-module.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new ManifestPlugin(),
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "自动清理dist目录"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    }
};
