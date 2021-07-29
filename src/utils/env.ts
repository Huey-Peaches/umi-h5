/*
 * @Author: KeMull
 * @Date: 2021-07-23 16:44:00
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-28 16:29:07
 */
let apiUrl: string;

switch (process.env.MY_NODE_ENV) {
  case 'dev':
    apiUrl = 'https://cedu.langpedu.com';
    break;
  case 'test':
    apiUrl = '';
    break;
  case 'master':
    apiUrl = '';
    break;

  default:
    apiUrl = 'https://cedu.langpedu.com';
    break;
}

export default {
  apiUrl,
};
