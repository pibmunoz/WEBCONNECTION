// import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "./Context/DataContext";
import TotalItems from "./TotalItems";
import "./NavBar.css";

const NavBar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className="nav-container">
      <nav className="navbar">
        {cart.length > 0 ? <TotalItems /> : null}
        {/* <Link to={"/"}>
          <h1 className="navbar-logo">LaboTech</h1>
        </Link> */}

        {/* <Link className="seeCarrito" to={"/cart"}>
          🛒
          {cart.length > 0 ? <TotalItems /> : null}
        </Link> */}
      </nav>
    </div>
  );
};

export default NavBar;
