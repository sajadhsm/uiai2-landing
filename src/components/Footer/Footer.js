import React, { PureComponent } from 'react';
import styles from './Footer.module.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer className={styles.footer}>
        <p>دومین دوره مسابقات چالشی هوش مصنوعی دانشگاه اصفهان</p>
        <p>#UIAI2018</p>
      </footer>
    );
  }
}

export default Footer;
