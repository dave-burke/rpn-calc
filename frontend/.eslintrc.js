require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "standard-with-typescript",
    "plugin:vue/vue3-recommended",
    '@vue/eslint-config-typescript',
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    extraFileExtensions: [".vue"],
    ecmaVersion: 'latest',
  }
}
