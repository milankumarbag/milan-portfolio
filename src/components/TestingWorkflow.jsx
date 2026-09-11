import React, { useState } from 'react';
import { 
  Workflow, 
  Bot, 
  Terminal, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  ShieldAlert, 
  Play, 
  FileCode2, 
  CheckCircle2, 
  Sliders, 
  Database 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const TestingWorkflow = () => {
  const [activeWorkflowId, setActiveWorkflowId] = useState('ai-playwright');

  const currentWorkflow = portfolioData.workflows.find(w => w.id === activeWorkflowId) || portfolioData.workflows[0];

  const stepIcons = {
    '01': <Sliders size={18} />,
    '02': <FileCode2 size={18} />,
    '03': <Bot size={18} />,
    '04': <Terminal size={18} />,
    '05': <Play size={18} />,
    '06': <CheckCircle2 size={18} />,
    '07': <ShieldAlert size={18} />
  };

  return (
    <section id="workflows" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Workflow size={14} />
            <span>QA Architecture & Execution Pipelines</span>
          </div>
          <h2 className="section-title">Testing & Automation Expertise</h2>
          <p className="section-subtitle">
            A structured visual breakdown of my two core QA execution methodologies: modern AI-assisted test engineering and robust enterprise Selenium frameworks.
          </p>
        </div>

        {/* Workflow Switcher Tabs */}
        <div className="workflow-tabs-container">
          <button
            onClick={() => setActiveWorkflowId('ai-playwright')}
            className={`workflow-tab-btn ${activeWorkflowId === 'ai-playwright' ? 'active' : ''}`}
          >
            <Bot size={18} />
            <span>AI-Assisted Playwright Pipeline</span>
          </button>

          <button
            onClick={() => setActiveWorkflowId('selenium-testng')}
            className={`workflow-tab-btn ${activeWorkflowId === 'selenium-testng' ? 'active' : ''}`}
          >
            <Terminal size={18} />
            <span>Selenium & TestNG Architecture</span>
          </button>
        </div>

        {/* Workflow Showcase Board */}
        <div className="glass-card workflow-board">
          <div className="workflow-board-header">
            <span className="badge badge-success" style={{ marginBottom: '0.75rem' }}>
              {currentWorkflow.badge}
            </span>
            <h3 className="workflow-board-title">{currentWorkflow.title}</h3>
            <p className="workflow-board-sub">{currentWorkflow.subtitle}</p>
          </div>

          {/* Pipeline Interactive Step Flow Cards */}
          <div className="pipeline-steps-grid">
            {currentWorkflow.steps.map((step, idx) => (
              <div key={step.stepNumber} className="step-card">
                <div className="step-header">
                  <span className="step-number">Step {step.stepNumber}</span>
                  <div className="step-icon">
                    {stepIcons[step.stepNumber] || <CheckCircle size={18} />}
                  </div>
                </div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Callout Info Banner */}
          <div style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.75rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--accent-border)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--qa-badge-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                flexShrink: 0
              }}>
                <Sparkles size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  {activeWorkflowId === 'ai-playwright' ? 'Efficiency & Speed Advantage' : 'Enterprise Stability Advantage'}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {activeWorkflowId === 'ai-playwright' 
                    ? 'Natural language prompting enables rapid script scaffolding, while manual code review ensures deterministic assertions and robust locators.' 
                    : 'Page Object Model (POM) ensures UI changes only require one locator update, and Data-Driven Testing (DDT) validates hundreds of combinations.'}
                </div>
              </div>
            </div>

            <a href="#experience" className="btn btn-outline btn-sm">
              <span>See in Internships</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
