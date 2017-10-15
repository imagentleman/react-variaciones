const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "query-builder.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
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
            ],
            plugins: ["transform-runtime", "transform-async-to-generator"]
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
