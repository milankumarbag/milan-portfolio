import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Linkedin, 
  Github, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ theme, toggleTheme, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'experience', 'skills', 'workflows', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'QA Expertise', href: '#workflows', id: 'workflows' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-logo" aria-label="Milan Kumar Bag Homepage">
          <span>{portfolioData.personal.name}</span>
          <span className="nav-logo-badge">SDET / QA</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions (Resume CTA, Social Icons, Theme Toggle) */}
        <div className="nav-actions">
          {/* LinkedIn Icon Link */}
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

          {/* GitHub Icon Link */}
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

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Prominent Download Resume Button */}
          <button
            onClick={onOpenResume}
            className="btn btn-primary btn-sm"
            aria-label="Download or View Resume"
          >
            <FileText size={16} />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={handleLinkClick}
            className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
          >
            <span>{link.name}</span>
            {activeSection === link.id && <CheckCircle size={16} color="var(--accent-primary)" />}
          </a>
        ))}

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            <FileText size={18} />
            <span>Download Resume</span>
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};
