import propTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ item, isLoading }) => {
  const { cart, addItem, isInCart } = useContext(CartContext);

  const isItemInCart = isInCart(item);

  const handleAddToCart = () => {
    addItem(item.id, 1);
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!item) {
    return null;
  }

  return (
    <div>
      <Card style={{ width: "18rem" }} className="mx-auto">
        <Card.Img variant="top" src={item.image} alt={item.title} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
            <br />${item.price}
          </Card.Text>
          {/* <Button variant="primary" onClick={handleAddToCart}>
            ADD TO CART
          </Button> */}
          <Button
            variant={isItemInCart ? "secondary" : "primary"}
            onClick={handleAddToCart}
          >
            {isItemInCart ? "ALREADY IN CART" : "ADD TO CART"}
          </Button>
        </Card.Body>
      </Card>

      <h2>Productos en el carrito:</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemDetail.propTypes = {
  item: propTypes.object,
  isLoading: propTypes.bool,
};

export default ItemDetail;
