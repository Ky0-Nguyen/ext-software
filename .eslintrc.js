module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      alias: {
        map: [
          ['@assets/*', './src/assets/*'],
          ['@components/*', './src/components/*'],
          ['@models/*', './src/models/*'],
          ['@constants/*', './src/constants/*'],
          ['@utils/*', './src/utils/*'],
          ['@configuration/*', './src/configuration/*'],
          ['@screens/*', './src/screens/*'],
          ['@services/*', './src/services/*'],
          ['@stores/*', './src/stores/*'],
        ],
        extensions: ['.ts', '.js', '.tsx', '.json'],
      },
    },
  },
};