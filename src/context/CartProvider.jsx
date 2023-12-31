import { useState } from "react";
import CartContext from "./CartContext";
import propTypes from "prop-types";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addItem = (product, quantity) => {
    const itemInCart = isInCart(product.id);

    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const subtractItem = (product, quantity) => {
    const itemInCart = isInCart(product.id);

    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          const newQuantity = item.quantity - quantity;
          return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
        }
        return item;
      });
      setCart(newCart);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, subtractItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: propTypes.node,
};

export default CartProvider;
