const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './server-entry.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
}
