import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterGlance } from './components/RecruiterGlance';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { TestingWorkflow } from './components/TestingWorkflow';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('milan_portfolio_theme') || 'dark';
  });
  
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('milan_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="app-root">
      {/* Sticky Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenResume={() => setResumeOpen(true)} 
      />

      {/* Hero Section */}
      <Hero onOpenResume={() => setResumeOpen(true)} />

      {/* 10-Second Recruiter Fast Glance */}
      <RecruiterGlance />

      {/* About Section */}
      <About />

      {/* Experience Timeline */}
      <Experience />

      {/* Technical Skills Matrix */}
      <Skills />

      {/* Testing & Automation Expertise Pipeline Showcase */}
      <TestingWorkflow />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact showToast={showToast} />

      {/* Footer */}
      <Footer />

      {/* Resume PDF Viewer & Download Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="toast">
          <CheckCircle2 size={18} color="var(--qa-success)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
