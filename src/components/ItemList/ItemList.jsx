import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import styles from "./ItemList.module.scss";
import PartialFooter from "../PartialFooter/PartialFooter";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" variant="orangetxt">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.mainH1}>{items[0].categoryId}</h1>
      <div className={styles.mainDiv}>
        <div className={styles.mainDivCategory}>
          {items.map((item) => (
            <div key={item.id} className={styles.mainDivCategoryDiv}>
              <div className={styles.mainDivCategoryDivPicture}>
                <picture>
                  <source
                    srcSet={`../${item.categoryId}/${item.imageId}`}
                    media="(min-width: 62em)"
                  />
                  <source
                    srcSet={`../category/tablet/${item.imageId}`}
                    media="(min-width: 30em)"
                  />
                  <img
                    src={`../category/phone/${item.imageId}`}
                    alt={item.title}
                  />
                </picture>
              </div>
              <div className={styles.mainDivCategoryDivText}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Link
                  to={`/item/${item.id}`}
                  className={styles.mainDivCategoryDivTextLink}
                >
                  <button>SEE PRODUCT</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <PartialFooter />
      </div>
    </main>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;
