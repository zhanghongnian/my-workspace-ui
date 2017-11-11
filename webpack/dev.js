const path = require('path');
const merge = require('webpack-merge');
const common = require('./common.js');
const webpack = require('webpack');

const dist = path.resolve(__dirname, 'public');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    historyApiFallback: true,
    contentBase: dist,
    publicPath: '/',
    port: 9091
  }
}, {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      })
    ]
  });
