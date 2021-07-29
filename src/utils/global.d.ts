/*
 * @Author: KeMull
 * @Date: 2021-07-28 16:32:24
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-28 17:53:07
 */
import { History, Dispatch } from 'umi';

// Page Params
export interface PagesParams {
  dispatch: Dispatch;
  loading: boolean;
  history: History;
}

// Request Params
// 分页
export interface PaginationParams {
  pageSize: number;
  currentPage: number;
}

// Response Params
// 分页
export interface ListDataPagination {
  total: number;
  pageSize: number;
  current: number;
}
// 列表
export interface ListDataParams<T> {
  list: T[];
  pagination: Partial<ListDataPagination> | false;
}
