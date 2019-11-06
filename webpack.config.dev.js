const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname,'src/index.js')
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  devServer: {
    port: 8080,
    open : true,
    contentBase: path.resolve(__dirname,'dist'),
  },
  resolve: {
    extensions: ['.js','.css']
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
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template : path.resolve(__dirname,'public/index.html'),
      filename : './index.html'
    })
  ]
}