import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { getCartQuantity } from "../../utils";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const quantity = getCartQuantity(cart);

  // Esta funcion deberia llevar a /cart, no a /checkout, por ahora la dejo asi
  const handleClick = () => {
    navigate("/checkout");
  };

  return (
    <Button
      variant="transparent"
      className="text-white position-relative"
      onClick={handleClick}
    >
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
