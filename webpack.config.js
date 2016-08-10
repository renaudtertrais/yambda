const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    bundle: path.join(__dirname, '/src/index.js')
  },
  output: {
    path: path.join(__dirname),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
};

module.exports = config;
