import "../styles/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-full">

      <div className="login-overlay">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to your account</p>

          <form>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />

            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <p className="register-text">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>

    </div>
  );
}

export default Login;