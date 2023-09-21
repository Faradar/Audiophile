import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { getCartQuantity } from "../../utils";
import Cart from "../Cart/Cart";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const quantity = getCartQuantity(cart);

  // Esta funcion deberia llevar a /cart, no a /checkout, por ahora la dejo asi
  const handleClick = () => {
    setShowCart(true);
  };

  return (
    <>
      <Button
        variant="transparent"
        className="text-white position-relative"
        onClick={handleClick}
      >
        <i className="bi bi-cart"></i>
        <Badge
          bg="orangetxt"
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
        >
          {quantity > 0 ? quantity : ""}
        </Badge>
        <span className="visually-hidden">products in cart</span>
      </Button>
      {showCart && <Cart showModal={showCart} setShowModal={setShowCart} />}
    </>
  );
};

export default CartWidget;
