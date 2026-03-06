import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart</h2>
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added any products yet.</p>
          <Link to="/products" className="shop-now-btn">Shop Now</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <p className="cart-count-info">{cartCount} item{cartCount > 1 ? "s" : ""} in your cart</p>

      <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>

      <div className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              {/* Product Image */}
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>

              {/* Product Details */}
              <div className="cart-item-details">
                <div className="cart-item-top">
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    {item.modelNo && <p className="item-model">{item.modelNo}</p>}
                    {item.category && <span className="item-category">{item.category}</span>}
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)} title="Remove">✕</button>
                </div>

                <div className="cart-item-bottom">
                  <div className="cart-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <span className="item-price">₹{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal ({cartCount} items)</span>
            <span>₹{cartTotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span className="free-shipping">Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{cartTotal.toLocaleString()}</span>
          </div>
          <button className="checkout-btn" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
          <Link to="/products" className="continue-shopping">← Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;