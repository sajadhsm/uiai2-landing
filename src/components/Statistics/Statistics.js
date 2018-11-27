import React, { PureComponent } from 'react';
import toPersianNum from '../../helpers/toPersianNum';
import styles from './Statistics.module.css';

class Statistics extends PureComponent {
  state = {
    count_code: 0,
    count_game: 0,
    count_team: 0,
    count_user: 0
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/uiai2018/api/get_statistics/')
      .then(response => response.json())
      .then(data => this.setState(data))
      .catch(err => console.log('Err:', err));
  }

  render() {
    return (
      <section className={styles.statisticsSection}>
        <div className="wrapper">
          <h2 className="section-title">آمار مسابقه تا این لحظه</h2>

          <div className={styles.infoCards}>
            <div className={styles.card}>
              <p>تعداد شرکت‌کنندگان</p>
              <i className={styles.line}></i>
              <span>{toPersianNum(this.state.count_user)}</span>
            </div>

            <div className={styles.card}>
              <p>تعداد تیم‌ها</p>
              <i className={styles.line}></i>
              <span>{toPersianNum(this.state.count_team)}</span>
            </div>

            <div className={styles.card}>
              <p>کد‌های ارسال‌شده</p>
              <i className={styles.line}></i>
              <span>{toPersianNum(this.state.count_code)}</span>
            </div>

            <div className={styles.card}>
              <p>بازی‌های انجام‌شده</p>
              <i className={styles.line}></i>
              <span>{toPersianNum(this.state.count_game)}</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Statistics;
