const { override, addWebpackResolve } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackResolve({
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@api": path.resolve(__dirname, "./src/api"),

      // for .css
      images: path.resolve(__dirname, "./src/assets"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
  })
);
