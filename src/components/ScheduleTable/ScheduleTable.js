import React, { PureComponent } from 'react';
import styles from './ScheduleTable.module.css';

class ScheduleTable extends PureComponent {
  render() {
    return (
      <section className={styles.scheduleSection}>
        <div className="wrapper">
          <h2 className="section-title">برنامه زمان‌بندی</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th colSpan="2">برنامه</th>
                <th>زمان</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">مرحله غیرحضوری (انتخابی)</td>
                <td>۱۸ آبان الی ۱۱ آذر</td>
              </tr>

              <tr>
                <td colSpan="2">مرحله حضوری</td>
                <td>۱۵‌ آذر</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default ScheduleTable;
