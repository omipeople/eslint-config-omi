export default {
  "extends": "eslint-config-semistandard",

  "plugins": [ "react" ],

  "ecmaFeatures": {
    "jsx": true
  },

  "parser": "babel-eslint",

  "rules": {
    "indent": [2, "tab"],
    "strict": [2, "function"],
    "space-before-function-paren": [2, "never"],
    "react/jsx-uses-react": 1
  }
}
