module.exports = {
  presets: ['mobx', 'module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.ios.ts', '.android.ts'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@models': './src/models',
          '@configuration': './src/configuration',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@services': './src/services',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
}