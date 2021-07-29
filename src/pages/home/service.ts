/*
 * @Author: KeMull
 * @Date: 2021-07-28 16:21:39
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-28 16:47:12
 */
import request from '@/utils/request';
import { homeWikiParams } from './data.d';
export async function homeWiki(params: homeWikiParams) {
  return request('/home/v2/live/expert/live_list', {
    method: 'GET',
    params,
  });
}
