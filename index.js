import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import EslintReact from 'eslint-plugin-react';

import tsParser from '@typescript-eslint/parser';

import globals from 'globals';

const { plugins, parserOptions, ...reactRecommended } = EslintReact.configs.recommended;

/**
 * Basic setup
 */
const Eslint = [
  /* Base */
  js.configs.recommended,

  /**
   * Base
   */
  {
    rules: {
      'array-callback-return': ['error', { allowImplicit: true, checkForEach: true, allowVoid: true }],
      'no-duplicate-imports': 'error',
      'camelcase': 'error',
      'capitalized-comments': 'error',
      'complexity': ['error', 4],
      'consistent-return': 'error',
      'curly': 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'eqeqeq': 'error',
      'max-params': ['error', 6],
      'no-console': 'error',
      'no-else-return': 'error',
      'no-extend-native': 'error',
      'no-inline-comments': 'error',
      'no-lonely-if': 'error',
      'no-magic-numbers': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-plusplus': 'error',
      'no-return-assign': 'error',
      'no-shadow': 'error',
      'no-undefined': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'prefer-rest-params': 'error',
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false,
        },
      ],
    },
  },

  /* TypeScript */
  ...tseslint.config(
    ...tseslint.configs.recommended,
    {
      languageOptions: {
        parserOptions: {
          project: true,
          tsconfigDirName: import.meta.dirname,
          useJSXTextNode: true,
          jsx: true,
        },
      },
    },

    {
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/method-signature-style': 'error',
        // "@typescript-eslint/naming-convention": "error"
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-meaningless-void-operator': 'error',
        '@typescript-eslint/no-mixed-enums': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-template-expression': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-find': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
      },
    },
    {
      files: ['**/*.js'],
      extends: [tseslint.configs.disableTypeChecked],
    },
  ),

  /* React */
  // {
  //   files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  //   plugins: {
  //     react: EslintReact,
  //   },
  //   languageOptions: {
  //     parserOptions: parserOptions,
  //     globals: {
  //       ...globals.serviceworker,
  //       ...globals.browser,
  //     },
  //   },
  //
  //   ...reactRecommended,
  // },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactRecommended,
    plugins: {
      react: EslintReact,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      'react/boolean-prop-naming': ['error', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
      'react/button-has-type': ['error'],
      'react/checked-requires-onchange-or-readonly': ['error'],
      'react/destructuring-assignment': ['error', 'always'],
      'react/hook-use-state': ['error'],
      // react/jsx-boolean-value
      'react/jsx-closing-bracket-location': ['error'],
      'react/jsx-closing-tag-location': ['error'],
      'react/jsx-curly-newline': ['error'],
      'react/jsx-curly-spacing': ['error', 'always'],
      'react/jsx-equals-spacing': ['error', 'always'],
      'react/jsx-handler-names': ['error'],
      'react/jsx-key': ['error'],
      'react/jsx-no-leaked-render': ['error'],
      'react/jsx-no-literals': ['error'],
      'react/jsx-no-useless-fragment': ['error'],
      'react/jsx-one-expression-per-line': ['error'],
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: false,
          allowLeadingUnderscore: false,
          allowNamespace: false,
        },
      ],
      'react/jsx-props-no-multi-spaces': ['error'],
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandLast: true,
          reservedFirst: ['id', 'key', 'children', 'dangerouslySetInnerHtml', 'name'],
        },
      ],
      'react/jsx-uses-react': [0],
      'react/jsx-wrap-multilines': ['error'],
      'react/no-array-index-key': ['error'],
      'react/no-multi-comp': ['error'],
      'react/self-closing-comp': ['error'],
    },
  },
  eslintConfigPrettier,
];

export default Eslint;
