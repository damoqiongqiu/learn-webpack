const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        publicPath: '/dist/',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    }
};
