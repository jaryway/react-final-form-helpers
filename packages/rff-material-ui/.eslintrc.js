module.exports = {
  plugins: [
    'react-hooks',
  ],
  extends: ['react-app', "eslint:recommended"],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-var': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};