const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: {
    "single-spa.config": path.resolve(__dirname, "single-spa.config.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader",
      },
      {
        test: /\.svelte$/,
        use: "svelte-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  // Webpack 4
  node: {
    fs: "empty",
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
      svelte: path.resolve("node_modules", "svelte"),
    },
    mainFields: ["svelte", "browser", "module", "main"],
    modules: [path.resolve(__dirname, "node_modules")],
    // Webpack 5
    // fallback: {
    //   fs: false,
    // },
    extensions: [".mjs", ".js", ".svelte", ".jsx", ".json", ".vue", ".css"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
    new VueLoaderPlugin(),
  ],
  devtool: "cheap-source-map",
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 8080,
  },
};
