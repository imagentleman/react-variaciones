import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import buble from "rollup-plugin-buble";
import postcss from "rollup-plugin-postcss";
import uglify from "rollup-plugin-uglify";
import cssnano from "cssnano";
import pkg from "./package.json";

export default [
  {
    entry: "src/index.js",
    targets: [
      { dest: pkg.main, format: "cjs" },
      { dest: pkg.module, format: "es" }
    ],
    plugins: [
      postcss({
        plugins: [cssnano()],
        extensions: [".css"]
      }),
      resolve(),
      replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
      commonjs(),
      buble({
        exclude: ["node_modules/**"]
      })
    ]
  },
  {
    entry: "src/index.js",
    moduleName: "query-builder",
    targets: [{ dest: pkg.browser, format: "umd" }],
    plugins: [
      postcss({
        plugins: [cssnano()],
        extensions: [".css"]
      }),
      resolve(),
      replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
      commonjs(),
      buble({
        exclude: ["node_modules/**"]
      }),
      uglify()
    ]
  }
];
