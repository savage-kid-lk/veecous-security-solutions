import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
import useScrollObserver from '../components/useScrollObserver';
import { AccreditationGrid } from '../components/AccreditationBadge';
import { FaUsers, FaAward, FaClock, FaHandshake } from 'react-icons/fa';
import '../styles/About.css';
import teamImage from '../media/teamImage.jpeg';

const About = () => {
  useScrollObserver();

  const values = [
    { icon: <FaUsers />, title: 'Elite Personnel', desc: 'Strictly vetted and highly trained security officers.' },
    { icon: <FaAward />, title: 'Certified Excellence', desc: 'Full compliance with all SA security legislation.' },
    { icon: <FaClock />, title: '24/7 Watch', desc: 'Round-the-clock monitoring and rapid response.' },
    { icon: <FaHandshake />, title: 'Integrity', desc: 'Transparent reporting and honest client relationships.' }
  ];

  return (
    <div className="about-page">
      <ScrollToTop />
      
      <Hero 
        title="About Us"
        subtitle="Our Legacy of Protection"
        backgroundImage="https://tse3.mm.bing.net/th/id/OIP.2AppDh4n_3Sw60jLEBgA1QHaFS?w=1024&h=731&rs=1&pid=ImgDetMain&o=7&rm=3"
        height="50vh"
      />

      <section className="about-content-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text scroll-hidden slide-right">
              <h2>Your Trusted Security Partner</h2>
              <p>
                Veecious Security Solutions (PTY) Ltd, established under registration 
                2020/900992/07, is a premier security service provider committed to 
                delivering excellence.
              </p>
              <p>
                We do not just provide guards; we provide peace of mind. Our approach combines
                tactical expertise with community-focused service.
              </p>
              
              <div className="company-details">
                <div className="detail-item">
                  <strong>Reg No:</strong> 2020/900992/07
                </div>
                <div className="detail-item">
                  <strong>VAT No:</strong> 4320317516
                </div>
                <div className="detail-item">
                  <strong>SAPS / PSIRA / PFTC / SASSETA / SASA:</strong> Accredited
                </div>
              </div>
            </div>
            
            <div className="about-image scroll-hidden scale-in delay-200">
              <div className="team-image-container">
                <img src={teamImage} alt="Our Team" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title scroll-hidden">Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className={`value-card scroll-hidden delay-${index * 100}`}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="accreditation-section">
        <div className="container scroll-hidden">
            <h2 className="section-title">Our Accreditations</h2>
            <AccreditationGrid />
        </div>
      </section>
    </div>
  );
};

export default About;