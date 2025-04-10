import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        ignores: ["**/node_modules/**"]
    },
    {
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            "react": pluginReact,
            "react-hooks": pluginReactHooks,
            "import": pluginImport,
            "i18n": i18n
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/no-deprecated": "off",
            "react/prop-types": "error",
            "react/self-closing-comp": "error",
            "@typescript-eslint/consistent-type-imports": "error",
            "indent": ['error', 4],
            "semi": ['error', 'always'],
            "comma-dangle": "error",
            "no-unused-vars": "warn",
            "no-console": "warn",
            "no-debugger": "warn",
            "no-dupe-keys": "warn",
            "no-empty": "error",
            "no-extra-boolean-cast": "warn",
            "eqeqeq": "error",
            "no-else-return": "warn",
            "no-return-assign": "error",
            "no-sequences": "warn",
            "no-throw-literal": "error",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-unused-expressions": "warn",
            "@typescript-eslint/consistent-type-assertions": "warn",
            "@typescript-eslint/no-empty-interface": "warn",
            "import/named": "error",
            "import/default": "error",
            "import/namespace": "error",
            "import/export": "error",
            'react/display-name': 'warn'
        }
    }
];