module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'require-jsdoc': 0,
    'indent': 'off',
  },
  extends: ['eslint:recommended', 'google'],
};
