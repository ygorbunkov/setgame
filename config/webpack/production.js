const { TerserPlugin } = require("./plugins");

module.exports = {
  mode: "production",
  devtool: "nosources-source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: "all",
      }),
    ],
  },
};
