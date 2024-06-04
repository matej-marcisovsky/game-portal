module.exports = {
  extends: ['@repo/eslint-config/base.js'],
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
  }
};
