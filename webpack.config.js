const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      dgram: false,
      fs: false,
      os: require.resolve('os-browserify/browser'),
      dns: require.resolve('dns'),
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      assert: require.resolve('assert/'),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify'),
      https: require.resolve('https-browserify'),
      path: require.resolve('path-browserify'),
    },
  },
};
