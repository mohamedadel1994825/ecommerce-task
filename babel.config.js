const plugins = [
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      root: ["./src"],
      alias: {
        tests: ["./tests/"],
        "@assets": ["./src/assets"],
        "@screens": ["./src/screens"],
        "@components": ["./src/components"],
        "@common": ["./src/common"],
        "@reactquery": ["./src/reactquery"],
        "@reactotron": ["./src/reactotron"],
        "@hooks": ["./src/hooks"],
        "@language": ["./src/language"],
        "@theme": ["./src/theme"],
        "@navigation": ["./src/navigation"],
        "@store": ["./src/store"],
        "@services": ["./src/services"],
        "@utils": ["./src/utils"],
        "@interfaces": ["./src/interfaces"],
        "@types": ["./src/types"],
      },
      extensions: [".js", ".jsx", ".es", ".es6", ".mjs", ".ts", ".tsx"],
    },
  ],
];
module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@babel/preset-typescript",
  ],
  plugins,
};
