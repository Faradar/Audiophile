import propTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const ItemDetail = ({ item, isLoading }) => {
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
    <Card style={{ width: "18rem" }} className="mx-auto">
      <Card.Img variant="top" src={item.image} alt={item.name} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
          <br />${item.price}
        </Card.Text>
        <Button variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>
  );
};

ItemDetail.propTypes = {
  item: propTypes.object,
  isLoading: propTypes.bool,
};

export default ItemDetail;
