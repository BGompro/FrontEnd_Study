// Subscription 컴포넌트
import styles from './Subscription.module.css';
import Layout from '../components/shared/Layout';

function Subscription() {
  return (
    <Layout activeMenu="subscription">
      <div className={styles.container}>* 구독</div>
    </Layout>
  );
}

export default Subscription;