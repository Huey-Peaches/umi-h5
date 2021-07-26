/*
 * @Author: KeMull
 * @Date: 2021-07-26 16:50:59
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-26 17:02:42
 */
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'no-console': 'off', //关闭禁止使用console
    'jsx-a11y/alt-text': 'off', //禁用掉img必须写alt
  },
};
