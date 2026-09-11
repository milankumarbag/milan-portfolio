import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Cpu, 
  Database, 
  GitBranch, 
  Layers, 
  Code2, 
  Terminal, 
  Sparkles,
  Search
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    'Testing & QA': <CheckCircle2 size={20} />,
    'Automation': <Cpu size={20} />,
    'Languages & Database': <Database size={20} />,
    'Tools & Version Control': <GitBranch size={20} />,
    'Web & Development': <Layers size={20} />
  };

  const categories = ['All', ...portfolioData.skillsByCategory.map(c => c.category)];

  const filteredCategories = portfolioData.skillsByCategory
    .filter(cat => activeFilter === 'All' || cat.category === activeFilter)
    .map(cat => {
      if (!searchQuery.trim()) return cat;
      const filteredSkills = cat.skills.filter(s => 
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Code2 size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Technical Skills Matrix</h2>
          <p className="section-subtitle">
            A comprehensive overview of my testing methodologies, automation toolsets, programming languages, and development foundations.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`btn btn-sm ${activeFilter === cat ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', width: '220px' }}>
            <Search size={15} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2rem', paddingRight: '0.75rem', height: '36px', fontSize: '0.85rem' }}
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredCategories.map((group) => (
            <div key={group.category} className="glass-card skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {categoryIcons[group.category] || <Terminal size={20} />}
                </div>
                <div>
                  <h3 className="skill-category-title">{group.category}</h3>
                </div>
              </div>

              <p className="skill-category-desc">{group.description}</p>

              <div className="skill-tags-wrapper">
                {group.skills.map((skill) => (
                  <div key={skill} className="skill-tag">
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)' }}></span>
                    <span>{skill}</span>
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
