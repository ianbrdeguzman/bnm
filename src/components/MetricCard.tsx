import cn from 'classnames';

import styles from './MetricCard.module.scss';

export interface Props {
  name: string;
  count: string;
  percentile: string;
  delta: string;
  className?: string;
}

function format(count: string): number {
  return count.includes('s') || count.includes('%')
    ? +count.slice(0, -1)
    : +count;
}

export function MetricCard({
  name,
  count,
  percentile,
  delta,
  className
}: Props) {
  const status = delta.includes('-') ? 'negative' : 'positive';

  return (
    <article className={cn(styles.container, className)}>
      <div className={styles.heading}>
        <h4 className={styles.title}>{name}</h4>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <p className={styles.count}>
            {format(count).toLocaleString()} |{' '}
            <span className={styles[status]}>{percentile.slice(0, -2)}%</span>
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
            {delta}
          </span>
        </p>
      </div>
    </article>
  );
}
