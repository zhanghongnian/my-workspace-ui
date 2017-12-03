const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const context = path.resolve(__dirname, '../');

module.exports = {
  context: context,
  entry: path.resolve(context, 'src/index.js'),
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: context
    }),
    new CopyWebpackPlugin([
      { from: 'assets/fonts/antd/*' }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(context, 'assets/templates/index.html'),
      favicon: path.resolve(context, 'assets/templates/favicon.ico')
    })
  ],
  output: {
    path: path.resolve(context, 'dist'),
    publicPath: '/',
    filename: '[name].[hash:10].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(context, 'src'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                '@icon-url': '"/assets/fonts/antd/iconfont"',
              },
            },
          },
        ]
      },
      {
        test: /\.json$/, loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
}
