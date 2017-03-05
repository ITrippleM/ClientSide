let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
let DashboardPlugin = require('webpack-dashboard/plugin');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let WebpackCleanupPlugin = require('webpack-cleanup-plugin');

loaders = [{
  //IMAGE LOADER
  test: /\.(jpe?g|png|gif|svg)$/i,
  loader: 'file-loader'
},
  {
    // HTML LOADER
    test: /\.html$/,
    loader: 'html-loader'
  }, {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public\/)/,
    loaders: ["babel-loader"],
  }, {
    test: /\.scss$/,
    exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
    loaders: [
      'style-loader',
      'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'postcss-loader',
      'sass-loader'
    ]
  }];

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: "inline-source-map",
  module: {
    loaders
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new FaviconsWebpackPlugin({
      logo: './src/favicon.png',
      title: 'Pokémon Next-Gen',
      persistentCache: true,
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Pokémon Next-Gen'
    }),
    new WebpackCleanupPlugin(),
  ]
};