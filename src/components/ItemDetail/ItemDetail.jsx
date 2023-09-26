import { useState } from "react";
import propTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";
import styles from "./ItemDetail.module.scss";
import { Link } from "react-router-dom";
import PartialFooter from "../PartialFooter/PartialFooter";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ item, isLoading, addItem }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" variant="orangetxt">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!item) {
    return null;
  }

  const goBack = () => {
    navigate(-1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <main className={styles.main}>
      <Link to="#" className={styles.mainLink} onClick={goBack}>
        Go Back
      </Link>
      <div className={styles.mainItem}>
        <div className={styles.mainItemPicture}>
          <picture>
            <source
              srcSet={`../${item.categoryId}/${item.imageId}`}
              media="(min-width: 62em)"
            />
            <source
              srcSet={`../category/tablet/${item.imageId}`}
              media="(min-width: 30em)"
            />
            <img src={`../category/phone/${item.imageId}`} alt={item.title} />
          </picture>
        </div>
        <div className={styles.mainItemText}>
          <h2>{item.title}</h2>
          <p className={styles.mainItemTextDescription}>{item.description}</p>
          <p className={styles.mainItemTextPrice}>$ {item.price}</p>
          <div className={styles.mainItemTextCart}>
            <div className={styles.mainItemTextCartDiv}>
              <button
                className={styles.mainItemTextCartDivChange}
                onClick={decrementQuantity}
              >
                -
              </button>
              <div className={styles.mainItemTextCartDivNumber}>{quantity}</div>
              <button
                className={styles.mainItemTextCartDivChange}
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <button
              className={styles.mainItemTextCartButton}
              onClick={() => addItem(item, quantity)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <PartialFooter />
    </main>
  );
};

ItemDetail.propTypes = {
  item: propTypes.object,
  isLoading: propTypes.bool,
  addItem: propTypes.func,
};

export default ItemDetail;
