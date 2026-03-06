import "../styles/register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-page">

      <div className="register-container">

        <h2>Create Account</h2>

        <form className="register-form">

          <div className="form-group">
            <label>First name</label>
            <input type="text" />
            <small>Only letters and the dot (.) character, followed by a space, are allowed.</small>
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input type="text" />
            <small>Only letters and the dot (.) character, followed by a space, are allowed.</small>
          </div>

          <div className="form-group">
            <label>Company</label>
            <input type="text" />
            <small>Optional</small>
          </div>

          <div className="form-group">
            <label>Identification number</label>
            <input type="text" />
            <small>Optional</small>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-box">
              <input type="password" />
              <button type="button">👁</button>
            </div>
          </div>

          <div className="form-group">
            <label>Birthdate</label>
            <input type="date" />
            <small>(E.g.: 05/31/1970)</small>
          </div>

          <div className="checkbox-group">
            <label>
              <input type="checkbox" />
              Receive offers from our partners
            </label>

            <label>
              <input type="checkbox" />
              I agree to the terms and conditions and the privacy policy
            </label>

            <label>
              <input type="checkbox" />
              Sign up for our newsletter
            </label>
          </div>

          <button className="register-btn">Register</button>

          <p className="privacy-text">
            The personal data you provide is used to answer queries,
            process orders or allow access to specific information.
          </p>

          <p className="login-link">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Register;