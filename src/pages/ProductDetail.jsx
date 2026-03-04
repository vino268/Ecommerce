import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "../styles/productDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("features");

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));

  // If product not found
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add to cart logic here
    alert(`Added ${quantity} x ${product.name} to cart!`);
  };

  const handleBuyNow = () => {
    // Navigate to checkout
    navigate("/checkout");
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span onClick={() => navigate("/")}>Home</span>
        <span className="separator">/</span>
        <span onClick={() => navigate("/products")}>Products</span>
        <span className="separator">/</span>
        <span className="current">{product.name}</span>
      </div>

      <div className="product-detail-container">
        {/* Product Image Section */}
        <div className="product-image-section">
          {product.discount > 0 && (
            <span className="discount-badge">-{product.discount}%</span>
          )}
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="brand-badge">
            <img 
              src="https://www.cpplusworld.com/assets/img/logo.png" 
              alt="CP PLUS" 
              className="brand-logo"
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="product-info-section">
          <span className="product-series">{product.series} Series</span>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-model">Model: {product.modelNo}</p>
          
          <div className="product-meta">
            <span className="category-tag">{product.category}</span>
            <span className="resolution-tag">{product.resolution}</span>
            <span className="body-type-tag">{product.bodyType}</span>
          </div>

          <p className="product-description">{product.description}</p>

          {/* Price Section */}
          <div className="price-section">
            <span className="current-price">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                <span className="savings">
                  You save ₹{(product.originalPrice - product.price).toLocaleString()}
                </span>
              </>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="quantity-section">
            <label>Quantity:</label>
            <div className="quantity-controls">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-now-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          {/* Quick Info */}
          <div className="quick-info">
            <div className="info-item">
              <span className="icon">✓</span>
              <span>Free Shipping</span>
            </div>
            <div className="info-item">
              <span className="icon">✓</span>
              <span>1 Year Warranty</span>
            </div>
            <div className="info-item">
              <span className="icon">✓</span>
              <span>Genuine Product</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="product-tabs">
        <div className="tab-headers">
          <button 
            className={activeTab === "features" ? "active" : ""}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button 
            className={activeTab === "specifications" ? "active" : ""}
            onClick={() => setActiveTab("specifications")}
          >
            Specifications
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "features" && (
            <div className="features-content">
              <h3>Key Features</h3>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "specifications" && (
            <div className="specifications-content">
              <h3>Technical Specifications</h3>
              <table className="specs-table">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td className="spec-name">{key}</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-grid">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <div 
                className="related-card" 
                key={relatedProduct.id}
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <img src={relatedProduct.image} alt={relatedProduct.name} />
                <h4>{relatedProduct.name}</h4>
                <p className="related-price">₹{relatedProduct.price.toLocaleString()}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
