module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
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
