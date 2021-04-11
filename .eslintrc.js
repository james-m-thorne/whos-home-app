module.exports = {
    root: true,
    extends: '@react-native-community',
    plugins: ['import'],
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          alias: {
            _assets: './src/assets',
            _components: './src/components',
            _styles: './src/styles',
            _utils: './src/utils',
          },
        },
      },
    },
    rules: {
        indent: ["error", 2],
        quotes: ["error", "single"],
        semi: ["error", "never"],
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    }
  };