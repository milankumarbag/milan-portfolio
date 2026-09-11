import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <FolderGit2 size={14} />
            <span>Practical Engineering</span>
          </div>
          <h2 className="section-title">Featured Technical Projects</h2>
          <p className="section-subtitle">
            Hands-on technical implementations spanning responsive web development, academic data-mining systems, API integrations, and interactive JavaScript applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              {/* Card Header & Category Tag */}
              <div className="project-card-header">
                <span className="project-category-tag">{project.category}</span>
                {project.tag && (
                  <span className="badge badge-success">
                    <Sparkles size={11} />
                    <span>{project.tag}</span>
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Project Bullet Highlights */}
              <div className="project-bullet-list">
                {project.details.map((bullet, idx) => (
                  <div key={idx} className="project-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="project-tech-stack">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="project-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons with Placeholders */}
              <div className="project-actions">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    title="GitHub Repository Link Placeholder"
                  >
                    <Github size={15} />
                    <span>Source Code</span>
                  </a>
                )}

                {project.id === 'portfolio-project' && (
                  <a
                    href="#home"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink size={15} />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
