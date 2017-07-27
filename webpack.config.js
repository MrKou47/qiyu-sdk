const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.join(__dirname, './src/index.ts'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './lib'),
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts','.tsx', '.js'],
  },
  externals: [
    "crypto",
    "request",
    "url",
    "md5",
  ],
  module: {
    loaders: [{
      test: /\.ts/,
      enforce: 'pre',
      loaders: 'tslint-loader',
      exclude: /node_modules/,
      options: {
        emitErrors: true,
      }
    }, {
      test: /\.ts/,
      loaders: 'ts-loader',
      exclude: /node_modules/,
    }]
  },
  target: 'node',
};

module.exports = config;