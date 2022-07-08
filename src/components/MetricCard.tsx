import cn from 'classnames';

import styles from './MetricCard.module.scss';

interface Props {
  name: string;
  count: number;
  percentile: number;
  delta: number;
  className?: string;
  type?: 'time' | 'percentage';
}

export function MetricCard({
  name,
  count,
  percentile,
  delta,
  type,
  className
}: Props) {
  const status = delta > 0 ? 'positive' : 'negative';
  const postfix = type === 'time' ? 's' : type === 'percentage' ? '%' : '';

  return (
    <article className={cn(styles.container, className)}>
      <div className={styles.heading}>
        <h4 className={styles.title}>{name}</h4>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <p className={styles.count}>
            {count.toLocaleString()}
            {postfix} | <span className={styles[status]}>{percentile}%</span>
          </p>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={
                status === 'positive'
                  ? './src/assets/BNM_Metric_Up.svg'
                  : './src/assets/BNM_Metric_Down.svg'
              }
              alt={status === 'positive' ? 'Metric Up' : 'Metric Down'}
            />
            <p>pctl</p>
          </div>
        </div>
        <p className={styles.performance}>
          Your performance from last week{' '}
          <span className={styles[status]}>
            {status === 'positive' && '+'}
            {delta}%
          </span>
        </p>
      </div>
    </article>
  );
}
