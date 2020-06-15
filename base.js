module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb-base', 'prettier'],
  plugins: ['simple-import-sort'],
  rules: {
    'import/named': 'error',
    'import/namespace': 'error',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
  },
};
