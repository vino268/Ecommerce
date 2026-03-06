import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products, categories, resolutions } from "../data/products";
import "../styles/products.css";

function Products() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedResolution, setSelectedResolution] = useState("All");
  const [sortBy, setSortBy] = useState("relevance");

  // Filter products by category and resolution
  let filteredProducts = products;
  
  if (selectedCategory !== "All") {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }
  
  if (selectedResolution !== "All") {
    filteredProducts = filteredProducts.filter(p => p.resolution === selectedResolution);
  }

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "discount":
        return b.discount - a.discount;
      default:
        return 0;
    }
  });

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="products-page">
      {/* Header */}
      <div className="products-header">
        <h1>CP PLUS Security Products</h1>
        <p>Explore our range of high-quality CP PLUS cameras and surveillance systems</p>
      </div>

      {/* Filters */}
      <div className="products-filters">
        <div className="filter-group">
          <label>Category:</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Resolution:</label>
          <select 
            value={selectedResolution} 
            onChange={(e) => setSelectedResolution(e.target.value)}
          >
            {resolutions.map(res => (
              <option key={res} value={res}>{res}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="relevance">Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="discount">Discount</option>
          </select>
        </div>

        <p className="product-count">{sortedProducts.length} products found</p>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {sortedProducts.map(product => (
          <div 
            className="product-card" 
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          >
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">₹{product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;