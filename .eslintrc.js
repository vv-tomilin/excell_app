module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'operator-linebreak': 'off',
    'linebreak-style': ['error', 'windows'],
    'require-jsdoc': 0,
    // 'valid-jsdoc': 'off',
    // 'eol-last': 'off',
    'indent': 'off',
  },
  extends: ['eslint:recommended', 'google'],
};
