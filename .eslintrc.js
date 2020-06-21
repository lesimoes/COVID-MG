/* eslint-disable no-dupe-keys */
module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['prettier'],
  rules: {
    semi: [0, 'never'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'space-before-function-paren': [2, 'always'],
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'function-paren-newline': ['error', 'multiline'],
    'class-methods-use-this': 'off',
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};
