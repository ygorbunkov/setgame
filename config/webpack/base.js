const { CleanWebpackPlugin, HtmlWebpackPlugin } = require('./plugins')
const path = require('path')

const context = path.resolve(__dirname, '../..')

module.exports = {
  context,
  mode: 'none',
  target: 'web',
  entry: {
    app: path.resolve(context, 'src/client', 'index.tsx')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: 'babel-loader',
        include: path.resolve(context, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(context, 'dist/'),
    filename: '[name].[contenthash].js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../public/index.html'),
      filename: 'index.html'
    })
  ]
}
