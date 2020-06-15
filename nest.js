module.exports = {
  extends: 'eslint-config-profico/base',
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^[A-Z].*',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*spec.ts'],
      env: {
        jest: true,
      },
    },
  ],
};
