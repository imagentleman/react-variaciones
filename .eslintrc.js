module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  rules: {
    "func-names": 0
  }
};
