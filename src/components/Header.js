import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaShieldAlt, FaGraduationCap, FaEnvelope } from 'react-icons/fa'; // Icons imported
import '../styles/Header.css';
import logo from '../media/veecous-security-solutions-logo.jpeg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Added icons to the array
  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About Us', icon: <FaInfoCircle /> },
    { path: '/services', label: 'Services', icon: <FaShieldAlt /> },
    { path: '/training', label: 'Training', icon: <FaGraduationCap /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-placeholder">
              <img src={logo} alt="Veecious Security Solutions Logo" className="logo-image" />
              <div className="logo-text-container">
                <span className="logo-text">VEE<span className="logo-highlight">CIOUS</span></span>
                <span className="logo-subtext">SECURITY SOLUTIONS</span>
              </div>
            </div>
          </Link>

          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            {/* Background Animation Container (Only visible on mobile via CSS) */}
            <div className="mobile-menu-bg">
              <div className="crosshair c1"></div>
              <div className="crosshair c2"></div>
              <div className="crosshair c3"></div>
              <div className="star s1"></div>
              <div className="star s2"></div>
              <div className="star s3"></div>
            </div>

            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;