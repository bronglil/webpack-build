import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser, // For browser globals like window, document
        ...globals.node, // For node.js globals like process, require
        jest: true, // Jest globals
        describe: true, // Explicitly declare Jest globals if needed
        test: true,
        expect: true,
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
