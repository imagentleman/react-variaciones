const path = require("path");
const webpack = require("webpack");
const minifyPlugin = require("babel-minify-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "query-builder.min.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new minifyPlugin({}, {
      comments: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "react",
              [
                "env",
                {
                  targets: {
                    browsers: ["last 1 Chrome versions"]
                  }
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")]
  }
};
