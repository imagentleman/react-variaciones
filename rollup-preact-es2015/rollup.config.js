import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

export default [
  {
    entry: "src/index.js",
    moduleName: "query-builder",
    targets: [{ dest: "dist/query-builder.umd.js", format: "umd" }],
    plugins: [
      postcss({
        extensions: [".css"]
      }),
      resolve(),
      replace({ "process.env.NODE_ENV": JSON.stringify("development") }),
      commonjs(),
      babel({
        presets: ["react-app"],
        exclude: ["node_modules/**"],
        plugins: ["external-helpers", ["transform-react-jsx", { pragma: "h" }]]
      })
    ]
  }
];
