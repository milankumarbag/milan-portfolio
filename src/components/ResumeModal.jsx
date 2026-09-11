import React from 'react';
import { 
  X, 
  Download, 
  FileText, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title">
            <FileText size={20} color="var(--accent-primary)" />
            <span>Milan Kumar Bag – Resume Preview</span>
          </div>

          <button 
            onClick={onClose} 
            className="modal-close-btn"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body: PDF Viewer iframe */}
        <div className="modal-body">
          <iframe 
            src={`${portfolioData.personal.resumeUrl}#toolbar=1`}
            title="Milan Kumar Bag Resume PDF"
            width="100%"
            height="100%"
          />
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close
          </button>

          <a 
            href={portfolioData.personal.resumeUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <ExternalLink size={15} />
            <span>Open in New Tab</span>
          </a>

          <a 
            href={portfolioData.personal.resumeUrl} 
            download="Milan_Kumar_Bag_Resume.pdf"
            className="btn btn-primary btn-sm"
          >
            <Download size={15} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
