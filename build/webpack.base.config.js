const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(process.cwd(), './src/index.ts'),
  output: {
    filename: 'app.js',
    path: path.resolve(process.cwd(), './dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), './public/index.html'),
      favicon: path.resolve(process.cwd(), './public/favicon.ico'),
      filename: 'index.html'
    })
  ]
};
