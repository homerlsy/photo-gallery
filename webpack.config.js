const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'examples/src'),
  entry: {
    app: './app.js',
  },
  output: {
    filename: 'app.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'examples/src'),
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['react', 'es2015', 'stage-0'] },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-photo-gallery': path.resolve(__dirname, 'src/Gallery'),
    },
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
      minChunk: 2,
    }),
  ],
};
