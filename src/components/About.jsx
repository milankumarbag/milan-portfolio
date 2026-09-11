import React from 'react';
import { 
  UserCheck, 
  Bot, 
  Layers, 
  Database, 
  SearchCheck, 
  Terminal, 
  CheckCircle2, 
  Bug 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <UserCheck size={14} />
            <span>Profile & Engineering Mindset</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A quality-driven Software Test Engineer combining traditional automation rigour with modern AI-accelerated testing workflows.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Main Story & Technical Perspective */}
          <div className="glass-card about-text-card">
            <p className="about-paragraph">
              I am a <strong>Software Test Engineer</strong> with hands-on experience in <strong>Manual Testing</strong>, <strong>QA Automation</strong>, <strong>API Testing (Postman)</strong>, and <strong>AI-assisted Test Automation</strong>. Throughout my internships and technical projects, I have worked extensively with <strong>Selenium WebDriver</strong>, <strong>Java</strong>, <strong>TestNG</strong>, <strong>SQL</strong>, <strong>Playwright</strong>, <strong>Postman</strong>, and <strong>JavaScript</strong> to build maintainable, deterministic test suites and validate complex application and backend behaviors.
            </p>

            {/* Exact AI-Assisted Testing Callout */}
            <div className="about-highlight-box">
              <div className="about-highlight-title">
                <Bot size={18} color="var(--accent-secondary)" />
                <span>AI-Assisted Test Automation Experience</span>
              </div>
              <p className="about-highlight-text">
                "I have experience working with AI-assisted automation where I provide natural-language instructions to an AI automation tool, which generates JavaScript and Playwright automation code. I then review, execute, modify, and debug the generated scripts to validate application workflows and improve test reliability."
              </p>
            </div>

            {/* MERN Stack Background from a QA Perspective */}
            <p className="about-paragraph">
              In addition to QA methodologies, I have a foundational background in <strong>MERN Stack Development</strong> (HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB). Having developer-level knowledge allows me to inspect DOM hierarchies with precision, understand asynchronous state lifecycles, debug backend REST APIs using Postman, and anticipate potential edge-case failure points before code even reaches production.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
              <div className="badge badge-success">
                <CheckCircle2 size={13} />
                <span>Deterministic Testing</span>
              </div>
              <div className="badge">
                <Terminal size={13} />
                <span>Page Object Model (POM)</span>
              </div>
              <div className="badge">
                <Layers size={13} />
                <span>API Testing (Postman)</span>
              </div>
              <div className="badge">
                <Database size={13} />
                <span>Backend SQL Verification</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key QA Pillars */}
          <div className="about-side-stack">
            <div className="glass-card about-feature-card">
              <div className="feature-icon-box">
                <SearchCheck size={22} />
              </div>
              <div className="feature-content">
                <h4>Comprehensive Manual & STLC Rigour</h4>
                <p>
                  Thorough in test case authoring, functional & regression testing, UI validation, and structured defect lifecycle tracking with actionable reproduction steps.
                </p>
              </div>
            </div>

            <div className="glass-card about-feature-card">
              <div className="feature-icon-box">
                <Terminal size={22} />
              </div>
              <div className="feature-content">
                <h4>Modular Automation Frameworks</h4>
                <p>
                  Architecting robust automation scripts using Selenium WebDriver, Java, TestNG, and Data-Driven Testing (DDT) with clean Page Object Model architecture.
                </p>
              </div>
            </div>

            <div className="glass-card about-feature-card">
              <div className="feature-icon-box">
                <Bot size={22} />
              </div>
              <div className="feature-content">
                <h4>Next-Gen AI-Assisted Playwright Testing</h4>
                <p>
                  Synthesizing test scenarios from natural-language instructions, validating generated Playwright scripts, and executing end-to-end browser automation workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
