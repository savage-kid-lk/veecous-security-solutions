import React from 'react';
import { FaShieldAlt, FaCertificate, FaUserShield, FaGraduationCap, FaBuilding } from 'react-icons/fa';
import '../styles/AccreditationBadge.css';

const AccreditationBadge = ({ name, icon: Icon }) => {
  return (
    <div className="accreditation-badge fade-in">
      <div className="badge-icon">
        <Icon />
      </div>
      <span className="badge-name">{name}</span>
    </div>
  );
};

export const AccreditationGrid = () => {
  const accreditations = [
    { name: 'SAPS', icon: FaShieldAlt },
    { name: 'PFTC', icon: FaCertificate },
    { name: 'PSIRA', icon: FaUserShield },
    { name: 'SASSETA', icon: FaGraduationCap },
    { name: 'SASA', icon: FaBuilding },
  ];

  return (
    <div className="accreditation-grid">
      {accreditations.map((acc) => (
        <AccreditationBadge key={acc.name} {...acc} />
      ))}
    </div>
  );
};

export default AccreditationBadge;