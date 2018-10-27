import React, { PureComponent } from 'react';
import styles from './Hero.module.css';

class Hero extends PureComponent {
  render() {
    return (
      <section className={styles.hero}>
        <h1>دومین دوره مسابقات چالشی<br/>هوش مصنوعی دانشگاه اصفهان</h1>
      </section>
    );
  }
}

export default Hero;
