module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module", // 允许使用ES模块
    ecmaFeatures: {
      jsx: true, // 启用JSX
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "release.config.js"],
  plugins: ["react", "react-refresh"],
  rules: {
    "react/react-in-jsx-scope": "off", // React 17 以後不需要引入
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};
