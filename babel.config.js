const plugins = [
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      root: ["./src"],
      alias: {
        "@interfaces": "./src/interfaces",
        "@styles": "./src/styles",
        "@screens": "./src/screens",
        "@routers": "./src/routers",
        "@utils": "./src/utils",
        "@i18n": "./src/i18n",
        "@hooks": "./src/hooks",
        "@components": "./src/components",
      },
      extensions: [".js", ".jsx", ".es", ".es6", ".mjs", ".ts", ".tsx"],
    },
  ],
];
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins,
};
