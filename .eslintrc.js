module.exports = {
	env: {
		browser: false,
		es6: true,
		node: true,
		mocha: true,
		"jest/globals": true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:jest/recommended",
	],
	globals: {
		wp: true,
		wpApiSettings: true,
		window: true,
		document: true,
		fetch: false,
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: [
		"react",
		"jsx-a11y",
		"jest",
	],
	settings: {
		react: {
			pragma: "wp",
			version: "detect",
		},
	},
	rules: {
		"array-bracket-spacing": [
			"error",
			"always",
		],
		"arrow-spacing": [
			"error",
			{
				before: true,
				after: true,
			},
		],
		"brace-style": [
			"error",
			"1tbs",
		],
		camelcase: [
			"error",
			{
				properties: "never",
			},
		],
		"comma-dangle": [
			"error",
			"always-multiline",
		],
		"comma-spacing": "error",
		"comma-style": "error",
		"computed-property-spacing": [
			"error",
			"always",
		],
		"constructor-super": "error",
		"dot-notation": [
			"error",
			{
				allowKeywords: true,
			},
		],
		"eol-last": "error",
		eqeqeq: "error",
		"func-call-spacing": "error",
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		"key-spacing": "error",
		"keyword-spacing": "error",
		"lines-around-comment": "off",
		"no-alert": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-console": [
			"error",
			{
				allow: [
					"warn",
					"error",
				],
			},
		],
		"no-const-assign": "error",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "error",
		"no-eval": "error",
		"no-extra-semi": "error",
		"no-extra-boolean-cast": "off",
		"no-fallthrough": "error",
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "off",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
				maxBOF: 0,
				maxEOF: 1,
			},
		],
		"no-negated-in-lhs": "error",
		"no-nested-ternary": "off",
		"no-redeclare": "error",
		"no-restricted-syntax": [
			"error",
			{
				selector: "ImportDeclaration[source.value=/^@wordpress\\u002F.+\\u002F/]",
				message: "Path access on WordPress dependencies is not allowed.",
			},
			{
				selector: "ImportDeclaration[source.value=/^blocks$/]",
				message: "Use @wordpress/blocks as import path instead.",
			},
			{
				selector: "ImportDeclaration[source.value=/^components$/]",
				message: "Use @wordpress/components as import path instead.",
			},
			{
				selector: "ImportDeclaration[source.value=/^date$/]",
				message: "Use @wordpress/date as import path instead.",
			},
			{
				selector: "ImportDeclaration[source.value=/^editor$/]",
				message: "Use @wordpress/editor as import path instead.",
			},
			{
				selector: "ImportDeclaration[source.value=/^element$/]",
				message: "Use @wordpress/element as import path instead.",
			},
			{
				selector: "ImportDeclaration[source.value=/^i18n$/]",
				message: "Use @wordpress/i18n as import path instead.",
			},
			{
				selector: "ImportDeclaration[source.value=/^data$/]",
				message: "Use @wordpress/data as import path instead.",
			},
			{
				selector: "ImportDeclaration[source.value=/^utils$/]",
				message: "Use @wordpress/utils as import path instead.",
			},
			{
				selector: "CallExpression[callee.name=/^__|_n|_x$/]:not([arguments.0.type=/^Literal|BinaryExpression$/])",
				message: "Translate function arguments must be string literals.",
			},
			{
				selector: "CallExpression[callee.name=/^_n|_x$/]:not([arguments.1.type=/^Literal|BinaryExpression$/])",
				message: "Translate function arguments must be string literals.",
			},
			{
				selector: "CallExpression[callee.name=_nx]:not([arguments.2.type=/^Literal|BinaryExpression$/])",
				message: "Translate function arguments must be string literals.",
			},
		],
		"no-shadow": "error",
		"no-undef": "error",
		"no-undef-init": "error",
		"no-unreachable": "error",
		"no-unsafe-negation": "error",
		"no-unused-expressions": "error",
		"no-unused-vars": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-whitespace-before-property": "error",
		"object-curly-spacing": [
			"error",
			"always",
		],
		"prefer-const": "error",
		"quote-props": [
			"error",
			"as-needed",
		],
		"react/display-name": "off",
		"react/jsx-curly-spacing": [
			"error",
			{
				when: "always",
				children: true,
			},
		],
		"react/jsx-equals-spacing": "error",
		"react/jsx-indent": [
			"error",
			"tab",
		],
		"react/jsx-indent-props": [
			"error",
			"tab",
		],
		"react/jsx-key": "error",
		"react/jsx-tag-spacing": "error",
		"react/no-children-prop": "off",
		"react/no-find-dom-node": "warn",
		"react/prop-types": "off",
		semi: [
			"error",
			"never",
		],
		"semi-spacing": "error",
		"space-before-blocks": [
			"error",
			"always",
		],
		"space-before-function-paren": [
			"error",
			{
				anonymous: "always",
				named: "never",
				asyncArrow: "always",
			},
		],
		"space-in-parens": [
			"error",
			"always",
		],
		"space-infix-ops": [
			"error",
			{
				int32Hint: false,
			},
		],
		"space-unary-ops": [
			"error",
			{
				overrides: {
					"!": true,
				},
			},
		],
		"template-curly-spacing": [
			"error",
			"always",
		],
		"valid-jsdoc": [
			"error",
			{
				requireReturn: false,
			},
		],
		"valid-typeof": "error",
		yoda: "off",
	},
}
