module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended'],
  rules: {
    semi: ['error', 'never'],
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        trailingComma: 'none',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto'
      }
    ]
  }
}
