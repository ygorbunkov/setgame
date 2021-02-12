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
    port: 3000,
  },
  entry: ["react-hot-loader/patch", "./src/client/index.tsx"],
};
