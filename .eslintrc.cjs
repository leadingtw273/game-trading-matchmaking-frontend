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
  ignorePatterns: ['public', "dist", ".eslintrc.cjs", "release.config.cjs"],
  plugins: ['react-refresh', 'simple-import-sort', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", // React 17 以後不需要引入
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    // 自动排序导入语句，配置分组优先级，提升代码组织性
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^@?\\w', '^react', '^antd', '^@ant'], ['@/'], ['^\\.']],
      },
    ],
  },
};
