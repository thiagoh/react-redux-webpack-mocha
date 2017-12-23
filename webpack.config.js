const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    // bundle: "./src/index.js",
    test: './test/test.js',
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx'],
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          // {
          //   loader: "mocha-loader"
          // },
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-1'],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  target: 'node', // webpack should emit node.js compatible code
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder from bundling
};
