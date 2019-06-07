module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "Handlebars": "readonly",
        "google": "readonly",
        "allFeeds": "readonly",
        "spyOnEvent": "readonly",
        "loadFeed": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "camelcase": ["error"],
        "comma-dangle": ["error", "never"],
        "no-trailing-spaces": ["error", { "skipBlankLines": true }],
        "no-unused-vars": ["error", { "args": "none" }]
    },
};