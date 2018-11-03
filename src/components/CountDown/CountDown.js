import React, { Component } from 'react';
import toPersianNum from '../../helpers/toPersianNum';
import styles from './CountDown.module.css';

const deadLine = "Thu Nov 22 2018 08:00:00 GMT+0330";

class CountDown extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  getTimeRemaining = () => {
    const t = Date.parse(deadLine) - Date.parse(new Date());

    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds
    }
  }

  updateClock = () => {
    const t = this.getTimeRemaining();

    this.setState({
      days: t.days,
      hours: ('0' + t.hours).slice(-2),
      minutes: ('0' + t.minutes).slice(-2),
      seconds: ('0' + t.seconds).slice(-2)
    });
  }

  componentDidMount = () => {
    this.updateClock();
    setInterval(this.updateClock, 1000);
  }

  render() {
    return (
      <section className={styles.countdownSection}>
        <div className="wrapper">
          <p className={styles.title}>تا شروع مسابقه</p>

          <div className={styles.clock}>
            <span>{toPersianNum(this.state.seconds)}</span>
            <b>:</b>
            <span>{toPersianNum(this.state.minutes)}</span>
            <b>:</b>
            <span>{toPersianNum(this.state.hours)}</span>
            <b>:</b>
            <span>{toPersianNum(this.state.days)}</span>
          </div>
        </div>
      </section>
    )
  }
}

export default CountDown;
