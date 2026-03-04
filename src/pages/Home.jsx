import "../styles/home.css";
import { useNavigate } from "react-router-dom";
     import { FaHome, FaExclamationTriangle, FaLightbulb, FaBell } from "react-icons/fa";

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

      {/* ================= PRODUCTS SECTION ================= */}

      <section className="home-products">
        <h2 className="products-title">SHOP PRODUCTS</h2>

        <div className="home-products-grid">
          <div className="home-product-card">
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/300999818/XW/EJ/PX/187604853/hikvision-cctv-camera-500x500.jpg" />
            <h4>Surveillance</h4>
            <p>₹267</p>
          </div>

          <div className="home-product-card">
            <img src="https://5.imimg.com/data5/SELLER/Default/2021/2/VK/YI/ZW/3245894/cctv-cameras-500x500.png" />
            <h4>Gurugram</h4>
            <p>₹299</p>
          </div>

          <div className="home-product-card">
            <img src="https://5.imimg.com/data5/ZX/AX/LP/SELLER-97075574/vector-stock-cctv-surveillance-security-camera.jpg" />
            <h4>TP-Link IP</h4>
            <p>₹499</p>
          </div>

          <div className="home-product-card">
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/300999818/XW/EJ/PX/187604853/hikvision-cctv-camera-500x500.jpg" />
            <h4>Speed Dome</h4>
            <p>₹628</p>
          </div>

          <div className="home-product-card">
            <img src="https://5.imimg.com/data5/SELLER/Default/2021/2/VK/YI/ZW/3245894/cctv-cameras-500x500.png" />
            <h4>Hybrid Bullet</h4>
            <p>₹820</p>
          </div>

          <div className="home-product-card">
            <img src="https://5.imimg.com/data5/ZX/AX/LP/SELLER-97075574/vector-stock-cctv-surveillance-security-camera.jpg" />
            <h4>Residential</h4>
            <p>₹450</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;