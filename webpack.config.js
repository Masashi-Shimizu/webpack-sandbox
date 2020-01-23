const path = require('path');

const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  watch: true,
  devtool: 'source-map',
  entry: ['@babel/polyfill', './src/js/main.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', {
          loader: 'css-loader',
          options: {
            url: false,
            sourceMap: enabledSourceMap,
            importLoaders: 2
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: enabledSourceMap
          }
        }],
      },
    ]
  }
};