const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/generated'),
    publicPath: 'generated/',
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
  },
};
