import { MetricCard } from '../components/MetricCard';
import styles from './Overview.module.scss';

export function Overview() {
  return (
    <div className={styles.container}>
      <MetricCard
        name="Sessions (Site Traffic)"
        count="1373"
        delta="-2"
        percentile="100"
        className={styles.metric}
      />
      <MetricCard
        name="Sessions (Site Traffic)"
        count="1373"
        delta="-2"
        percentile="100"
        className={styles.metric}
      />
      <MetricCard
        name="Sessions (Site Traffic)"
        count="1373"
        delta="-2"
        percentile="100"
        className={styles.metric}
      />
      <MetricCard
        name="Sessions (Site Traffic)"
        count="1373"
        delta="-2"
        percentile="100"
        className={styles.metric}
      />
    </div>
  );
}
