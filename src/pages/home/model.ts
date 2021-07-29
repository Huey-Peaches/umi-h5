/*
 * @Author: KeMull
 * @Date: 2021-07-28 16:21:57
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-29 20:27:51
 */
import { Effect, Reducer } from 'umi';
import { homeWiki } from './service';
import { liveDateItem } from './data';
import { ListDataParams } from '@/utils/global';
export interface ModelState {
  data: ListDataParams<liveDateItem>;
}
export interface ModelType {
  namespace: string;
  state: ModelState;
  effects: {
    GetList: Effect;
  };
  reducers: {
    save: Reducer<ModelState>;
  };
}
const Model: ModelType = {
  namespace: 'HomeModel',
  state: {
    data: {
      list: [],
      pagination: {},
    },
  },
  effects: {
    *GetList({ payload, callback }, { call, put }) {
      const response = yield call(homeWiki, payload);
      if (response && response.data) yield put({ type: 'save', payload: response.data });
      callback(response || {});
    },
  },

  reducers: {
    save: (state, action) => ({ ...state, data: action.payload }),
  },
};

export default Model;
