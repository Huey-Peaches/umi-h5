/*
 * @Author: KeMull
 * @Date: 2021-07-28 16:21:57
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-28 17:52:07
 */
import { Reducer } from 'redux';
import { Effect } from 'dva';
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
      if (response && response.data) {
        yield put({
          type: 'save',
          payload: response.data,
        });
      }
      if (typeof callback === 'function') callback(response || {});
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};

export default Model;
