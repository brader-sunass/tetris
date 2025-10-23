import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { 
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      ...pluginReact.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
    },
  },
];
