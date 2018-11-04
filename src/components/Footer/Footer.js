import React, { PureComponent } from 'react';
import styles from './Footer.module.css';

import twitter from './twitter-logo.png';
import instagram from './instagram-logo.png';
import telegram from './telegram-logo.png';

class Footer extends PureComponent {
  render() {
    return (
      <footer className={styles.footer}>
        <p>دومین دوره مسابقات چالشی هوش مصنوعی دانشگاه اصفهان</p>

        <div className={styles.socialLinks}>
          <a href="https://t.me/ui_acm" title="کانال انجمن ACM">
            <img src={telegram} alt="Telegram icon"/>
          </a>
          <a href="https://Instagram.com/uiai_2018" title="صفحه اینستاگرام uiai2018">
            <img src={instagram} alt="Instagram icon"/>
          </a>
          <a href="https://twitter.com/uiai2018" title="صفحه توییتر uiai2018">
            <img src={twitter} alt="Twitter icon"/>
          </a>
          <a href="https://t.me/uicvgame" title="کانال مرکز بازی سازی">
            <img src={telegram} alt="Telegram icon"/>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
