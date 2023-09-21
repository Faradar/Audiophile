import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartContext from "../../context/CartContext";
import { getCartQuantity, getCartTotal } from "../../utils";
import styles from "./Cart.module.scss";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Cart = ({ showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);

  const { cart, addItem, subtractItem, removeItem, clear } =
    useContext(CartContext);

  const [itemQuantities, setItemQuantities] = useState(
    cart.map((item) => item.quantity)
  );

  const quantity = getCartQuantity(cart);

  const total = getCartTotal(cart);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/checkout");
    handleClose();
  };

  const handleQuantityChange = (index, change) => {
    const newQuantities = [...itemQuantities];
    newQuantities[index] += change;

    if (newQuantities[index] >= 0) {
      setItemQuantities(newQuantities);
      if (change > 0) {
        addItem(cart[index], 1);
      } else {
        subtractItem(cart[index], 1);
      }
    }

    if (newQuantities[index] === 0) {
      removeItem(cart[index].id);
      newQuantities.splice(index, 1);
      setItemQuantities(newQuantities);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose} dialogClassName={styles.modal}>
      {quantity === 0 && (
        <>
          <Modal.Body className="text-center">Your cart is empty</Modal.Body>
          <i className={`bi bi-cart text-center ${styles.cartImg}`}></i>
        </>
      )}

      {quantity > 0 && (
        <>
          <Modal.Header>
            <Modal.Title>{`Cart (${quantity})`}</Modal.Title>
            <button onClick={clear} className={styles.removeBtn}>
              Remove All
            </button>
          </Modal.Header>
          <Modal.Body className="pb-0">
            {cart.map((item, index) => (
              <li
                key={item.id}
                className={`${styles.cartItem} d-flex justify-content-between align-items-center`}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={`/${item.categoryId}/${item.imageId}`}
                    alt={item.title}
                    className="me-2"
                  />
                  <div
                    className="d-flex flex-column fw-bold"
                    style={{ width: "75px", height: "50px" }}
                  >
                    <p style={{ fontSize: "15px" }} className="mb-1">
                      {item.nickname}
                    </p>
                    <p style={{ fontSize: "14px" }} className="text-greytxt">
                      ${item.price}
                    </p>
                  </div>
                </div>
                <div className={`${styles.plusMinus}`}>
                  <button onClick={() => handleQuantityChange(index, -1)}>
                    -
                  </button>
                  <span className="mx-2">{itemQuantities[index]}</span>
                  <button onClick={() => handleQuantityChange(index, 1)}>
                    +
                  </button>
                </div>
              </li>
            ))}
          </Modal.Body>
          <Modal.Footer className="flex-column">
            <div className="d-flex justify-content-around align-items-center w-100">
              <p>TOTAL</p>
              <p className="fw-bold">${total}</p>
            </div>
            <Button
              variant="orangetxt"
              className={`text-light ${styles.checkout}`}
              onClick={handleSubmit}
            >
              CHECKOUT
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

Cart.propTypes = {
  showModal: propTypes.bool,
  setShowModal: propTypes.func,
};

export default Cart;
