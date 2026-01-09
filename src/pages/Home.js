import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
import useScrollObserver from '../components/useScrollObserver';
import { AccreditationGrid } from '../components/AccreditationBadge';
import { FaShieldAlt, FaUserShield, FaCrown, FaCar, FaPeopleArrows, FaCalendarAlt } from 'react-icons/fa';
import '../styles/Home.css';
import frontTeamImage from '../media/teamImage.jpeg';
import frontTEamImage from '../media/teamBackImage.jpeg';
import officeFront from '../media/veecous-security-solutions-building.jpeg';

const Home = () => {
  useScrollObserver();

  const services = [
    {
      icon: <FaUserShield />,
      title: 'Armed and Unarmed Response',
      desc: 'Rapid deployment tactical teams on standby 24/7.'
    },
    {
      icon: <FaCrown  />,
      title: 'VIP protection services',
      desc: 'Advanced VIP protection for high-profile clients.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Access Control',
      desc: 'Biometric and gate automation for total control.'
    },
    {
      icon: <FaCar />,
      title: 'Patrol Services',
      desc: 'High-visibility vehicle patrols for crime deterrence.'
    },
    {
      icon: <FaPeopleArrows />,
      title: 'Crowd Control',
      desc: 'Professionally managed crowd control.'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Special events',
      desc: 'Ensuring safety at large gatherings and events.'
    }
  ];

  return (
    <div className="home-page">
      <ScrollToTop />
      
      {/* Hero with Tactical Background */}
      <Hero 
        title="Veecious" 
        subtitle="Security Solutions (PTY)Ltd"
        description="Providing elite protection services, tactical response, and integrated security systems for residential and corporate clients."
        backgroundImage="https://wallpapercave.com/wp/wp2444570.jpg"
        showButtons={true}
        height="100vh"
      />

      {/* Accreditation Section */}
      <section className="accreditation-section">
        <div className="container scroll-hidden scale-in">
          <div className="section-header">
            <h2 className="section-title">Fully Accredited</h2>
            <p className="section-subtitle">Compliant with PSIRA & SAPS Regulations</p>
          </div>
          <AccreditationGrid />
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header scroll-hidden">
            <h2 className="section-title">Our Capabilities</h2>
            
            <div className="capabilities-gallery">
              <img 
                src={frontTeamImage} 
                alt="Tactical Team" 
                className="cap-img"
              />
              <img 
                src={officeFront}
                alt="Security Technology" 
                className="cap-img"
              />
              <img 
                src={frontTEamImage}
                alt="Patrol Vehicle" 
                className="cap-img"
              />
            </div>

            <p className="section-subtitle">Comprehensive security tailored to your needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-card scroll-hidden delay-${index * 100}`}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <Link to="/services" className="service-link">View Details →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="emergency-section">
        <div className="container">
          <div className="emergency-content scroll-hidden scale-in">
            <h2 className="emergency-title">Immediate Threat?</h2>
            <p className="emergency-text">Our control room is active 24/7/365</p>
            <a href="tel:0834330177" className="emergency-phone pulse-animation">
              <span>Emergency Line</span>
              <strong>083 433 0177</strong>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;