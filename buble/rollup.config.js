import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import buble from "rollup-plugin-buble";
import postcss from "rollup-plugin-postcss";

export default [
  {
    entry: "src/index.js",
    moduleName: "query-builder",
    targets: [
      { dest: "dist/query-builder.umd.js", format: "umd" }
    ],
    plugins: [
      postcss({
        extensions: [".css"]
      }),
      resolve(),
      replace({ "process.env.NODE_ENV": JSON.stringify("development") }),
      commonjs(),
      buble({
        exclude: ["node_modules/**"]
      })
    ]
  }
];
