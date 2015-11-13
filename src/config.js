export default {
  "extends": "eslint-config-semistandard",

  "plugins": [ "react" ],

  "ecmaFeatures": {
    "jsx": true
  },

  "rules": {
    "indent": [2, "tab"],
    "strict": [2, "function"],
    "space-before-function-paren": [2, "never"],
    "react/jsx-uses-react": 1
  }
}
