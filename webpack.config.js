const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    client: './src/client.js',
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8000
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin(['src/assets']),
    new HtmlWebpackPlugin({
      title: 'NZK Cards',
      filename: 'index.html',
      template: 'src/index.html',
      files: {
        chunks: ['client']
      }
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}