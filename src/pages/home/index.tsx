/*
 * @Author: KeMull
 * @Date: 2021-07-28 16:18:46
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-29 20:29:33
 */
import { useEffect } from 'react';
import { Button } from 'antd-mobile';
import { history, connect } from 'umi';
import { ModelState } from './model';
import { PagesParams } from '@/utils/global';
import Wechart from 'weixin-js-sdk-ts';
interface HomePageProps extends PagesParams {
  HomeModel: ModelState;
}
const HomePage = (props: HomePageProps) => {
  useEffect(() => {
    getLiveData();
  }, []);
  const { dispatch } = props;
  const getLiveData = () => {
    dispatch({
      type: 'HomeModel/GetList',
      payload: { state: 0, currentPage: 1, pageSize: 10 },
      callback: (res) => {
        console.log('%c 🥝 res: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', res);
      },
    });
  };

  const toHome = () => {
    history.push('/home');
  };
  console.log(
    '%c 🍜 props: ',
    'font-size:20px;background-color: #465975;color:#fff;',
    props.HomeModel.data.list,
  );

  return (
    <div>
      <h1>home</h1>
      <Button type="primary" onClick={toHome}>
        home
      </Button>
    </div>
  );
};

export default connect(
  ({
    HomeModel,
    loading,
  }: {
    HomeModel: ModelState;
    loading: { models: { [key: string]: boolean } };
  }) => ({ HomeModel, loading: loading.models.HomeModel }),
)(HomePage);
