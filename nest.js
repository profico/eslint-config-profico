module.exports = {
  extends: ['@profi.co/recommended'],
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
  env: {
    node: true,
    es6: true,
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
