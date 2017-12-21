const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

process.traceDeprecation = true;

var config = {
  // devtool: 'inline-source-map',
  entry: './src/app.js',
  output: {
    filename:  './app.bundle.js',
  },
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    // "jquery": "jQuery"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['env',{ "targets": { "browsers": ["last 2 versions"] }}]
            ]
          }
        }]
      },
      // {
      //   test: /\.(svg|png)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: { limit: 10000 } // Convert images < 10k to base64 strings
      //   }]
      // },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [
      //       'css-loader'
      //     ]
      //   })
      // },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     {
        //       loader: 'css-loader',
        //       options: { url: true, importLoaders: 1, sourceMap: true }
        //     },
        //     'postcss-loader',
        //     {
        //       loader: 'sass-loader',
        //       options: { url: true, sourceMap: true }
        //     },
        //     'import-glob-loader'
        //   ]
        // })
      },
    ]
  },
  plugins: [
    // new ExtractTextPlugin({
    //   filename: "../css/[name].css",
    //   allChunks: true
    // }),
    // new StyleLintPlugin({
    //   files: "./view/scss/**/*.scss"
    // }),
    // new webpack.ProvidePlugin({
    //   "$": "jquery",
    //   "jQuery": "jquery",
    //   "window.jQuery": "jquery" //This is for Velocity works under jquery
    // }),
  ],
  watchOptions: {
    ignored: /node_modules/
  }
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = '';
}

module.exports = config
