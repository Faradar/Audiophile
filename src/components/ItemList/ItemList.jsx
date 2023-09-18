import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                  <Link to={`/item/${item.id}`}>{item.description}</Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;
