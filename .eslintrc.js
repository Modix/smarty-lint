module.exports =  {
	parser:  '@typescript-eslint/parser',
	extends:  [
		'plugin:@typescript-eslint/recommended'
	],
	plugins: [
		'jsdoc',
		'no-only-tests'
	],
	parserOptions:  {
		ecmaVersion: 2018,
		sourceType: 'module',
		warnOnUnsupportedTypeScriptVersion: false
	},
	env: {
		node: true,
		es6: true
	},
	reportUnusedDisableDirectives: true,
	rules:  {
		// Faulty @typescript-eslint Rules (see https://github.com/typescript-eslint/typescript-eslint/issues/906)
		'@typescript-eslint/explicit-function-return-type': 'off',

		// Unused @typescript-eslint Rules
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'semi',
				requireLast: true
			},
			singleline: {
				delimiter: 'semi',
				requireLast: true
			}
		}],

		// eslint-plugin-jsdoc Rules
		'jsdoc/check-alignment': 'error',
        'jsdoc/check-examples': 'off', /* @todo need to be configured to allow text-based examples */
        'jsdoc/check-indentation': 'error',
        'jsdoc/check-param-names': 'error',
        'jsdoc/check-syntax': 'error',
        'jsdoc/check-tag-names': 'error',
        'jsdoc/check-types': 'error',
        'jsdoc/implements-on-classes': 'error',
        'jsdoc/match-description': 'off', /* @todo Activate later */
        'jsdoc/newline-after-description': 'error',
        'jsdoc/no-types': 'off',
        'jsdoc/no-undefined-types': ['error', { definedTypes: ['never', 'false', 'Partial'] }],
        'jsdoc/require-description-complete-sentence': 'off', /* @todo Activate later */
        'jsdoc/require-description': 'off', /* @todo Activate later */
        'jsdoc/require-example': 'off',
        'jsdoc/require-hyphen-before-param-description': 'error',
        'jsdoc/require-jsdoc': 'error',
        'jsdoc/require-param-description': 'off', /* @todo Activate later */
        'jsdoc/require-param-name': 'error',
        'jsdoc/require-param-type': 'error',
        'jsdoc/require-param': 'error',
        'jsdoc/require-returns-check': 'error',
        'jsdoc/require-returns-description': 'off', /* @todo Activate later */
        'jsdoc/require-returns-type': 'error',
        'jsdoc/require-returns': ['error', { forceReturnsWithAsync: true }],
        'jsdoc/valid-types': 'off', /* Checked by TypeScript */

		// Possible Errors
		'for-direction': 'error',
		'getter-return': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-console': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'off',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-parens': 'off', /* @todo There should be a option to enforce parens for IIFs */
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-misleading-character-class': 'error',
		'no-obj-calls': 'error',
		'no-prototype-builtins': 'error',
		'no-regex-spaces': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'require-atomic-updates': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',

		// Best Practices
		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'error',
		'complexity': ['off', 50], /* @todo Decrease */
		'consistent-return': 'error',
		'curly': 'error',
		'default-case': 'error',
		'default-param-last': 'error',
		'dot-location': ['error', 'property'],
		'dot-notation': 'error',
		'eqeqeq': 'error',
		'guard-for-in': 'error',
		'max-classes-per-file': 'error',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-div-regex': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'error',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': ['error', { ignore: [-3, -2, -1, 0, 1, 2, 3, 4, 10, 16] }],
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-restricted-properties': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'error',
		'no-with': 'error',
		'prefer-named-capture-group': 'off', /* @todo activate later */
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		'radix': 'error',
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		'vars-on-top': 'error',
		'wrap-iife': 'error',
		'yoda': 'error',

		// Strict Mode
		'strict': 'error',

		// Variables
		'init-declarations': 'off',
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-restricted-globals': 'error',
		'no-shadow': 'error',
		'no-shadow-restricted-names': 'error',
		'no-undef': 'off', // @todo: should be catched by TypeScript. How to do that?
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-unused-vars': 'error',
		'no-use-before-define': ['error', 'nofunc'],

		// Node.js and CommonJS
		'callback-return': 'error',
		'global-require': 'error',
		'handle-callback-err': 'error',
		'no-buffer-constructor': 'error',
		'no-mixed-requires': 'error',
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-process-env': 'off',
		'no-process-exit': 'error',
		'no-restricted-modules': 'error',
		'no-sync': 'error',

		// Stylistic Issues
		'array-bracket-newline': 'error',
		'array-bracket-spacing': 'error',
		'array-element-newline': ['error', 'consistent'],
		'block-spacing': 'error',
		'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'camelcase': 'error',
		'capitalized-comments': 'error',
		'comma-dangle': ['error', 'never'],
		'comma-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'consistent-this': 'error',
		'eol-last': 'error',
		'func-call-spacing': 'error',
		'func-name-matching': 'error',
		'func-names': 'error',
		'func-style': ['error', 'declaration'],
		'function-call-argument-newline': 'off', /* Multiple multi-line object arguments are not allowed, so this option is not usable right now */
		'function-paren-newline': ['error', 'multiline'],
		'id-blacklist': 'error',
		'id-length': ['off', { exceptions: ['i', 'x', 'y', 'z'] }],
		'id-match': 'error',
		'implicit-arrow-linebreak': 'error',
		'indent': ['error', 'tab', { SwitchCase: 1, VariableDeclarator: 1, MemberExpression: 1 }],
		'jsx-quotes': 'error',
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'line-comment-position': 'error',
		'linebreak-style': 'error',
		'lines-around-comment': ['off', { // @todo there are still types of blocks where they should be allowed, but thes types are not catched by allow*Start (e.g. in interfaces).
			beforeBlockComment: true,
			beforeLineComment: true,
			allowBlockStart: true,
			allowObjectStart: true,
			allowArrayStart: true,
			allowClassStart: true
		}],
		'lines-between-class-members': 'error',
		'max-depth': 'error',
		'max-len': ['error', { code: 260 }],
		'max-lines': ['error', { max: 1000, skipBlankLines: true, skipComments: true }], /* @todo Decrease to 300 */
		'max-lines-per-function': ['error', { max: 200, skipBlankLines: true, skipComments: true }], /* @todo Decrease to 50 */
		'max-nested-callbacks': 'error',
		'max-params': ['error', { max: 4 }],
		'max-statements': ['error', 100, { ignoreTopLevelFunctions: true }], /* @todo Decrease to 20 */
		'max-statements-per-line': ['error', { max: 3 }],
		'multiline-comment-style': 'off', // doesn't work together with "// @ts-ignore"
		'multiline-ternary': ['error', 'always-multiline'],
		'new-cap': 'error',
		'new-parens': 'error',
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'error',
		'no-inline-comments': 'off', /* @todo JSDoc inline comments must be allowed */
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'off',
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
		'no-plusplus': 'off',
		'no-restricted-syntax': 'error',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-ternary': 'off',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': 'error',
		'object-curly-newline': 'error',
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
		'one-var': 'off', // @todo ['error', { initialized: 'never', uninitialized: 'always' }],
		'one-var-declaration-per-line': 'error',
		'operator-assignment': 'error',
		'operator-linebreak': 'error',
		'padded-blocks': ['error', 'never'],
		'padding-line-between-statements': 'error',
		'prefer-object-spread': 'error',
		'quote-props': ['error', 'consistent-as-needed'],
		'quotes': ['error', 'single'],
		'semi': 'error',
		'semi-spacing': 'error',
		'semi-style': 'error',
		'sort-keys': 'off',
		'sort-vars': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': 'error',
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': ['error', 'always', { markers: ['/'], block: { markers: ['!'], balanced: true } }], // @todo: Remove '/' as soon as we use import instead of require()
		'switch-colon-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': 'error',
		'wrap-regex': 'error',

		// ECMAScript 6
		'arrow-body-style': 'error',
		'arrow-parens': 'error',
		'arrow-spacing': 'error',
		'constructor-super': 'error',
		'generator-star-spacing': 'error',
		'no-class-assign': 'error',
		'no-confusing-arrow': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'error',
		'no-new-symbol': 'error',
		'no-restricted-imports': 'error',
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': 'off',
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': 'error',
		'sort-imports': 'error',
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': 'error'
	}
};
