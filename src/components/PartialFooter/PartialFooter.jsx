import styles from "./PartialFooter.module.scss";
import { Link } from "react-router-dom";

const PartialFooter = () => {
  return (
    <>
      <ul className={`${styles.category}`}>
        <li className={`${styles.categoryList}`}>
          <Link to="/category/headphones" className={styles.categoryLink}>
            <div className={styles.categoryDiv}>
              <img
                src="/image-headphones.png"
                alt="XX99 MARK I HEADPHONES"
                className={styles.categoryImg}
              />
              <h2 className={styles.categoryH2}>HEADPHONES</h2>
              <div className={styles.categoryDiv2}>
                <p className={styles.categoryP}>Shop</p>
                <img
                  src="/icon-arrow-right.svg"
                  alt="Arrow right"
                  className={styles.categoryImg2}
                />
              </div>
            </div>
          </Link>
        </li>

        <li className={styles.categoryList}>
          <Link to="/category/speakers" className={styles.categoryLink}>
            <div className={styles.categoryDiv}>
              <img
                src="/image-speakers.png"
                alt="ZX9 SPEAKER"
                className={styles.categoryImg}
              />
              <h2 className={styles.categoryH2}>SPEAKERS</h2>
              <div className={styles.categoryDiv2}>
                <p className={styles.categoryP}>Shop</p>
                <img
                  src="/icon-arrow-right.svg"
                  alt="Arrow right"
                  className={styles.categoryImg2}
                />
              </div>
            </div>
          </Link>
        </li>

        <li className={`${styles.categoryList} me-0`}>
          <Link to="/category/earphones" className={styles.categoryLink}>
            <div className={styles.categoryDiv}>
              <img
                src="/image-earphones.png"
                alt="YX1 WIRELESS EARPHONES"
                className={styles.categoryImg}
              />
              <h2 className={styles.categoryH2}>EARPHONES</h2>
              <div className={styles.categoryDiv2}>
                <p className={styles.categoryP}>Shop</p>
                <img
                  src="/icon-arrow-right.svg"
                  alt="Arrow right"
                  className={styles.categoryImg2}
                />
              </div>
            </div>
          </Link>
        </li>
      </ul>
      <div className={styles.audio}>
        <picture className={styles.audioPicture}>
          <source
            srcSet="../home/desktop/image-best-gear-lg.jpg"
            media="(min-width: 62em)"
          />
          <source
            srcSet="../home/tablet/image-best-gear-md.jpg"
            media="(min-width: 30em)"
          />
          <img
            src="../home/phone/image-best-gear-sm.jpg"
            alt="A man listening to music on headphones"
          />
        </picture>
        <div className={styles.audioText}>
          <h2>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </>
  );
};

export default PartialFooter;
