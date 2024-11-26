import React from 'react';
import './Footer.css'; // Custom footer CSS

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Smart Insulin Calculator</h3>
          <p>
            Your trusted tool for managing insulin dosage. Stay healthy, stay informed.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#calculate">Calculator</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i>Facebook</a> 
            <a href="#"><i className="fab fa-twitter"></i>Twitter</a>
            <a href="#"><i className="fab fa-instagram"></i>Instagram</a>
            <a href="https://www.linkedin.com/in/kaveri-tupe/?originalSubdomain=in"><i className="fab fa-linkedin-in"></i>Linkedin</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Smart Insulin Calculator. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
