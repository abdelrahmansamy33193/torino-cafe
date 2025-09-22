// webpack.common.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[contenthash].js",
    assetModuleFilename: "assets/[name].[contenthash][ext][query]",
    clean: true,
    publicPath: "/", // عشان SPA routing يشتغل
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      // JS/JSX via Babel
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        use: "babel-loader",
      },
      // صور كـ asset/resource لو بتعمل import للصور من JS
      {
        test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        type: "asset/resource",
        generator: { filename: "img/[name].[contenthash][ext]" },
      },
      // خطوط
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: { filename: "fonts/[name].[contenthash][ext]" },
      },
    ],
  },
  plugins: [
    // هيولد dist/index.html ويحقن السكربت/الستايل تلقائي
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      inject: "body",
    }),
    // انسخ مجلد public كله إلى dist (ماعدا index.html لأنه فوق بيتولد)
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
          globOptions: { ignore: ["**/index.html"] },
        },
      ],
    }),
  ],
};
