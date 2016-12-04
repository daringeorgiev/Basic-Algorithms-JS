var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
      }
    ]
  },
  plugins: [new ExtractTextPlugin('styles.css', {allChunks: true})]
}

module.exports = config;