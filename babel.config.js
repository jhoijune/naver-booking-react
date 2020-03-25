module.exports = (api) => {
  const setting = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
  };
  if (api.env('production')) {
    return setting;
  }
  setting.plugins = ['react-hot-loader/babel', '@babel/transform-runtime'];
  return setting;
};
