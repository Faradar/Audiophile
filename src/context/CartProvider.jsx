import { useState } from "react";
import CartContext from "./CartContext";
import propTypes from "prop-types";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (id, quantity) => {
    const itemInCart = cart.find((item) => item.id === id);

    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      setCart(newCart);
    } else {
      // Agregar item a cart
      setCart([...cart, { id, quantity }]);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: propTypes.node,
};

export default CartProvider;
