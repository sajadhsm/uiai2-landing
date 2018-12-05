import React from 'react';
import styles from './EMap.module.css';

function MapSection() {
  return (
    <section className={styles.mapSection}>
      <div className="wrapper">
        <h2 className="section-title">مکان برگزاری مرحله حضوری</h2>
        <div>
          <iframe
            title="Location"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=51.65298342704774%2C32.60794715922267%2C51.66162014007569%2C32.61213153129587&amp;layer=mapnik&amp;marker=32.61003936969776%2C51.65730178356171"
            className={styles.mapIFrame}>
          </iframe>
          <div>
            <a
              className={styles.biggerMapLink}
              href="https://www.openstreetmap.org/?mlat=32.61004&amp;mlon=51.65730#map=18/32.61004/51.65730">
              مشاهده نقشه بزرگ‌تر
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
