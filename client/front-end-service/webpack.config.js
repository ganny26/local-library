const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log("path...", path.join(__dirname, "/src/index.js"));
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    hot: true,
    inline: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: / node_modules /,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
