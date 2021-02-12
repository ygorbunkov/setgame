const { HtmlWebpackPlugin } = require('./plugins')
const path = require('path')

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    compress: true,
    port: 3000
  },
  entry: ["react-hot-loader/patch", "./src/client/index.tsx"],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Set Game (dev)',
      template: path.resolve(__dirname, '../../public/index.html'),
      filename: 'index.html'
    })
  ]
};
