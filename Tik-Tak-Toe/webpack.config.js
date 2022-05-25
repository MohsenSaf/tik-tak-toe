const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}

module.exports = (env, { mode }) => {
  if (mode === 'production') {
    config.plugins.push(new CleanWebpackPlugin())
    config.stats = 'detailed'
  } else {
    config.devServer = {
      static: {
        directory: path.join(__dirname, 'public')
      },
      compress: true,
      port: 3000,
      open: true,
      client: {
        overlay: false
      }
    }
    config.stats = 'minimal'
  }

  return config
}
