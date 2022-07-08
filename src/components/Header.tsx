import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export function Header() {
  return (
    <header>
      <div className={styles.logoContainer}>
        <img
          src="./src/assets/BNM_Logo_White.png"
          alt="Benchmetrics Logo White"
          className={styles.logo}
        />
      </div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.link}>
            Overview
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/traffic" className={styles.link}>
            Traffic
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/site-performance" className={styles.link}>
            Site Performace
          </Link>
        </li>
      </ul>
    </header>
  );
}
