import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Laptop,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Briefcase size={14} />
            <span>Professional Career History</span>
          </div>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-subtitle">
            Hands-on professional QA internship experience in AI-assisted web automation, Selenium framework development, and end-to-end manual testing.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {portfolioData.experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              {/* Timeline Node Indicator */}
              <div className="timeline-node">
                <div className="timeline-node-inner"></div>
              </div>

              {/* Timeline Card */}
              <div className="glass-card timeline-card">
                {/* Header */}
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role-title">{exp.role}</h3>
                    <div className="timeline-company">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Meta badges: Duration & Location */}
                  <div className="timeline-meta-tags">
                    <span className="timeline-badge">
                      <Calendar size={13} />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="timeline-badge">
                      {exp.mode === 'Remote' ? <Laptop size={13} /> : <MapPin size={13} />}
                      <span>{exp.location}</span>
                    </span>
                    <span className="badge badge-success">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Key Highlight Banner */}
                <div className="timeline-highlight-banner">
                  <Sparkles size={16} />
                  <span><strong>Core Focus:</strong> {exp.highlight}</span>
                </div>

                {/* Responsibilities List */}
                <div className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="timeline-resp-item">
                      <CheckCircle2 size={17} />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Skills Tags */}
                <div className="timeline-skills-row">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
