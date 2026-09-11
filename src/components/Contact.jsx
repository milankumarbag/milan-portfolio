import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Info
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = ({ showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    showToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields.');
      return;
    }

    // Construct mailto link with pre-filled content so user's email client opens reliably
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} regarding SDET / QA Roles`);
    const mailtoBody = encodeURIComponent(`Hi Milan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setFormSubmitted(true);
    showToast('Opening your default email client with your drafted message.');
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Build Quality Software Together</h2>
          <p className="section-subtitle">
            I am currently open to opportunities as a <strong>Software Test Engineer</strong>, <strong>QA Automation Engineer</strong>, <strong>SDET</strong>, or <strong>Automation Test Engineer</strong>.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-wrapper">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="contact-info-col">
            <div className="glass-card contact-intro-card">
              <p className="contact-lead">
                Looking for a dedicated QA Engineer to ensure software reliability, build scalable test automation, or streamline testing with AI tools?
              </p>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                Feel free to reach out directly via email, phone, or connect on professional networks. I typically respond promptly!
              </p>
            </div>

            {/* Direct Contact Items */}
            <div className="contact-details-list">
              {/* Email Item */}
              <div className="contact-detail-item">
                <div className="contact-detail-left">
                  <div className="contact-detail-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="contact-detail-title">Direct Email</div>
                    <a href={`mailto:${portfolioData.personal.email}`} className="contact-detail-value" style={{ color: 'var(--accent-primary)' }}>
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.email, 'Email')}
                  className="copy-btn"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'Email' ? <Check size={14} color="var(--qa-success)" /> : <Copy size={14} />}
                  <span>{copiedField === 'Email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Item */}
              <div className="contact-detail-item">
                <div className="contact-detail-left">
                  <div className="contact-detail-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="contact-detail-title">Phone Number</div>
                    <a href={`tel:${portfolioData.personal.phone}`} className="contact-detail-value">
                      +91 {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.phone, 'Phone')}
                  className="copy-btn"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'Phone' ? <Check size={14} color="var(--qa-success)" /> : <Copy size={14} />}
                  <span>{copiedField === 'Phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Item */}
              <div className="contact-detail-item">
                <div className="contact-detail-left">
                  <div className="contact-detail-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="contact-detail-title">Location</div>
                    <div className="contact-detail-value">
                      {portfolioData.personal.location}
                    </div>
                  </div>
                </div>
                <span className="badge badge-success">Open to Relocate / Remote</span>
              </div>

              {/* Social Channels Item */}
              <div className="contact-detail-item">
                <div className="contact-detail-left">
                  <div className="contact-detail-icon">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <div className="contact-detail-title">Professional Networks</div>
                    <div className="contact-detail-value" style={{ display: 'flex', gap: '1rem', marginTop: '0.2rem' }}>
                      <a 
                        href={portfolioData.personal.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-primary)', fontSize: '0.9rem' }}
                      >
                        <span>LinkedIn</span>
                        <ExternalLink size={13} />
                      </a>
                      <a 
                        href={portfolioData.personal.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-primary)', fontSize: '0.9rem' }}
                      >
                        <span>GitHub</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass-card contact-form-card">
            <h3 className="contact-form-title">Send a Direct Message</h3>
            <p className="contact-form-subtitle">
              Fill out this quick form to draft and send an email directly to <strong>{portfolioData.personal.email}</strong>.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe (Hiring Manager / Recruiter)"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Your Email Address *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. name@company.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject / Target Role</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="e.g. SDET Opportunity / QA Automation Role"
                  value={formData.subject}
                  onChange={handleFormChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Hi Milan, I came across your portfolio and would like to discuss an opportunity..."
                  value={formData.message}
                  onChange={handleFormChange}
                  className="form-textarea"
                ></textarea>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1, minWidth: '200px' }}>
                  <Send size={16} />
                  <span>Send Message via Email</span>
                </button>

                <a 
                  href={`mailto:${portfolioData.personal.email}`}
                  className="btn btn-secondary"
                  title="Open Default Mail App"
                >
                  <Mail size={16} />
                  <span>Direct Mail</span>
                </a>
              </div>

              {formSubmitted && (
                <div className="form-status-msg success">
                  <Check size={16} />
                  <span>Your email client was triggered with your drafted message. You can also write directly to <strong>{portfolioData.personal.email}</strong>.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
