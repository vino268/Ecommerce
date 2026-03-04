import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { services, serviceCategories } from "../data/services";
import "../styles/services.css";

function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  // Filter services by category
  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="services-page">
      {/* Header */}
      <div className="services-header">
        <h1>SERVICE</h1>
        <p>Professional installation, maintenance, and support services</p>
      </div>

      {/* Service Categories */}
      <div className="service-categories">
        {serviceCategories.map(cat => (
          <button 
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid - Simplified cards like products */}
      <div className="services-grid">
        {filteredServices.map(service => (
          <div 
            className="service-card" 
            key={service.id}
            onClick={() => navigate(`/service/${service.id}`)}
          >
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.name} />
            </div>
            <div className="service-info">
              <h3>{service.name}</h3>
              <span className="service-price">₹{service.price.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
