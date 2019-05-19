/**
 * @Author: harsha
 * @Date:   2019-05-17T01:37:51+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-18T03:48:16+05:30
 */

const merge = require("webpack-merge");
const base = require("./webpack.base.js");

module.exports = merge(base, {
  mode: "production"
});
