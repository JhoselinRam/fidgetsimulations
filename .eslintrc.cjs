module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "standard-with-typescript",
    "prettier"
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite-env.d.ts",
    "postcss.config.js"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"]
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ]
  },
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["tailwind.config.js"]
    }
  ]
}
