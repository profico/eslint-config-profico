module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@profi.co/recommended',
  ],
  rules: {
    'import/named': 'error',
    'import/namespace': 'error',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'sort-imports': 'off',
  },
};
