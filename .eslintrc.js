module.exports = {
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    "airbnb-typescript/base",
    "plugin:prettier/recommended"
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {}
};