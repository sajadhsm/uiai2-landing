import React, { PureComponent } from 'react';
import styles from './Awards.module.css';

import goldIcon from './icons/gold.png';
import silverIcon from './icons/silver.png';
import bronzeIcon from './icons/bronze.png';

class Awards extends PureComponent {
  render() {
    return (
      <section className={styles.awardsSection}>
        <div className="wrapper">
          <h2 className="section-title">جوایز تیم‌های برتر</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <img src={goldIcon} alt="Gold Medal"/>
              <h4>تیم اول</h4>
              <h3>۳</h3>
              <span>میلیون تومان</span>
            </div>

            <div className={styles.card}>
              <img src={silverIcon} alt="Silver Medal"/>
              <h4>تیم دوم</h4>
              <h3>۲</h3>
              <span>میلیون تومان</span>
            </div>

            <div className={styles.card}>
              <img src={bronzeIcon} alt="Bronze Medal"/>
              <h4>تیم سوم</h4>
              <h3>۱</h3>
              <span>میلیون تومان</span>
            </div>
          </div>

          <p className={styles.notice}>به تیم‌های راه یافته به مرحله حضوری، تیشرت و پیکسل یادبود مسابقه اهدا خواهد شد.</p>
        </div>
      </section>
    );
  }
}

export default Awards;
