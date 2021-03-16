module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },

    extends: [ 'airbnb-base', 'plugin:chai-friendly/recommended' ],

    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },

    ignorePatterns: [ 'dist/' ],

    rules: {
    /*
     * AirBnB JS rule overrides.
     */

        // Enforce consistent indentation.
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                // Fix issue with `Cannot read property 'range' of null` errors. Please see
                //   https://stackoverflow.com/questions/48391913/eslint-error-cannot-read-property-range-of-null
                //   for more information.
                ignoredNodes: [ 'TemplateLiteral' ],
            },
        ],

        // Fix issue with `Cannot read property 'range' of null` errors. Please see
        //   https://stackoverflow.com/questions/48391913/eslint-error-cannot-read-property-range-of-null
        //   for more information.
        'template-curly-spacing': 'off',

        // Allow unnecessarily quoted properties.
        'quote-props': 'off',

        // Allow dangling underscores to indicate private methods (like _internalMethod()).
        'no-underscore-dangle': 'off',

        // Enforce a maximum line length.
        'max-len': [ 'error', { code: 120 } ],

        // Don't try to resolve the dependencies.
        'import/no-unresolved': 'off',

        // Allow for missing file extensions in import statements.
        'import/extensions': 'off',

        // Allow for dependencies to not be in project configuration.
        'import/no-extraneous-dependencies': 'off',

        // Require a space before function parenthesis.
        'space-before-function-paren': [ 'error', 'always' ],

        // Require "Stroustrup" brace style.
        'brace-style': [ 'error', 'stroustrup' ],

        // Enforce spaces inside of brackets.
        'array-bracket-spacing': [ 'error', 'always' ],

        // Do not enforce that class methods utilize this.
        'class-methods-use-this': 'off',

        // Allow the unary operators ++ and --.
        'no-plusplus': 'off',

        // Allow Reassignment of Function Parameters.
        'no-param-reassign': 'off',

        // Allow usage of continue statement.
        'no-continue': 'off',

        // Enforce consistent line breaks inside function parentheses.
        'function-paren-newline': [ 'error', 'consistent' ],

        // Ignore trailing commas in the imports, exports and functions, but require it in arrays and object
        //   definitions.
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'ignore',
                exports: 'ignore',
                functions: 'ignore',
            },
        ],

        // Do not force the use of the object spread just yet (target ES2018).
        'prefer-object-spread': 'off',

        // Do not force parentheses on arrow functions with single arguments.
        'arrow-parens': 'off',

        // Allow require() calls with expressions (dynamic imports).
        'import/no-dynamic-require': 'off',

        // Disable newline requirement for object curly syntax.
        'object-curly-newline': 'off',

        // Allow usage of console.
        'no-console': 'off',
    },
};
