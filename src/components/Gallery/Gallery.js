import React, { PureComponent } from 'react';
import * as GridGallery from 'react-grid-gallery';
import styles from './Gallery.module.css';

import images from './Images';

class Gallery extends PureComponent {
  state = {
    images
  };

  render() {
    return (
      <section className={styles.gallerySection}>
        <div className="wrapper">
          <h2>تصاویر مسابقه گذشته</h2>

          <div style={{
            display: "block",
            minHeight: "1px",
            width: "100%",
            overflow: "hidden"
          }}>
            <GridGallery
              images={this.state.images}
              enableLightbox={true}
              enableImageSelection={false}
              showImageCount={false} />
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
