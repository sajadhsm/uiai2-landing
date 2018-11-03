import React, { PureComponent } from 'react';
import styles from './Staffs.module.css';
import testImage from './me2.jpg';

class Staffs extends PureComponent {
  render() {
    return (
      <section className={styles.staffsSection}>
        <div className="wrapper">
          <h2 className="section-title">برگزار‌کنندگان</h2>
          <div className={styles.staffs}>
            <div className={styles.staff}>
              <img className={styles.staffImage} src={testImage} alt="Staff pic" />
              <h5 className={styles.staffName}>سجاد هاشمیان</h5>
              <p className={styles.staffDuty}>تیم فنی</p>
            </div>
            <div className={styles.staff}>
              <img className={styles.staffImage} src={testImage} alt="Staff pic" />
              <h5 className={styles.staffName}>سجاد هاشمیان</h5>
              <p className={styles.staffDuty}>تیم فنی</p>
            </div>
            <div className={styles.staff}>
              <img className={styles.staffImage} src={testImage} alt="Staff pic" />
              <h5 className={styles.staffName}>سجاد هاشمیان</h5>
              <p className={styles.staffDuty}>تیم فنی</p>
            </div>
            <div className={styles.staff}>
              <img className={styles.staffImage} src={testImage} alt="Staff pic" />
              <h5 className={styles.staffName}>سجاد هاشمیان</h5>
              <p className={styles.staffDuty}>تیم فنی</p>
            </div>
            <div className={styles.staff}>
              <img className={styles.staffImage} src={testImage} alt="Staff pic" />
              <h5 className={styles.staffName}>سجاد هاشمیان</h5>
              <p className={styles.staffDuty}>تیم فنی</p>
            </div>
            <div className={styles.staff}>
              <img className={styles.staffImage} src={testImage} alt="Staff pic" />
              <h5 className={styles.staffName}>سجاد هاشمیان</h5>
              <p className={styles.staffDuty}>تیم فنی</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Staffs;