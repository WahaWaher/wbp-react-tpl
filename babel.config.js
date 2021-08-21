const { isDev } = require('./utils/mode');

module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
};
