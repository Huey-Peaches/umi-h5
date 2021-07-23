/*
 * @Author: KeMull
 * @Date: 2021-07-23 16:44:00
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-23 17:19:53
 */
let apiUrl: string = '';

switch (process.env.MY_NODE_ENV) {
  case 'dev':
    apiUrl = '';
    break;
  case 'test':
    apiUrl = '';
    break;
  case 'master':
    apiUrl = '';
    break;

  default:
    apiUrl = '';
    break;
}

export default {
  apiUrl,
};
