import React, { PureComponent } from 'react';
import styles from './ScheduleTable.module.css';

class ScheduleTable extends PureComponent {
  render() {
    return (
      <section className={styles.scheduleSection}>
        <div className="wrapper">
          <h2 className="section-title">زمان‌بندی مرحله حضوری</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th colSpan="2">برنامه</th>
                <th>زمان</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">پذیرش تیم‌ها</td>
                <td>۰۸:۰۰ الی ۰۹:۰۰</td>
              </tr>

              <tr>
                <td colSpan="2">جلسه توجیهی</td>
                <td>۰۹:۰۰ الی ۰۹:۳۰</td>
              </tr>

              <tr>
                <td colSpan="2">کدزنی مرحله‌اول</td>
                <td>۰۹:۳۰ الی ۱۱:۳۰</td>
              </tr>

              <tr>
                <td colSpan="2">اجرای بازی‌های حذفی مرحله اول</td>
                <td>۱۱:۳۰ الی ۱۲:۰۰</td>
              </tr>

              <tr>
                <td colSpan="2">استراحت، ناهار و کدزنی نهایی</td>
                <td>۱۲:۰۰ الی ۱۴:۰۰</td>
              </tr>

              <tr>
                <td colSpan="2">پایان مهلت آپلود کد نهایی</td>
                <td>۱۴:۰۰</td>
              </tr>

              <tr>
                <td colSpan="2">ارائه‌های ML/AI</td>
                <td>۱۴:۳۰ الی ۱۵:۳۰</td>
              </tr>

              <tr>
                <td colSpan="2">کد بسه، وخی</td>
                <td>۱۵:۳۰ الی ۱۷:۰۰</td>
              </tr>

              <tr>
                <td colSpan="2">اختتامیه</td>
                <td>۱۷:۰۰ الی ۱۸:۰۰</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default ScheduleTable;
