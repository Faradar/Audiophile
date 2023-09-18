import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { getCartQuantity } from "../../utils";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const quantity = getCartQuantity(cart);

  return (
    <Button variant="transparent" className="text-white position-relative">
      <i className="bi bi-cart"></i>
      <Badge
        bg="danger"
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
      >
        {quantity > 0 ? quantity : ""}
      </Badge>
      <span className="visually-hidden">products in cart</span>
    </Button>
  );
};

export default CartWidget;
