import React, { PureComponent } from 'react';
import styles from './Staffs.module.css';
import Persons from './Persons';
import Orgs from './Orgs';
import Sponsers from './Sponsers';

class Staffs extends PureComponent {
  render() {
    return (
      <section className={styles.staffsSection}>
        <div className="wrapper">
          <h2 className="section-title">برگزار‌کنندگان</h2>
          <div className={styles.staffs}>
            {Orgs.map((org, index) => (
              <div className={styles.staff} key={index}>
                <img
                  className={styles.staffImage}
                  src={org.avatar}
                  alt={`تصویر ${org.name}`} />
                <h5 className={styles.staffName}>{org.name}</h5>
              </div>
            ))}
          </div>
          <div className={styles.staffs}>
            {Persons.map((person, index) => (
              <div className={styles.staff} key={index}>
                <img
                  className={styles.staffImage}
                  src={person.avatar}
                  alt={`تصویر ${person.name}`} />
                <h5 className={styles.staffName}>{person.name}</h5>
                <p className={styles.staffDuty}>{person.team}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title" style={{marginTop: '3rem'}}>حامیان مالی</h2>
          <div className={styles.staffs} style={{marginBottom: '1rem'}}>
            {Sponsers.map((sponser, index) => (
              <a
                href={sponser.link}
                className={styles.staff}
                style={{textDecoration: 'none', color: 'inherit'}}
                key={index}>
                <img
                  className={styles.staffImage}
                  style={{borderRadius: 0}}
                  src={sponser.avatar}
                  alt={`تصویر ${sponser.name}`} />
                <h5 className={styles.staffName}>{sponser.name}</h5>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Staffs;