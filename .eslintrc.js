module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/function-component-definition": [
      0,
      {
        namedComponents: "function-expression",
        unnamedComponents: "function-expression",
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/label-has-associated-control": 0,
  },
};
