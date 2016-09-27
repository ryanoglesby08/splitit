var nodeExternals = require('webpack-node-externals');

module.exports = {
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  devtool: "cheap-module-source-map",
  target: 'node',               // ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()]  // ignore all modules in node_modules folder
};

require('source-map-support').install({
  environment: 'node'
});