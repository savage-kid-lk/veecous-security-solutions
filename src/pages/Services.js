import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
import useScrollObserver from '../components/useScrollObserver';
import { 
  FaUserShield, FaShieldAlt, FaUserTie, FaIndustry, 
  FaUsers, FaCar, FaIdBadge, FaClipboardCheck 
} from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  useScrollObserver();

  // Services list derived from your storefront image
  const services = [
    {
      icon: <FaUserShield />,
      title: 'Armed & Unarmed Reaction',
      description: 'Rapid deployment tactical teams for immediate alarm response and threat neutralization.',
      features: ['24/7 Control Room Dispatch', 'GPS Tracked Vehicles', 'Tactical Support']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Guarding Division',
      description: 'Highly trained Armed and Unarmed guards for static and roaming property protection.',
      features: ['Access Control', 'Perimeter Patrols', 'Daily Occurrence Reports']
    },
    {
      icon: <FaUserTie />,
      title: 'VIP Protection',
      description: 'Close protection officers (CPO) ensuring safety for high-profile individuals and executives.',
      features: ['Route Planning', 'Threat Assessment', 'Discreet Protection']
    },
    {
      icon: <FaIndustry />,
      title: 'Retail & Industrial',
      description: 'Specialized security for shopping centers, warehouses, and industrial sites.',
      features: ['Loss Prevention', 'Stock Control', 'Safety Compliance']
    },
    {
      icon: <FaUsers />,
      title: 'Crowd Control & Events',
      description: 'Management of large gatherings and special events to ensure public safety and order.',
      features: ['Event Risk Analysis', 'Access Management', 'Emergency Evacuation Plans']
    },
    {
      icon: <FaCar />,
      title: 'Escorts & Patrols',
      description: 'Secure cargo escorts and high-visibility neighborhood patrols.',
      features: ['High-Value Cargo Escort', 'Visible Deterrence', 'Incident Response']
    },
    {
      icon: <FaIdBadge />,
      title: 'Access Control',
      description: 'Strict monitoring of entry and exit points using advanced biometrics and manual checks.',
      features: ['Visitor Logs', 'Gate Automation', 'Vehicle Searches']
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Consultant Services',
      description: 'Expert security auditing and risk assessment for businesses and private estates.',
      features: ['Site Risk Analysis', 'Policy Development', 'System Upgrades']
    }
  ];

  return (
    <div className="services-page">
      <ScrollToTop />
      
      <Hero 
        title="Our Services"
        subtitle="Offensive Defence"
        backgroundImage="https://www.twincitysecurityal.com/images/AdobeStock_297026455_1.jpeg"
        height="50vh"
        showButtons={false}
      />

      <section className="services-list">
        <div className="container">
          <div className="section-header scroll-hidden">
             <h2 className="section-title">Operational Capabilities</h2>
             <p className="section-subtitle">Comprehensive solutions tailored to your specific threat profile</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item scroll-hidden scale-in">
                <div className="service-icon-container">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Updated Button Block */}
                <a 
                  href={`https://wa.me/27834330177?text=Hi%20I%20would%20like%20a%20quote%20for%20${encodeURIComponent(service.title)}`}
                  className="service-inquiry-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
                >
                  Request Quote
                </a>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;