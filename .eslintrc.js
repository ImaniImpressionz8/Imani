module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:security/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'security',
        '@typescript-eslint',
        'import',
        'simple-import-sort',
        'sort-destructure-keys',
        'prettier'
    ],
    rules: {
        'no-console': 'error',
        'no-unused-vars': 'warn',
        'func-names': 'off',
        'import/order': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'sort-destructure-keys/sort-destructure-keys': 2,
        'no-underscore-dangle': 'off',
        'consistent-return': 'off',
        'jest/expect-expect': 'off',
        'security/detect-object-injection': 'off',
        'import/no-extraneous-dependencies': 'off',
        'prettier/prettier': 'error'
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.ts']
            }
        }
    }
};
