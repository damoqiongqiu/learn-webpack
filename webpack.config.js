 module.exports = {
     entry: './app/index.js',
     output: {
         path: './dist',
         filename: 'index.bundle.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
 };
