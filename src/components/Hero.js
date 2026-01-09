import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = ({
    title,
    subtitle,
    description,
    backgroundImage,
    showButtons = false,
    height = '50vh'
}) => {

    const bgStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        minHeight: height
    };

    return (
        <section className="hero-component" style={bgStyle}>
            <div className="container">
                <div className="hero-content scroll-hidden scale-in">
                    <h1 className="hero-title">
                        {title}
                        {subtitle && <span className="hero-subtitle">{subtitle}</span>}
                    </h1>

                    {description && <p className="hero-desc">{description}</p>}

                    {showButtons && (
                        <div className="hero-actions">
                            <Link to="/services" className="btn btn-primary">Our Services</Link>
                            <a
                                href="https://wa.me/270834330177?text=Hi%20I%20would%20like%20a%20quote"
                                className="btn btn-secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Get Quote</a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;