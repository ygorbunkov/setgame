const { TerserPlugin } = require("./plugins");

module.exports = {
  mode: "production",
  devtool: "nosources-source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: "all",
      }),
    ],
  },
};
