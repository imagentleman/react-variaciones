import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";
import pkg from "./package.json";

process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

export default [
  {
    entry: "src/index.js",
    targets: [
      { dest: pkg.main, format: "cjs" },
      { dest: pkg.module, format: "es" }
    ],
    plugins: [
      resolve(),
      replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
      commonjs(),
      babel({
        presets: ["react-app"],
        exclude: ["node_modules/**"],
        plugins: ["external-helpers"]
      })
    ]
  },
  {
    entry: "src/index.js",
    moduleName: "query-builder",
    targets: [{ dest: pkg.browser, format: "umd" }],
    plugins: [
      resolve(),
      replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
      commonjs(),
      babel({
        presets: ["react-app"],
        exclude: ["node_modules/**"],
        plugins: ["external-helpers"]
      }),
      uglify()
    ]
  }
];
