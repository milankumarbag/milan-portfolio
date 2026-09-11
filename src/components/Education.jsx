import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Building 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education & Credentials</h2>
          <p className="section-subtitle">
            Strong academic grounding in Computer Science, software engineering principles, algorithms, and database systems.
          </p>
        </div>

        {/* Education Cards */}
        <div className="education-grid">
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className="glass-card education-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="edu-icon-badge">
                  <GraduationCap size={24} />
                </div>
                <span className="edu-score-badge">
                  {edu.score}
                </span>
              </div>

              <div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.35rem' }}>
                  <Building size={15} />
                  <span>{edu.institution}</span>
                </div>
              </div>

              <div className="edu-meta-row">
                <span className="timeline-badge">
                  <Calendar size={13} />
                  <span>{edu.duration}</span>
                </span>
                <span className="timeline-badge">
                  <MapPin size={13} />
                  <span>{edu.location}</span>
                </span>
              </div>

              <div className="edu-highlights">
                {edu.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="edu-highlight-item">
                    <CheckCircle2 size={15} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
