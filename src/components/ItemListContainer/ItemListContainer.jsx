/* eslint-disable react/prop-types */
import styles from "./ItemListContainer.module.scss";

const ItemListContainer = (props) => {
  return (
    <div>
      <h1 className={styles.text}>{props.greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
