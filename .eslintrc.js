module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'google'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
		"indent": [2,4]
    }
}