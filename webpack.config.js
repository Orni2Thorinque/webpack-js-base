const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');

const manifest = JSON.parse(fs.readFileSync('./manifest.json', 'utf8'));

module.exports = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: './src/index.html',
      filename: `index-${manifest['version']}.html`,
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
};
