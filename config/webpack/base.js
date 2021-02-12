const path = require("path");

const { HtmlWebpackPlugin } = require("./plugins");

const context = path.resolve(__dirname, "../..");

module.exports = {
  context,
  mode: "none",
  target: "web",
  entry: {
    app: path.resolve(context, "src/client", "index.tsx"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: "babel-loader",
        include: path.resolve(context, "src"),
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(context, "dist"),
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      appMountId: "app",
      filename: "index.html",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
