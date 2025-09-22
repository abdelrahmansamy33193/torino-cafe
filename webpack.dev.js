// webpack.dev.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',

  entry: { main: path.resolve(__dirname, 'src/index.js') },

  devtool: 'eval-source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
    clean: true
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { cacheDirectory: true } } },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 10 * 1024 } },
        generator: { filename: 'assets/[name][ext][query]' }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/fonts/[name][ext][query]' }
      }
      // ⚠️ بدون html-loader
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: { '@': path.resolve(__dirname, 'src') }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      inject: 'body',
      scriptLoading: 'defer'
    })
  ],

  optimization: {
    runtimeChunk: 'single',
    splitChunks: { chunks: 'all' }
  },

  devServer: {
    static: { directory: path.resolve(__dirname, 'dist'), watch: true },
    host: '0.0.0.0',
    port: 3000,
    open: true,
    compress: true,
    historyApiFallback: true,
    client: { overlay: true, logging: 'info' },
    hot: true
  }
};
