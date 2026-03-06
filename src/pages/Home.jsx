import "../styles/home.css";
import { useNavigate } from "react-router-dom";
     import { FaHome, FaExclamationTriangle, FaLightbulb, FaBell, FaShieldAlt, FaUsers, FaAward, FaHeadset, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>
            "Protect What Matters Most. Explore
            <br /> Cutting-Edge Security Solutions"
          </h1>

          <p>
            Secure Your World. Unrivaled E-commerce Security Cameras
            for Peace of Mind.
          </p>
        </div>

        <div className="camera-section">
          {/* Left */}
          <div className="camera-box">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/4/300999818/XW/EJ/PX/187604853/hikvision-cctv-camera-500x500.jpg"
              alt="Dome Camera"
            />
          </div>

          {/* Center */}
          <div className="camera-wrapper">
            <div className="camera-center">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2021/2/VK/YI/ZW/3245894/cctv-cameras-500x500.png"
                alt="Bullet Camera"
              />
            </div>

            <h3
              className="shop-text"
              onClick={() => navigate("/products")}
            >
              SHOP NOW
            </h3>
          </div>

          {/* Right */}
          <div className="camera-box">
            <img
              src="https://5.imimg.com/data5/ZX/AX/LP/SELLER-97075574/vector-stock-cctv-surveillance-security-camera.jpg"
              alt="Outdoor Camera"
            />
          </div>
        </div>
      </section>


{/* ================= FEATURES SECTION ================= */}

<section className="features-section">

  <div className="feature-item">
    <FaHome className="feature-icon" />
    <p>Always monitoring you're home</p>
  </div>

  <div className="feature-divider"></div>

  <div className="feature-item">
    <FaExclamationTriangle className="feature-icon" />
    <p>Get Alert in every trouble</p>
  </div>

  <div className="feature-divider"></div>

  <div className="feature-item">
    <FaLightbulb className="feature-icon" />
    <p>Smart motion detection</p>
  </div>

  <div className="feature-divider"></div>

  <div className="feature-item">
    <FaBell className="feature-icon" />
    <p>Send alert to authority</p>
  </div>

</section>

      {/* ================= ABOUT US SECTION ================= */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-content">
            <span className="section-tag">WHO WE ARE</span>
            <h2 className="section-title">About Us</h2>
            <p className="about-text">
              <strong>TN Automation</strong> is a leading provider of advanced CCTV surveillance and security solutions based in Tamil Nadu, India. With over 10 years of experience, we specialize in designing, installing, and maintaining cutting-edge security systems for homes, businesses, and industrial facilities.
            </p>
            <p className="about-text">
              We are authorized dealers for <strong>CP PLUS</strong>, one of the world's most trusted security brands. Our team of certified technicians ensures seamless installation and 24/7 support for all your security needs.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <FaShieldAlt className="stat-icon" />
                <div>
                  <h3>500+</h3>
                  <p>Installations</p>
                </div>
              </div>
              <div className="stat-item">
                <FaUsers className="stat-icon" />
                <div>
                  <h3>300+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="stat-item">
                <FaAward className="stat-icon" />
                <div>
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="stat-item">
                <FaHeadset className="stat-icon" />
                <div>
                  <h3>24/7</h3>
                  <p>Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="about-img-card">
              <img src="/images/products/dome-camera-4mp.svg" alt="Security Camera" />
            </div>
            <div className="about-badge">
              <span>Authorized</span>
              <strong>CP PLUS Dealer</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT US SECTION ================= */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-info">
            <span className="section-tag">GET IN TOUCH</span>
            <h2 className="section-title">Contact Us</h2>
            <p className="contact-desc">
              Have questions about our products or services? We'd love to hear from you. Reach out and our team will get back to you within 24 hours.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Our Office</h4>
                  <p>123 Security Street, Coimbatore,<br />Tamil Nadu - 641001, India</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210<br />+91 87654 32109</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@tnautomation.com<br />support@tnautomation.com</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <FaClock />
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will get back to you soon.'); }}>
              <h3>Send us a message</h3>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>First Name *</label>
                  <input type="text" placeholder="John" required />
                </div>
                <div className="contact-form-group">
                  <label>Last Name *</label>
                  <input type="text" placeholder="Doe" required />
                </div>
              </div>

              <div className="contact-form-group">
                <label>Email *</label>
                <input type="email" placeholder="john@example.com" required />
              </div>

              <div className="contact-form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>

              <div className="contact-form-group">
                <label>Subject *</label>
                <select required>
                  <option value="">Select a subject</option>
                  <option value="product">Product Inquiry</option>
                  <option value="service">Service Request</option>
                  <option value="support">Technical Support</option>
                  <option value="quote">Request a Quote</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="contact-form-group">
                <label>Message *</label>
                <textarea rows="4" placeholder="Tell us how we can help you..." required></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;