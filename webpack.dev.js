const merge = require('webpack-merge');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(
  {
    mode: 'development',
    entry: {
      vendor: ['react-hot-loader/patch', 'webpack-hot-middleware/client'],
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './public',
      hot: true,
    },
    stats: {
      colors: true,
      reasons: true,
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new WriteFilePlugin(),
    ],
  },
  common,
);
