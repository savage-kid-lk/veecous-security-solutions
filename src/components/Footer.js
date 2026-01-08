import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaShieldAlt } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              <FaShieldAlt className="footer-icon" />
              Veecious Security
            </h3>
            <p className="footer-text">
              Professional security solutions backed by industry-leading 
              accreditations and experienced personnel.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Information</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>083 433 0177 / 082 866 0160</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@veecioussecuritysolutions.co.za</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>office@veecioussecuritysolutions.co.za</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Company Details</h4>
            <div className="company-details">
              <p><strong>Registration:</strong> 2020/900992/07</p>
              <p><strong>SARS VAT:</strong> 4320317516</p>
              <p><strong>PSIRA / SAPS:</strong> Accredited</p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/training">Training</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SingularityTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;