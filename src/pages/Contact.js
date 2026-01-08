import React, { useState } from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
import useScrollObserver from '../components/useScrollObserver';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  useScrollObserver();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <div className="contact-page">
      <ScrollToTop />
      
      <Hero 
        title="Contact Us"
        subtitle="Secure Your World"
        backgroundImage="https://www.getac.com/content/dam/uploads/2022/10/b360_havis_car_mount1-1024x685.jpg"
        height="50vh"
      />

      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Info Column */}
            <div className="contact-details scroll-hidden slide-right">
              <h2>Contact Information</h2>
              
              <div className="contact-method">
                <div className="method-icon"><FaPhone /></div>
                <div className="method-content">
                  <h3>Direct Lines</h3>
                  <a href="tel:0834330177">083 433 0177</a>
                  <a href="tel:0828660160">082 866 0160</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon"><FaEnvelope /></div>
                <div className="method-content">
                  <h3>Email Support</h3>
                  <a href="mailto:info@veecioussecuritysolutions.co.za">info@veecioussecuritysolutions.co.za</a>
                  <a href="mailto:office@veecioussecuritysolutions.co.za">office@veecioussecuritysolutions.co.za</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon"><FaClock /></div>
                <div className="method-content">
                  <h3>Operational Hours</h3>
                  <p>Control Room: 24 Hours / 7 Days</p>
                  <p>Office: Mon - Fri (08:00 - 17:00)</p>
                </div>
              </div>

              <div className="company-legal">
                <h3>Legal</h3>
                <p><strong>Reg:</strong> 2020/900992/07</p>
                <p><strong>VAT:</strong> 4320317516</p>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-wrapper scroll-hidden scale-in delay-200">
              <form className="contact-form">
                <h2>Send a Message</h2>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-row">
                  <div className="form-group"><input type="email" placeholder="Email" /></div>
                  <div className="form-group"><input type="tel" placeholder="Phone" /></div>
                </div>
                <div className="form-group">
                  <textarea rows="5" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className="emergency-banner-section">
        <div className="container">
          <div className="emergency-banner scroll-hidden">
             <h2>Emergency Hotline</h2>
             <a href="tel:0834330177" className="emergency-btn">
               <FaPhone /> 083 433 0177
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;