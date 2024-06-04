module.exports = {
  extends: ['@repo/eslint-config/base.js', 'plugin:react-hooks/recommended'],
  env: { browser: true, es2022: true },
  plugins: ['react-refresh'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  }
}