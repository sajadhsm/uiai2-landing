import React, { PureComponent } from 'react';
import styles from './Description.module.css';
import poster from './poster.jpg';

class Description extends PureComponent {
  render() {
    return (
      <section className={`wrapper ${styles.decriptionSection}`}>
        <div className={styles.imageBox}>
          <img className={styles.posterImage} src={poster} alt="UIAI2 Poster" />
        </div>

        <div className={styles.textBox}>
          <h3>چی شده؟</h3>
          <p>
            برنامه نویس که باشی، کدنویسی میشه بخشی از زندگیت! استادا و مدیر پروژه‌ها هم که دم به دیقه تسک‌های مختلف میدن که کد بزنی! اما چه کدی... دریغ از یه سر سوزن هیجان و جذابیت! <span role="img" aria-label="emoji">😫 </span>
            مگر اینکه خودمون به فکر خودمون باشیم و یه کارایی صورت بدیم تا کدزنی هیجان انگیز بشه! <span role="img" aria-label="emoji">😇</span>
            واسه همین اومدیم گفتیم ما که فوتبال دوس داریم، شمام که دوست دارین! بیایم یه چالش هوش مصنوعی فوتبالی راه بندازیم و هیجان رقابت های فوتبالی رو با کدزنی ادغام کنیم<span role="img" aria-label="emoji">😋⚽️💻</span>
          </p>

          <h3>چالش این دوره چیه؟</h3>
          <p>
            Soccer Stars که بازی کردین؟ نکردین؟ ای بابا!
  خب اگه بازی کردین که تقریبا با چالش ما آشنایی دارین، اگرم بازی نکردین هیچ طوری نیست! داک نوشتیم توووپ! ولی علی الحساب بدونین که 5 تا بازیکن دارین که باید بازیکناتونو شوت کنین به جای توپ <span role="img" aria-label="emoji">😂😂</span>
          </p>

          <h3>چطوری تو مسابقه شرکت کنیم؟</h3>
          <p>
            اول توی سایت ثبت نام کنین و با دوستاتون تیم‌های حداکثر سه نفره تشکیل بدین. بعد یه سری به بلاگ بزنین و بشینین داکی که اونجا هست رو بخونین. توی اون داک توضیح داده شده که بازی چیه و چطوری به یکی از زبان های ++C، جاوا و یا پایتون کد بزنین تا کدهاتون بتونن با هم مسابقه بدن. تو همین سایت هم به زودی میتونین کدهاتونو آپلود کنین و با بقیه‌ی تیما بازی دوستانه بدین و استراتژی‌هاتونو ارزیابی کنین.
          </p>

          <h3>قضیه انتخابی اینا چیه؟</h3>
          <p>
            ۸ آذر آخرین روز مرحله‌ی غیرحضوریه و تا اون روز میتونین کد آپلود کنین. بعدشم مسابقات انتخابی رو برگزار میکنیم و تیمای صعود کرده به مرحله حضوری مشخص میشن!
  برای مرحله‌ی حضوری هم ۱۵ آذر تشریف میارین اصفهان، مهمون ما دانشگاه اصفهانیا میشین و چند روزِ فوتبالی هیجان انگیز رو با هم تجربه میکنیم و خلاصه می‌ترررکونیم! <span role="img" aria-label="emoji">😍</span><br />
            آها، راستی! تخمه و تنقلات یادتون نره! <span role="img" aria-label="emoji">🍦🍪🍿</span><br />
            بوق شیپوریاتونم بیارین <span role="img" aria-label="emoji">🥁🎺</span>
          </p>
        </div>
      </section>
    );
  }
}

export default Description;
