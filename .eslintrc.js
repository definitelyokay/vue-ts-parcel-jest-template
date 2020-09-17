module.exports = {
	env: {
		es6: true,
		node: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "jsdoc", "import", "unicorn"],
	extends: [
		// "plugin:jsdoc/recommended", // enable for oppression
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
	],
	rules: {
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": "error",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				accessibility: "explicit",
				overrides: {
					constructors: "off",
				},
			},
		],
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/member-delimiter-style": [
			"off",
			{
				multiline: {
					delimiter: "none",
					requireLast: true,
				},
				singleline: {
					delimiter: "semi",
					requireLast: false,
				},
			},
		],
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/quotes": "off",
		"@typescript-eslint/semi": ["off", null],
		"@typescript-eslint/triple-slash-reference": "error",
		"@typescript-eslint/type-annotation-spacing": "off",
		"@typescript-eslint/unified-signatures": "off",
		"arrow-body-style": "error",
		"arrow-parens": ["off", "as-needed"],
		camelcase: "off",
		"comma-dangle": "off",
		complexity: "off",
		"constructor-super": "error",
		curly: ["error", "multi-line"],
		"dot-notation": "error",
		"eol-last": "off",
		eqeqeq: ["error", "smart"],
		"guard-for-in": "error",
		"id-blacklist": "off",
		"id-match": "off",
		"import/no-extraneous-dependencies": "error",
		"import/no-internal-modules": "error",
		"import/order": "error",
		"linebreak-style": "off",
		"max-classes-per-file": "off",
		"max-len": "off",
		"new-parens": "off",
		"newline-per-chained-call": "off",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-cond-assign": "error",
		"no-console": "off",
		"no-debugger": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-empty": "off",
		"no-eval": "error",
		"no-extra-bind": "error",
		"no-extra-semi": "off",
		"no-fallthrough": "error",
		"no-invalid-this": "off",
		"no-irregular-whitespace": "off",
		"no-multiple-empty-lines": "off",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-redeclare": "error",
		"no-return-await": "error",
		"no-sequences": "error",
		"no-shadow": [
			"off",
			{
				hoist: "all",
			},
		],
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "off",
		"no-undef-init": "error",
		"no-underscore-dangle": "off",
		"no-unsafe-finally": "error",
		"no-unused-expressions": "off",
		"no-unused-labels": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"one-var": ["off", "never"],
		"prefer-const": "error",
		"prefer-object-spread": "error",
		"quote-props": "off",
		radix: "off",
		"space-before-function-paren": "off",
		"space-in-parens": ["off", "never"],
		"spaced-comment": "error",
		"unicorn/filename-case": "error",
		"use-isnan": "error",
		"valid-typeof": "off",
	},
};