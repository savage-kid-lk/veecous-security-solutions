import React from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
import useScrollObserver from '../components/useScrollObserver';
import { FaCertificate, FaBullseye, FaBook, FaUserGraduate } from 'react-icons/fa';
import '../styles/Training.css';

const Training = () => {
  useScrollObserver();

  return (
    <div className="training-page">
      <ScrollToTop />
      
      <Hero 
        title="Training College"
        subtitle="Veecious Training"
        description="Accredited firearms competency and security grade training. Equip yourself with the skills needed for the industry."
        backgroundImage="https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        height="50vh"
        showButtons={true}
      />

      {/* PSIRA Grades Section */}
      <section className="training-section">
        <div className="container">
          <div className="section-header scroll-hidden">
             <h2 className="section-title">PSIRA Grades</h2>
             
             {/* New Training Images Gallery */}
             <div className="training-gallery">
               <img 
                 src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                 alt="Security Officer in Uniform" 
                 className="train-img"
               />
               <img 
                 src="https://images.pexels.com/photos/6090915/pexels-photo-6090915.jpeg" 
                 alt="Tactical Training" 
                 className="train-img"
               />
               <img 
                 src="https://images.pexels.com/photos/5202424/pexels-photo-5202424.jpeg" 
                 alt="Security Team Briefing" 
                 className="train-img"
               />
             </div>

             <p className="section-subtitle">Accredited Security Training Levels</p>
          </div>
          
          <div className="psira-grid">
            {[
              { grade: 'Grade E', title: 'Entry Level', desc: 'Patrol Officer / Guarding' },
              { grade: 'Grade D', title: 'Intermediate', desc: 'Access Control / Reports' },
              { grade: 'Grade C', title: 'Advanced Skill', desc: 'Reaction Officer / Senior' },
              { grade: 'Grade B', title: 'Supervisor', desc: 'Site Management / Control' },
              { grade: 'Grade A', title: 'Management', desc: 'Area Manager / Director' }
            ].map((item, index) => (
              <div key={index} className={`psira-card scroll-hidden scale-in delay-${index * 100}`}>
                <div className="psira-icon"><FaUserGraduate /></div>
                <h3>{item.grade}</h3>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firearms Competency Pricing */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header scroll-hidden">
            <h2 className="section-title">Firearms Competency</h2>
            <p className="section-subtitle">Private & Business Purpose Training</p>
          </div>

          <div className="pricing-grid">
            
            {/* Private Use Column */}
            <div className="pricing-card scroll-hidden slide-right">
              <div className="card-header">
                <FaBullseye className="card-icon" />
                <h3>Private Use</h3>
                <p>Basic Competency</p>
              </div>
              <ul className="price-list">
                <li>
                  <span>Legal (Firearm Act)</span>
                  <span className="price">R500</span>
                </li>
                <li>
                  <span>Handgun Basic</span>
                  <span className="price">R900</span>
                </li>
                <li>
                  <span>Self-Loading Rifle</span>
                  <span className="price">R900</span>
                </li>
                <li>
                  <span>Shotgun</span>
                  <span className="price">R900</span>
                </li>
                <li>
                  <span>Manually Operated</span>
                  <span className="price">R900</span>
                </li>
              </ul>
            </div>

            {/* Business Use Column */}
            <div className="pricing-card featured scroll-hidden scale-in">
              <div className="card-header">
                <FaCertificate className="card-icon" />
                <h3>Business Purpose</h3>
                <p>For Security Officers (Legal Included)</p>
              </div>
              <ul className="price-list">
                <li>
                  <span>Handgun Business</span>
                  <span className="price">R1000</span>
                </li>
                <li>
                  <span>Self-Loading Business</span>
                  <span className="price">R1000</span>
                </li>
                <li>
                  <span>Shotgun Business</span>
                  <span className="price">R1000</span>
                </li>
                <li>
                  <span>Manually Operated</span>
                  <span className="price">R1000</span>
                </li>
              </ul>
            </div>

             {/* Combos Column */}
             <div className="pricing-card scroll-hidden slide-left">
              <div className="card-header">
                <FaBook className="card-icon" />
                <h3>Combos</h3>
                <p>Value Packages (Legal Included)</p>
              </div>
              <ul className="price-list compact">
                <li><span>2 Combo Basic</span> <span className="price">R2000</span></li>
                <li><span>3 Combo Basic</span> <span className="price">R2800</span></li>
                <li><span>4 Combo Basic</span> <span className="price">R3600</span></li>
                <li className="divider"></li>
                <li><span>2 Combo Business</span> <span className="price">R2000</span></li>
                <li><span>3 Combo Business</span> <span className="price">R2800</span></li>
                <li><span>4 Combo Business</span> <span className="price">R3600</span></li>
                <li className="divider"></li>
                <li><span>1 Combo Basic + Business</span> <span className="price">R2000</span></li>
                <li><span>2 Combo Basic + Business</span> <span className="price">R3500</span></li>
                <li><span>3 Combo Basic + Business</span> <span className="price">R5000</span></li>
                <li><span>4 Combo Basic + Business</span> <span className="price">R6000</span></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;