module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-unused-vars": "warn",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.js",
          "**/*.spec.js",
          "**/seed.js",
          "**/prismaClient.js",
        ],
      },
    ],
    "no-underscore-dangle": 0,
  },
};
