module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "class-property"
  ],
  rules: {
    "semi": ["error", "always"],
    "class-property/class-property-semicolon": ["error", "always"],
    "arrow-parens": ["error", "as-needed"],
    "no-unused-vars": ["error", { "varsIgnorePattern": "app" }],
    "import/extensions": ["error", { "ts": "never", "tsx": "never" }]
  },
};
