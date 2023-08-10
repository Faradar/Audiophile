import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#">
          <img alt="Audiophile logo - Home" src="./images/logo.svg"></img>
        </Navbar.Brand>
        {/* Links */}
        <Nav className="me-auto">
          <Nav.Link href="#" className={styles.links}>
            HOME
          </Nav.Link>
          <Nav.Link href="#" className={styles.links}>
            HEADPHONES
          </Nav.Link>
          <Nav.Link href="#" className={styles.links}>
            SPEAKERS
          </Nav.Link>
          <Nav.Link href="#" className={styles.links}>
            EARPHONES
          </Nav.Link>
        </Nav>
        {/* CartWidget */}
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
