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
      os: false,
      dns: require.resolve('dns'),
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      assert: require.resolve('assert/'),
      timers: require.resolve("timers-browserify"),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify'),
      https: require.resolve('https-browserify'),
      path: false,
    },
  },
};
