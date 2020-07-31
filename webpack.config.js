const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[hash].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 8238,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: ["babel-loader"],
        exclude: /(node_modules|bower_components)/,
      },

      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
            },
          },
          {
            loader: "file-loader",
            options: {
              name: "./images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React App",
      filename: "index.html",
      template: "public/index.html",
      favicon: "public/favicon.ico",
      inject: true,
      minify: {
        //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true, //删除空白符与换行符
      },
    }),
  ],
};
