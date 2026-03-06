import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/checkout.css";

const STEPS = [
  { number: 1, label: "Personal Information" },
  { number: 2, label: "Addresses" },
  { number: 3, label: "Shipping method" },
  { number: 4, label: "Payment" },
];

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, cartCount, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [authTab, setAuthTab] = useState("guest");
  const [showDetails, setShowDetails] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Form state
  const [form, setForm] = useState({
    socialTitle: "",
    firstName: "",
    lastName: "",
    company: "",
    identificationNumber: "",
    email: "",
    createAccount: false,
    password: "",
    birthdate: "",
    receiveOffers: false,
    agreeTerms: false,
    newsletter: false,
    // Address fields
    address: "",
    addressComplement: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    phone: "",
    // Shipping
    shippingMethod: "free",
    // Payment
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return form.firstName.trim() && form.lastName.trim() && form.email.trim();
      case 2:
        return form.address.trim() && form.city.trim() && form.state.trim() && form.postalCode.trim() && form.phone.trim();
      case 3:
        return form.shippingMethod;
      case 4:
        return form.agreeTerms;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <h2>Your cart is empty</h2>
          <p>Add some products before checking out.</p>
          <button className="checkout-shop-btn" onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="order-success">
          <div className="success-icon">✓</div>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your order. You will receive a confirmation email shortly.</p>
          <button className="checkout-shop-btn" onClick={() => navigate("/products")}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      {/* Stepper */}
      <div className="checkout-stepper">
        {STEPS.map((step, index) => (
          <div key={step.number} className="stepper-item-wrapper">
            <div
              className={`stepper-item ${currentStep === step.number ? "active" : ""} ${currentStep > step.number ? "completed" : ""}`}
              onClick={() => currentStep > step.number && setCurrentStep(step.number)}
            >
              <div className="stepper-circle">
                {currentStep > step.number ? "✓" : step.number}
              </div>
              <span className="stepper-label">{step.label}</span>
            </div>
            {index < STEPS.length - 1 && <div className={`stepper-line ${currentStep > step.number ? "completed" : ""}`} />}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="checkout-progress-bar">
        <div className="progress-fill" style={{ width: `${(currentStep / 4) * 100}%` }} />
      </div>

      <div className="checkout-layout">
        {/* Left - Form Area */}
        <div className="checkout-form-area">
          <form onSubmit={handlePlaceOrder}>

            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="checkout-step">
                <h2>Personal Information</h2>

                <div className="auth-tabs">
                  <button
                    type="button"
                    className={`auth-tab ${authTab === "guest" ? "active" : ""}`}
                    onClick={() => setAuthTab("guest")}
                  >
                    Order as a guest
                  </button>
                  <button
                    type="button"
                    className={`auth-tab ${authTab === "signin" ? "active" : ""}`}
                    onClick={() => setAuthTab("signin")}
                  >
                    Sign in
                  </button>
                </div>

                <div className="form-group">
                  <label>Social title</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="socialTitle" value="Mr." checked={form.socialTitle === "Mr."} onChange={handleChange} />
                      <span>Mr.</span>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="socialTitle" value="Mrs." checked={form.socialTitle === "Mrs."} onChange={handleChange} />
                      <span>Mrs.</span>
                    </label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>First name <span className="required">*</span></label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
                    <small>Only letters and the dot (.) character, followed by a space, are allowed.</small>
                  </div>
                  <div className="form-group">
                    <label>Last name <span className="required">*</span></label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
                    <small>Only letters and the dot (.) character, followed by a space, are allowed.</small>
                  </div>
                </div>

                <div className="form-group">
                  <label>Company</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} />
                  <small className="optional-text">Optional</small>
                </div>

                <div className="form-group">
                  <label>Identification number</label>
                  <input type="text" name="identificationNumber" value={form.identificationNumber} onChange={handleChange} />
                  <small className="optional-text">Optional</small>
                </div>

                <div className="form-group">
                  <label>Email <span className="required">*</span></label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="createAccount" checked={form.createAccount} onChange={handleChange} />
                    <span><strong>Create an account</strong> (optional)</span>
                  </label>
                  <small className="hint-text"><em>And save time on your next order!</em></small>
                </div>

                {form.createAccount && (
                  <div className="form-group">
                    <label>Password <span className="required">*</span></label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} />
                  </div>
                )}

                <div className="form-group">
                  <label>Birthdate</label>
                  <input type="text" name="birthdate" value={form.birthdate} onChange={handleChange} placeholder="MM/DD/YYYY" />
                  <small>(E.g.: 05/31/1970)</small>
                  <small className="optional-text">Optional</small>
                </div>

                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="receiveOffers" checked={form.receiveOffers} onChange={handleChange} />
                    <span>Receive offers from our partners</span>
                  </label>

                  <label className="checkbox-label">
                    <input type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={handleChange} />
                    <span>I agree to the terms and conditions and the privacy policy</span>
                  </label>

                  <label className="checkbox-label">
                    <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} />
                    <span>Sign up for our newsletter</span>
                  </label>
                  <small className="hint-text"><em>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</em></small>
                </div>

                <div className="step-actions">
                  <button type="button" className="next-btn" onClick={handleNext} disabled={!canProceed()}>
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Addresses */}
            {currentStep === 2 && (
              <div className="checkout-step">
                <h2>Addresses</h2>

                <div className="form-group">
                  <label>Address <span className="required">*</span></label>
                  <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Street address" />
                </div>

                <div className="form-group">
                  <label>Address Complement</label>
                  <input type="text" name="addressComplement" value={form.addressComplement} onChange={handleChange} placeholder="Apartment, suite, etc. (optional)" />
                  <small className="optional-text">Optional</small>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City <span className="required">*</span></label>
                    <input type="text" name="city" value={form.city} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>State <span className="required">*</span></label>
                    <input type="text" name="state" value={form.state} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Postal Code <span className="required">*</span></label>
                    <input type="text" name="postalCode" value={form.postalCode} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <select name="country" value={form.country} onChange={handleChange}>
                      <option value="India">India</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone <span className="required">*</span></label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91" />
                </div>

                <div className="step-actions">
                  <button type="button" className="back-btn" onClick={handleBack}>← Back</button>
                  <button type="button" className="next-btn" onClick={handleNext} disabled={!canProceed()}>
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Shipping Method */}
            {currentStep === 3 && (
              <div className="checkout-step">
                <h2>Shipping Method</h2>

                <div className="shipping-options">
                  <label className={`shipping-option ${form.shippingMethod === "free" ? "selected" : ""}`}>
                    <input type="radio" name="shippingMethod" value="free" checked={form.shippingMethod === "free"} onChange={handleChange} />
                    <div className="shipping-info">
                      <span className="shipping-name">Free Delivery</span>
                      <span className="shipping-time">Delivery within 5-7 business days</span>
                    </div>
                    <span className="shipping-price free">Free</span>
                  </label>

                  <label className={`shipping-option ${form.shippingMethod === "express" ? "selected" : ""}`}>
                    <input type="radio" name="shippingMethod" value="express" checked={form.shippingMethod === "express"} onChange={handleChange} />
                    <div className="shipping-info">
                      <span className="shipping-name">Express Delivery</span>
                      <span className="shipping-time">Delivery within 2-3 business days</span>
                    </div>
                    <span className="shipping-price">₹199</span>
                  </label>

                  <label className={`shipping-option ${form.shippingMethod === "sameday" ? "selected" : ""}`}>
                    <input type="radio" name="shippingMethod" value="sameday" checked={form.shippingMethod === "sameday"} onChange={handleChange} />
                    <div className="shipping-info">
                      <span className="shipping-name">Same Day Delivery</span>
                      <span className="shipping-time">Delivery by end of today (order before 12 PM)</span>
                    </div>
                    <span className="shipping-price">₹499</span>
                  </label>
                </div>

                <div className="step-actions">
                  <button type="button" className="back-btn" onClick={handleBack}>← Back</button>
                  <button type="button" className="next-btn" onClick={handleNext} disabled={!canProceed()}>
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <div className="checkout-step">
                <h2>Payment</h2>

                <div className="payment-options">
                  <label className={`payment-option ${form.paymentMethod === "cod" ? "selected" : ""}`}>
                    <input type="radio" name="paymentMethod" value="cod" checked={form.paymentMethod === "cod"} onChange={handleChange} />
                    <div className="payment-info">
                      <span className="payment-name">💵 Cash on Delivery</span>
                      <span className="payment-desc">Pay when you receive your order</span>
                    </div>
                  </label>

                  <label className={`payment-option ${form.paymentMethod === "upi" ? "selected" : ""}`}>
                    <input type="radio" name="paymentMethod" value="upi" checked={form.paymentMethod === "upi"} onChange={handleChange} />
                    <div className="payment-info">
                      <span className="payment-name">📱 UPI Payment</span>
                      <span className="payment-desc">Pay using Google Pay, PhonePe, Paytm etc.</span>
                    </div>
                  </label>

                  <label className={`payment-option ${form.paymentMethod === "card" ? "selected" : ""}`}>
                    <input type="radio" name="paymentMethod" value="card" checked={form.paymentMethod === "card"} onChange={handleChange} />
                    <div className="payment-info">
                      <span className="payment-name">💳 Credit / Debit Card</span>
                      <span className="payment-desc">Visa, Mastercard, Rupay accepted</span>
                    </div>
                  </label>

                  <label className={`payment-option ${form.paymentMethod === "netbanking" ? "selected" : ""}`}>
                    <input type="radio" name="paymentMethod" value="netbanking" checked={form.paymentMethod === "netbanking"} onChange={handleChange} />
                    <div className="payment-info">
                      <span className="payment-name">🏦 Net Banking</span>
                      <span className="payment-desc">All major banks supported</span>
                    </div>
                  </label>
                </div>

                <div className="form-group" style={{ marginTop: "24px" }}>
                  <label className="checkbox-label">
                    <input type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={handleChange} />
                    <span>I agree to the terms and conditions and the privacy policy <span className="required">*</span></span>
                  </label>
                </div>

                <div className="step-actions">
                  <button type="button" className="back-btn" onClick={handleBack}>← Back</button>
                  <button type="submit" className="place-order-btn" disabled={!canProceed()}>
                    Place Order — ₹{(cartTotal + (form.shippingMethod === "express" ? 199 : form.shippingMethod === "sameday" ? 499 : 0)).toLocaleString()}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Right - Order Summary */}
        <div className="checkout-summary">
          <div className="summary-header">
            <span>{cartCount} item{cartCount > 1 ? "s" : ""}</span>
          </div>

          <button className="show-details-toggle" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Hide details" : "Show details"} {showDetails ? "↑" : "↓"}
          </button>

          {showDetails && (
            <div className="summary-items">
              {cartItems.map((item) => (
                <div className="summary-item" key={item.id}>
                  <div className="summary-item-image">
                    <img src={item.image} alt={item.name} />
                    <span className="summary-item-qty">{item.quantity}</span>
                  </div>
                  <div className="summary-item-info">
                    <p className="summary-item-name">{item.name}</p>
                    <p className="summary-item-price">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="summary-totals">
            <div className="summary-line">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>
            <div className="summary-line">
              <span>Shipping</span>
              <span className={form.shippingMethod === "free" ? "summary-free" : ""}>
                {form.shippingMethod === "free" ? "Free" : form.shippingMethod === "express" ? "₹199" : "₹499"}
              </span>
            </div>
            <div className="summary-line summary-total">
              <span>Total</span>
              <span>₹{(cartTotal + (form.shippingMethod === "express" ? 199 : form.shippingMethod === "sameday" ? 499 : 0)).toLocaleString()}</span>
            </div>
          </div>

          <div className="promo-section">
            <button className="promo-toggle" onClick={(e) => e.target.classList.toggle("open")}>
              Promo code <span>↓</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;