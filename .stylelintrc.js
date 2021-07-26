/*
 * @Author: KeMull
 * @Date: 2021-07-26 16:55:58
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-26 17:03:32
 */
// @ts-ignore
const fabric = require('@umijs/fabric');
module.exports = {
  ...fabric.stylelint,
  rules: {
    'no-duplicate-selectors': null, //关闭 一个选择器样式只能在一个样式文件中出现一次的校验
    'no-descending-specificity': null, //关闭 不允许选择器之后覆盖选择器的低特异性更高的特异性
  },
};
