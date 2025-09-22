// webpack.dev.js
const path = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // تجاهل أي url() مطلق يبدأ بـ / (زي /img/home-bg.jpg)
              url: {
                filter: (url) => !url.startsWith("/"),
              },
              importLoaders: 0,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true, // عشان روتات SPA ترجع لـ index.html
    static: [
      path.resolve(__dirname, "public"), // يقدّم /img/* مباشرة في الديف
      path.resolve(__dirname, "dist"),
    ],
    open: false,
    client: { overlay: true },
  },

  optimization: {
    runtimeChunk: "single",
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
});
