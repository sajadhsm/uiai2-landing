import React, { PureComponent } from 'react';
import styles from './Hero.module.css';
import logo from './Logo.png';

class Hero extends PureComponent {
  render() {
    return (
      <section className={styles.hero}>
        <img src={logo} alt="UIAI2 Logo"/>
        <h1>دومین دوره مسابقات چالشی<br/>هوش مصنوعی دانشگاه اصفهان</h1>
      </section>
    );
  }
}

export default Hero;
