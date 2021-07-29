/*
 * @Author: KeMull
 * @Date: 2021-07-23 12:04:02
 * @LastEditors: KeMull
 * @LastEditTime: 2021-07-28 16:19:48
 */
import styles from './index.less';
import { Button } from 'antd-mobile';
import { history } from 'umi';
const IndexPage = () => {
  const toHome = () => {
    history.push('/home');
  };
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button type="primary" onClick={toHome}>
        去首页
      </Button>
    </div>
  );
};
export default IndexPage;
