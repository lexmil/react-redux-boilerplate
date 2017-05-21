const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: NODE_ENV == 'development',
  watchOptions: {
    agregateTimeout: 100
  },
  devtool: NODE_ENV == 'development' ? 'eval' : null,

  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(NODE_ENV)
    })
  ]
};