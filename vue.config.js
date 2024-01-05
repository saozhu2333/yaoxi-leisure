"use strict";
const path = require("path");
 
function resolve(dir) {
  return path.join(__dirname, dir);
}
 
const name = "耀西";
 
module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  // transpileDependencies:['@dcloudio/uni-ui'],
  // 路径别名
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("/"),
      },
    },
  },
};
