import { Header } from '../components/Header';
import styles from './Overview.module.scss';

export function Overview() {
  return (
    <div className={styles.container}>
      <Header />
      Overview
    </div>
  );
}
