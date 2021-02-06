module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "jsx-ally", "import"],
	rules: {
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".jsx", ".js"],
			},
		],
		"global-require": "off",
		"import/prefer-default-export": "off",
		"no-unused-expressions": ["error", { allowTaggedTemplates: true }],
	},
};
