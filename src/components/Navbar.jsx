import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT LOGO */}
      <div className="logo">
        <Link to="/">TN AUTOMATION</Link>
      </div>

      {/* CENTER SEARCH BAR */}
      <div className="search-container">
        <input type="text" placeholder="What are you looking for ?" />
        <FaSearch className="search-icon" />
      </div>

      {/* RIGHT ICONS */}
      <div className="nav-icons">
        <Link to="/login">
          <FaUser />
        </Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-badge">0</span>
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;