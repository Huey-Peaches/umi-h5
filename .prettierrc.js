/*
 * @Author: KeMull
 * @Date: 2021-07-26 16:51:22
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-26 17:44:26
 */
// @ts-ignore
const fabric = require('@umijs/fabric');
module.exports = {
  ...fabric.prettier,
  rules: {
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 80,
    overrides: [
      {
        files: '.prettierrc',
        options: { parser: 'json' },
      },
    ],
  },
};
