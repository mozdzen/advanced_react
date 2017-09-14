const path = require('path');
//const nodeExternals = require('webpack-node-externals');
const config = {
  entry: ['babel-polyfill','./lib/components/Index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  //target: 'node',
  //externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_component)/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ['env','stage-2']
          }
        }
      }
    ]
  }
};

module.exports = config;