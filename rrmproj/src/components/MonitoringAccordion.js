import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MonitoringAccordion.css';

function AccordionItem({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion-item">
      <button className={`accordion-button ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
        {title}
      </button>
      <div className={`accordion-content ${isActive ? 'show' : ''}`}>
        {content}
      </div>
    </div>
  );
}

function MonitoringAccordion() {
  return (
    <div className="accordion-container">
      <AccordionItem
        title="Monitoring"
        content={
          <ul className="submenu">
            <li>
              <Link to="/sidebar/monitoring" className="sidebar-link">
                Overview
              </Link>
            </li>
            <li>
              <Link to="/sidebar/done-requests" className="sidebar-link">
                Done
              </Link>
            </li>
          </ul>
        }
      />
    </div>
  );
}

export default MonitoringAccordion;
