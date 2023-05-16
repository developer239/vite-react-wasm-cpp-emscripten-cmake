module.exports = {
  extends: [
    '@linters/eslint-config-react',
    '@linters/eslint-config-typescript',
    '@linters/eslint-config-jest',
    'prettier',
  ],
  rules: {
    'import/no-default-export': 1,
    'react/react-in-jsx-scope': 0
  }
}
