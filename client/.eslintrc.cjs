module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    // "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "prettier",
    // "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  //   parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  //   plugins: ["react-refresh", "@typescript-eslint", "react", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
