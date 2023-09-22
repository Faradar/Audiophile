import { useContext, useState, useRef } from "react";
import CartContext from "../../context/CartContext";
import { getCartTotal, mapCartToOrderItems } from "../../utils";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../../services";
import styles from "./Checkout.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);
  const formRef = useRef(null);
  const [show, setShow] = useState(false);
  const [previousTotal, setPreviousTotal] = useState(null);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Your name needs to have 2 characters at least")
      .max(40, "Your name can't have more than 40 characters")
      .required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email"),
    phone: yup.string().required("Please enter your phone number"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const total = getCartTotal(cart);

  const handleClose = () => {
    setShow(false);
    clear();
    navigate("/");
  };

  const handleShow = () => setShow(true);
  const handleCheckout = () => {
    const form = formRef.current;
    const formData = new FormData(form);

    const order = {
      buyer: {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      },
      items: mapCartToOrderItems(cart),
      total,
      date: serverTimestamp(),
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      handleShow(total);
      setOrderId(docRef.id);
      setIsLoading(false);
      setPreviousTotal(total);
    });
  };

  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.div}`}>
        <div className={`${styles.mainDiv}`}>
          <h1 className={`${styles.mainTitle}`}>CHECKOUT</h1>
          <h2 className={`${styles.billing}`}>BILLING DETAILS</h2>
          <form ref={formRef} className={`${styles.form}`}>
            <div>
              <label htmlFor="name" className={`${styles.label}`}>
                Full Name
              </label>
              {errors.name && (
                <p className={`${styles.error}`}>{errors.name.message}</p>
              )}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Alexei Ward"
                className={`${styles.input}`}
                {...register("name")}
              />
            </div>
            <div>
              <label htmlFor="email" className={`${styles.label}`}>
                Email Address
              </label>
              {errors.email && (
                <p className={`${styles.error}`}>{errors.email.message}</p>
              )}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="alexei@mail.com"
                className={`${styles.input}`}
                {...register("email")}
              />
            </div>
            <div>
              <label htmlFor="phone" className={`${styles.label}`}>
                Phone Number
              </label>
              {errors.phone && (
                <p className={`${styles.error}`}>{errors.phone.message}</p>
              )}
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 202-555-0136"
                className={`${styles.input}`}
                {...register("phone")}
              />
            </div>
          </form>
        </div>
        <div className={`${styles.summaryDiv}`}>
          <h3 className={`${styles.summaryTitle}`}>SUMMARY</h3>
          <ul className={`${styles.summaryUl}`}>
            {cart.map((item) => (
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
                <div>
                  <span className="mx-2">x{item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between">
            <p className={`${styles.summaryTotalTxt}`}>TOTAL</p>
            <p className={`${styles.summaryTotal}`}>${total}</p>
          </div>
          <button
            type="submit"
            onClick={handleSubmit(handleCheckout)}
            className={`${styles.finalButton}`}
          >
            CONTINUE & PAY
          </button>
        </div>
      </div>

      {isLoading && (
        <div className={styles.spinnerDiv}>
          <Spinner
            animation="border"
            role="status"
            variant="orangetxt"
            className={styles.spinner}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {orderId && (
        <Modal show={show} onHide={handleClose}>
          <div className={styles.modal}>
            <img
              src="./icon-check-mark.svg"
              alt="Check mark"
              className={styles.modalCheck}
            />
            <div className={`p-0 ${styles.modalHeader}`}>
              <Modal.Title className={styles.modalTitle}>
                THANK YOU
                <span>FOR YOUR ORDER</span>
              </Modal.Title>
              <p className={styles.modalHeaderP}>Your order id is: {orderId}</p>
            </div>
            <div className={`d-flex p-0 ${styles.modalBody}`}>
              <div className={`d-flex ${styles.modalBodyItem}`}>
                <ul>
                  {cart.map((item) => (
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
                          <p
                            style={{ fontSize: "14px" }}
                            className="text-greytxt"
                          >
                            ${item.price}
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="mx-2 text-greytxt fw-bold">
                          x{item.quantity}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`d-flex bg-cback ${styles.modalBodyTotal}`}>
                <p className="text-greytxt mb-2">GRAND TOTAL</p>
                <p
                  className={`text-white fw-bold ${styles.modalBodyTotalNumber}`}
                >
                  $ {previousTotal}
                </p>
              </div>
            </div>
            <div>
              <Button
                variant="orangetxt text-white"
                onClick={handleClose}
                className={`${styles.modalButton}`}
              >
                BACK TO HOME
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default Checkout;
