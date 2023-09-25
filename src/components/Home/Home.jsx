import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className={styles.hero}>
        <div>
          <span className={styles.heroSpan}>NEW PRODUCT</span>
          <h1 className={styles.heroH1}>XX99 MARK II HEADPHONES</h1>
          <p className={styles.heroP}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/item/saK62cjnapEfk0lIPNaX" className={styles.heroLink}>
            SEE PRODUCT
          </Link>
        </div>
      </div>

      <div className={styles.mainDiv}>
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
                    src="./icon-arrow-right.svg"
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
                    src="./icon-arrow-right.svg"
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
                    src="./icon-arrow-right.svg"
                    alt="Arrow right"
                    className={styles.categoryImg2}
                  />
                </div>
              </div>
            </Link>
          </li>
        </ul>

        <div className={styles.items}>
          <div className={styles.itemsSpeaker}>
            <div className={styles.itemsSpeakerContainer}>
              <picture className={styles.itemsSpeakerContainerPicture}>
                <source
                  srcSet="./home/desktop/image-speaker-zx9-lg.png"
                  media="(min-width: 62em)"
                />
                <source
                  srcSet="./home/tablet/image-speaker-zx9-md.png"
                  media="(min-width: 30em)"
                />
                <img
                  src="./home/phone/image-speaker-zx9-sm.png"
                  alt="ZX9 SPEAKER"
                />
              </picture>
              <div className={styles.itemsSpeakerContainerText}>
                <h2>ZX9 SPEAKER</h2>
                <p>
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Link
                  to="/item/dakfGSBJpwMVtrQgZmLB"
                  className={styles.itemsSpeakerContainerTextLink}
                >
                  <button type="button">SEE PRODUCT</button>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.itemsSpeaker2}>
            <div className={styles.itemsSpeaker2Div}>
              <picture>
                <source
                  srcSet="./home/desktop/image-speaker-zx7-lg.jpg"
                  media="(min-width: 62em)"
                />
                <source
                  srcSet="./home/tablet/image-speaker-zx7-md.jpg"
                  media="(min-width: 30em)"
                />
                <img
                  src="./home/phone/image-speaker-zx7-sm.jpg"
                  alt="ZX7 SPEAKER"
                  className={styles.itemsSpeaker2DivImg}
                />
              </picture>
              <div className={styles.itemsSpeaker2DivText}>
                <h2>ZX7 SPEAKER</h2>
                <Link
                  to="/item/8EqZym6aTUUBibBXFH38"
                  className={styles.itemsSpeaker2DivTextLink}
                >
                  <button type="button">SEE PRODUCT</button>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.itemsEarphone}>
            <div>
              <picture className={styles.itemsEarphonePicture}>
                <source
                  srcSet="./home/desktop/image-earphones-yx1-lg.jpg"
                  media="(min-width: 62em)"
                />
                <source
                  srcSet="./home/tablet/image-earphones-yx1-md.jpg"
                  media="(min-width: 30em)"
                />
                <img
                  src="./home/phone/image-earphones-yx1-sm.jpg"
                  alt="YX1 EARPHONE"
                />
              </picture>
            </div>
            <div>
              <div className={styles.itemsEarphoneText}>
                <div className={styles.itemsEarphoneTextDiv}>
                  <h2>YX1 EARPHONES</h2>
                  <Link
                    to="/item/1q5kbpxQuKPDeIbiL9wi"
                    className={styles.itemsEarphoneTextDivLink}
                  >
                    <button type="button">SEE PRODUCT</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.audio}>
            <picture className={styles.audioPicture}>
              <source
                srcSet="./home/desktop/image-best-gear-lg.jpg"
                media="(min-width: 62em)"
              />
              <source
                srcSet="./home/tablet/image-best-gear-md.jpg"
                media="(min-width: 30em)"
              />
              <img
                src="./home/phone/image-best-gear-sm.jpg"
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
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
