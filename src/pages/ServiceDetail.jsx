import { useParams, useNavigate, Link } from "react-router-dom";
import { services } from "../data/services";
import "../styles/serviceDetail.css";

function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === parseInt(id));
  
  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <p>The service you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/services')}>Back to Services</button>
      </div>
    );
  }

  // Get related services from same category
  const relatedServices = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  const handleBookService = () => {
    alert(`Service "${service.name}" booking request submitted! We will contact you soon.`);
  };

  return (
    <div className="service-detail-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/services">Services</Link>
        <span>/</span>
        <span>{service.name}</span>
      </nav>

      <div className="service-detail-container">
        {/* Service Image */}
        <div className="service-image-section">
          <img src={service.image} alt={service.name} />
          <span className="service-category-badge">{service.category}</span>
        </div>

        {/* Service Info */}
        <div className="service-info-section">
          <h1 className="service-title">{service.name}</h1>
          
          <div className="service-pricing">
            <span className="current-price">₹{service.price.toLocaleString()}</span>
            {service.originalPrice && (
              <span className="original-price">₹{service.originalPrice.toLocaleString()}</span>
            )}
            <span className="price-type">{service.priceType}</span>
            {service.originalPrice && (
              <span className="discount-badge">
                {Math.round((1 - service.price / service.originalPrice) * 100)}% OFF
              </span>
            )}
          </div>

          <p className="service-description">{service.fullDescription || service.description}</p>

          {service.duration && (
            <div className="service-duration">
              <strong>⏱ Duration:</strong> {service.duration}
            </div>
          )}

          <button className="book-service-btn" onClick={handleBookService}>
            Book This Service
          </button>

          <div className="contact-info">
            <p>📞 Call us: <a href="tel:+919828045796">+91 9828045796</a></p>
            <p>📧 Email: <a href="mailto:info@cctvkart.com">info@cctvkart.com</a></p>
          </div>
        </div>
      </div>

      {/* Service Details Tabs */}
      <div className="service-details-section">
        <div className="details-grid">
          {/* Features */}
          {service.features && service.features.length > 0 && (
            <div className="detail-card">
              <h3>✨ Service Features</h3>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* What's Included */}
          {service.includes && service.includes.length > 0 && (
            <div className="detail-card">
              <h3>📦 What's Included</h3>
              <ul>
                {service.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <div className="related-services">
          <h2>Related Services</h2>
          <div className="related-grid">
            {relatedServices.map(relService => (
              <div 
                className="related-service-card" 
                key={relService.id}
                onClick={() => navigate(`/service/${relService.id}`)}
              >
                <img src={relService.image} alt={relService.name} />
                <h4>{relService.name}</h4>
                <span className="related-price">₹{relService.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceDetail;
