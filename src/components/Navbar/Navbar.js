import React, { PureComponent } from 'react';
import styles from './Navbar.module.css';
import logo from './Logo.png';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navRow}>
          <div className={styles.logoAndText}>
            <img className={styles.navLogo} src={logo} alt="logo" />
            <p>UIAI2018</p>
          </div>
          <div className={styles.navItems}>
            <span><a href="http://acm.ui.ac.ir/uiai2018/blog/">بلاگ</a></span>
            <span><button onClick={this.props.onOpenModal}>ثبت نام</button></span>
            <span><a href="http://acm.ui.ac.ir/uiai2018/dashboard/">ورود</a></span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
