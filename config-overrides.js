const { override, addWebpackResolve } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackResolve({
    alias: {
      '@': path.resolve(__dirname, './src'),

      // for .css
      images: path.resolve(__dirname, './src/assets'),
    },
    extensions: ['.js', '.jsx', '.css'],
  }),
);
