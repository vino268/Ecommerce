import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "../styles/navbar.css";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">

      {/* LEFT LOGO */}
      <div className="logo">
        <Link to="/">TN AUTOMATION</Link>
      </div>

      {/* CENTER NAVIGATION LINKS */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
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
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;