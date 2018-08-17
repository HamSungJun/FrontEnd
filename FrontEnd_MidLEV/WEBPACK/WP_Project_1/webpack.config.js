// webpack.config.js
var path = require('path')
var webpack = require('webpack');

module.exports = {
  entry: ['./app/main'], // file extension after index is optional for .js files
  output: {
    path: path.join(__dirname, 'webpack_bundles'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(s*)css$/,
      use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }
      ]
    }
  ]
  }
}