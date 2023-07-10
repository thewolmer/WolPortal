module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'next/core-web-vitals',
  ],
  plugins: ['react-hooks', 'prefer-arrow', '@typescript-eslint', 'import'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-destructuring': ['error'],
    'prefer-const': ['error'],
    'prefer-rest-params': ['error'],
    'import/newline-after-import': ['error'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          { pattern: '@element/**', group: 'internal' },
          { pattern: '@layout/**', group: 'internal' },
          { pattern: '@module/**', group: 'internal' },
          { pattern: '@template/**', group: 'internal' },
          { pattern: '@constant/**', group: 'internal' },
          { pattern: '@context/**', group: 'internal' },
          { pattern: '@hook/**', group: 'internal' },
          { pattern: '@util/**', group: 'internal' },
          { pattern: '@api/**', group: 'internal' },
          { pattern: '@type/**', group: 'internal', position: 'after' },
          { pattern: '@style/**', group: 'internal', position: 'after' },
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'react/prop-types': [2, { ignore: ['children'] }],
    'react/display-name': 'off',
    '@next/next/no-document-import-in-page': 'off',
    'react/jsx-no-target-blank': [
      'error',
      {
        allowReferrer: true,
        links: true,
        forms: false,
      },
    ],
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    react: {
      version: 'detect',
    },
  },
};
