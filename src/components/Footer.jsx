import React from 'react';
import { 
  ArrowUp, 
  Linkedin, 
  Github, 
  Mail, 
  ShieldCheck 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Upper Row */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <ShieldCheck size={20} color="var(--accent-primary)" />
              <h3 style={{ margin: 0 }}>{portfolioData.personal.name}</h3>
            </div>
            <p>{portfolioData.personal.roleTitle}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <a href="#about" className="footer-link">About</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#workflows" className="footer-link">QA Expertise</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="footer-social-row">
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="social-icon-btn"
              title="Email Milan"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          <div>
            © 2026 {portfolioData.personal.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Engineered with React & Quality Best Practices</span>
            <button 
              onClick={scrollToTop} 
              className="back-to-top-btn"
              aria-label="Back to Top"
            >
              <span>Back to top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
