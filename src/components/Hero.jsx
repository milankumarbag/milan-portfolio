import React from 'react';
import { 
  Briefcase, 
  Code2, 
  FileDown, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Bio, Value Prop & CTAs */}
          <div className="hero-content">
            {/* Status Pill */}
            <div className="hero-badge-container">
              <div className="hero-status-pill">
                <span className="status-dot"></span>
                <span>{portfolioData.personal.statusText}</span>
              </div>
              <span className="badge">
                <Sparkles size={13} />
                <span>AI-Assisted QA Automation</span>
              </span>
            </div>

            {/* Name Heading */}
            <h1 className="hero-name">
              {portfolioData.personal.name}
            </h1>

            {/* Professional Title */}
            <div className="hero-title-highlight">
              <span>{portfolioData.personal.roleTitle}</span>
            </div>

            {/* Tagline */}
            <p className="hero-tagline">
              "{portfolioData.personal.tagline}"
            </p>

            {/* Detailed Hands-on Tech Summary */}
            <p className="hero-description">
              Hands-on engineering experience in <strong>Manual Testing</strong>, <strong>Selenium WebDriver</strong>, <strong>Java</strong>, <strong>TestNG</strong>, <strong>SQL</strong>, <strong>Playwright</strong>, <strong>JavaScript</strong>, <strong>API Testing (Postman)</strong>, and <strong>AI-assisted test automation</strong>. Dedicated to verifying application behavior, designing robust Page Object Models, and accelerating release cycles with quality-first automation.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#experience" className="btn btn-primary btn-lg">
                <Briefcase size={18} />
                <span>View My Experience</span>
                <ArrowRight size={16} />
              </a>

              <a href="#projects" className="btn btn-secondary btn-lg">
                <Code2 size={18} />
                <span>View Projects</span>
              </a>

              <button onClick={onOpenResume} className="btn btn-outline btn-lg" aria-label="Download Resume">
                <FileDown size={18} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick Contact & Social Links */}
            <div className="hero-social-row">
              <span className="hero-social-label">Connect & Location:</span>
              <div className="hero-social-links">
                <a 
                  href={portfolioData.personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  title="LinkedIn Profile Placeholder"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={portfolioData.personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  title="GitHub Profile Placeholder"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a 
                  href={`mailto:${portfolioData.personal.email}`} 
                  className="social-icon-btn"
                  title={`Email ${portfolioData.personal.email}`}
                  aria-label="Email Milan"
                >
                  <Mail size={18} />
                </a>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <MapPin size={15} color="var(--accent-primary)" />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Profile Photo with Modern Tech Frame */}
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              {/* Floating Badge Top Left */}
              <div className="floating-badge badge-top-left">
                <Cpu size={16} color="var(--accent-primary)" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Automation Stack</div>
                  <div style={{ fontWeight: 700 }}>Playwright & Selenium</div>
                </div>
              </div>

              {/* Photo Frame Container */}
              <div className="hero-image-frame">
                <img 
                  src={portfolioData.personal.photoUrl} 
                  alt={`${portfolioData.personal.name} - Software Test Engineer & SDET`}
                  className="hero-image"
                  loading="eager"
                />
                <div className="hero-image-overlay">
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem' }}>
                      {portfolioData.personal.name}
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                      SDET | QA Automation Engineer
                    </div>
                  </div>
                  <span className="hero-overlay-tag">
                    Verified QA
                  </span>
                </div>
              </div>

              {/* Floating Badge Bottom Right */}
              <div className="floating-badge badge-bottom-right">
                <CheckCircle2 size={16} color="var(--qa-success)" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Specialization</div>
                  <div style={{ fontWeight: 700 }}>AI-Assisted Testing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
