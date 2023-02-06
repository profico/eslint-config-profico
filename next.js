module.exports = {
  extends: ['next/core-web-vitals', '@profi.co/react'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.{ts,tsx,js,jsx}', 'next.config.{js,ts}'],
      },
    ],
  },
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true,
  },
};
