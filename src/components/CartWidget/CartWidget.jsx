import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const CartWidget = () => {
  return (
    <Button variant="transparent" className="text-white position-relative">
      <i className="bi bi-cart"></i>
      <Badge
        bg="danger"
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
      >
        3
      </Badge>
      <span className="visually-hidden">products in cart</span>
    </Button>
  );
};

export default CartWidget;
