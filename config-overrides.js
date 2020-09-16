const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");
const path = require('path');

module.exports = override(
  // fixBabelImports("import", {
  //   libraryName: "antd",
  //   libraryDirectory: "es",
  //   style: true,
  // }),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: theme,
  // }),
  addWebpackAlias({
    ["@components"]: path.resolve(__dirname, "./src/components"),
    ["@assets"]: path.resolve(__dirname, "./src/assets"),
    ["@api"]: path.resolve(__dirname, "./src/api"),
  })
);

