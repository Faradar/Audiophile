import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.scss";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <Navbar expand="lg" bg="cback" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="order-lg-1">
          {/* Links */}
          <Nav>
            <LinkContainer to="/" activeClassName={styles.active}>
              <Nav.Link className={styles.links}>HOME</Nav.Link>
            </LinkContainer>

            <LinkContainer
              to="/category/headphones"
              activeClassName={styles.active}
            >
              <Nav.Link className={styles.links}>HEADPHONES</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to="/category/speakers"
              activeClassName={styles.active}
            >
              <Nav.Link className={styles.links}>SPEAKERS</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to="/category/earphones"
              activeClassName={styles.active}
            >
              <Nav.Link className={styles.links}>EARPHONES</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        {/* Brand */}
        <LinkContainer to="/">
          <Navbar.Brand>
            <img alt="Audiophile logo" src="/logo.svg"></img>
          </Navbar.Brand>
        </LinkContainer>
        {/* CartWidget */}
        <div className="order-lg-3">
          <CartWidget />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
