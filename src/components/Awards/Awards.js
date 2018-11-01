import React, { PureComponent } from 'react';
import styles from './Awards.module.css';

class Awards extends PureComponent {
  render() {
    return (
      <section className={styles.awardsSection}>
        <div className="wrapper">
          <h2>جوایز تیم‌های برتر</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h4>تیم اول</h4>
              <h3>۳</h3>
              <span>میلیون تومان</span>
            </div>

            <div className={styles.card}>
              <h4>تیم دوم</h4>
              <h3>۲</h3>
              <span>میلیون تومان</span>
            </div>

            <div className={styles.card}>
              <h4>تیم سوم</h4>
              <h3>۱</h3>
              <span>میلیون تومان</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Awards;
