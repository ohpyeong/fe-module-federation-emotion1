const { dependencies } = require('./package.json');

module.exports = {
  name: 'emotion1',
  remotes: {
    emotion2:
      'emotion2@http://localhost:5002/remoteEntry.js',
  },
  exposes: {
    './Button': './src/Button',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      eager: true,
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
