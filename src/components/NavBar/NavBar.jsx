import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          <img alt="Audiophile logo - Home" src="./images/logo.svg"></img>
        </a>
        {/* Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Vehiculos
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Muebles
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Tecnología
            </a>
          </li>
        </ul>
        {/* CartWidget */}
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
