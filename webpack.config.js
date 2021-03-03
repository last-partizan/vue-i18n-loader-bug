const path = require("path");

module.exports = function (env, argv={}) {
  return {
    mode: "development",
    target: "node",
    entry: "./src/main.js",
    module: {
      rules: [
        {
          test: /\.(json5?|ya?ml)$/, // target json, json5, yaml and yml files
          type: "javascript/auto",
          loader: "@intlify/vue-i18n-loader",
        },
      ],
    },
  }
}
