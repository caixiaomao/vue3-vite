module.exports = {
  parser: 'vue-eslint-parser',
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/no-deprecated-slot-attribute": "off",
    "vue/no-deprecated-slot-scope-attribute": "off"
  },
};
