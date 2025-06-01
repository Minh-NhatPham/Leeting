const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "JS learnin/module/testimport.js"),
  output: {
    path: path.resolve(__dirname, "JS learnin/dist"),
    filename: "bundle.js",
  },
  mode: "production", // Change to 'production' for tree shaking
  optimization: {
    sideEffects: false,
    minimize: false,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
    usedExports: true, // Enable tree shaking
  },
  resolve: {
    extensions: [".js", ".cjs", ".mjs"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
