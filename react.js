module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', '@profi.co/recommended'],
  plugins: ['react-hooks'],
  settings: {
    react: {
      version: 'detect',
      pragma: 'React',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  globals: {
    NodeJS: 'readonly',
    React: 'readonly',
    JSX: 'readonly',
  },
  rules: {
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/mouse-events-have-key-events': ['off'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react-hooks/rules-of-hooks': ['error'],
    'react/function-component-definition': ['off'],
    'react/jsx-curly-newline': ['off'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-wrap-multilines': ['off'],
    'react/prop-types': ['off'],
    'react/sort-comp': ['off'],
    'react/state-in-constructor': ['off'],
    'react/static-property-placement': ['off'],
  },
};
