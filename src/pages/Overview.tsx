import { useLocation } from 'react-router-dom';
import { MetricCard } from '../components/MetricCard';
import { useFetch } from '../hooks/useFetch';

import styles from './Overview.module.scss';

export function Overview() {
  const { pathname } = useLocation();
  const { loading, data, error } = useFetch(pathname);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong.</h1>
      ) : (
        data.map((item) => (
          <MetricCard
            key={item['Metric Name']}
            name={item['Metric Name']}
            count={item['Metric Count']}
            percentile={item.Percentile}
            delta={item['Week-Over-Week Change']}
            className={styles.metric}
          />
        ))
      )}
    </div>
  );
}
