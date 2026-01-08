import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import '../styles/FloatingIcons.css';

const FloatingIcons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:0834330177';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@veecioussecuritysolutions.co.za';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/270834330177', '_blank');
  };

  return (
    <div className="floating-icons">
      <div className="floating-icons-group">
        <button 
          className="floating-icon phone pulse-animation"
          onClick={handlePhoneClick}
          title="Call Us"
        >
          <FaPhone />
        </button>
        
        <button 
          className="floating-icon email"
          onClick={handleEmailClick}
          title="Email Us"
        >
          <FaEnvelope />
        </button>
        
        <button 
          className="floating-icon whatsapp"
          onClick={handleWhatsAppClick}
          title="WhatsApp Us"
        >
          <FaWhatsapp />
        </button>
      </div>

      {showScrollTop && (
        <button 
          className="floating-icon scroll-top float-animation"
          onClick={scrollToTop}
          title="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default FloatingIcons;