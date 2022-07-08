import { MetricCard } from '../components/MetricCard';
import styles from './Overview.module.scss';

export function Overview() {
  return (
    <div className={styles.container}>
      <MetricCard
        name="Sessions (Site Traffic)"
        count={1373}
        delta={-2}
        percentile={100}
        className={styles.metric}
      />
      <MetricCard
        name="Avg. Pages Views"
        count={11.99}
        delta={19}
        percentile={100}
        className={styles.metric}
      />
      <MetricCard
        name="Avg. Time On Site"
        count={227.3}
        delta={24}
        percentile={99}
        type="time"
        className={styles.metric}
      />
      <MetricCard
        name="Bounce Rate"
        count={2.6}
        delta={54}
        percentile={13}
        type="percentage"
        className={styles.metric}
      />
    </div>
  );
}
