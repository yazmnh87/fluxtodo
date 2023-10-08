module.exports = {
  root: true,
  extends: ['@react-native',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    semi: 0,
    'prettier/prettier': ['error', {semi: false}],
  },
}
