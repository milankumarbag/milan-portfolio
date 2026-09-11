import React from 'react';
import { ShieldCheck, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const RecruiterGlance = () => {
  const icons = [
    <ShieldCheck size={20} />,
    <Sparkles size={20} />,
    <Briefcase size={20} />,
    <GraduationCap size={20} />
  ];

  return (
    <div className="recruiter-glance-section">
      <div className="container">
        <div className="recruiter-glance-grid">
          {portfolioData.recruiterGlance.map((item, index) => (
            <div key={index} className="glance-card">
              <div className="glance-icon-row">
                <span className="glance-label">{item.label}</span>
                <div className="glance-icon">
                  {icons[index]}
                </div>
              </div>
              <div className="glance-value">{item.value}</div>
              <div className="glance-detail">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
