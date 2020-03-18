module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'component-name-in-template-casing': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
    'prettier/prettier': ['error',{
        "endOfLine": "auto"
      },
    ],

    'import/prefer-default-export': 'off',

    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-shadow': ['error', { allow: ['state'] }],
    "no-param-reassign": 0,
    'no-undef': 'off',
    "no-unused-vars": ["error", {"args":"none"}]
    // 'no-param-reassign': [
    //   'error',
    //   {
    //     props: true,
    //     ignorePropertyModificationsFor: [
    //       'state',
    //       'acc',
    //       'e',
    //       'ctx',
    //       'context',
    //       'req',
    //       'request',
    //       'res',
    //       'response',
    //       '$scope',
    //     ],
    //   },
    // ],
    // "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false, "caughtErrors": "none" }]
  }
}
