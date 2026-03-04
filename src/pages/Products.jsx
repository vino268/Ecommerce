function Products() {
  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>

      <div className="products-grid">

        <div className="product-card">
          <img src="https://picsum.photos/300/200?1" alt="Camera" />
          <h3>2MP Dome Camera</h3>
          <p>₹1499</p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src="https://picsum.photos/300/200?2" alt="Camera" />
          <h3>4MP Bullet Camera</h3>
          <p>₹2499</p>
          <button>Add to Cart</button>
        </div>

      </div>
    </div>
  );
}

export default Products;