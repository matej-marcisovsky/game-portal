import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  // We need to redefine language parser options for Nest.js decorators and DI
  {
    files: ['**/*.tsx', '**/*.ts', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parserOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
      },
    },
  },
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    },
  },
];
