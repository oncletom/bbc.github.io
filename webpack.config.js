var webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: 'dist/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
};