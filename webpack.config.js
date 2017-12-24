const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const helpers = require('./helpers');

module.exports = {
  entry: {
    vendor: ['./src/vendor.ts'],
    polyfills: ['babel-polyfill', './src/polyfills.ts'],
    app: './src/index.tsx',
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: '[name].js',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-1'],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helpers.root('tsconfig.json'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'vendor', 'polyfills'],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // inject: false,
      template: './template.html',
    }),
  ],
};
