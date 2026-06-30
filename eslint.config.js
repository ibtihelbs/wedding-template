import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Global ignores must be in their own separate object
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    // Safely inject and spread the recommended hooks rules
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    languageOptions: {
      ecmaVersion: "latest", // <-- ADD THIS TO ENABLE MODERN JS PARSING
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
];
