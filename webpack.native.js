var path = require('path');

module.exports = {
  entry: {
    './native/index': './src/index.js',
  },
  output: {
    library: 'scformschema',
    libraryTarget: 'umd',
    filename: '[name].js',
  },
  resolve: {
    alias: {
      slider: './slider.native',
      counter: './counter.native',
      photo: './photo.native',
      text: './text.native',
      SCForm: './SCForm.native',
    },
  },
  externals: {
    react: 'react',
    'react-native': 'react-native',
    'react-native-image-picker': 'react-native-image-picker',
    'react-native-button': 'react-native-button',
    'react-native-image-picker': 'react-native-image-picker',
    'tcomb-form-native': 'tcomb-form-native',
    'tcomb-json-schema': 'tcomb-json-schema',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
      },
    ],
  },
};
