module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: {
    'airbnb',
    'prettier',
    'prettier/react'
  }
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: 'babel/eslint',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugin: {
    'react',
    'prettier',
    'react-hooks'
  }
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-dops': 'warn'
  },
};
