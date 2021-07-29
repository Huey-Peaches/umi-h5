/*
 * @Author: KeMull
 * @Date: 2021-07-23 16:54:46
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-28 17:26:48
 */
import { extend } from 'umi-request';
import Env from './env';
const request = extend({
  prefix: Env.apiUrl,
  timeout: 1000,
});
// 异常码抛出操作
request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();
  if (data && data.NOT_LOGIN) {
    location.href = '登录url';
  }
  return response;
});

// 处理请求头
request.interceptors.request.use((url, options) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // token,
    // orgId,
    // devicecode,
  };
  return {
    url: `${url}`,
    options: { ...options, headers },
  };
});
export default request;
