'use client';

import React from 'react';

interface IosPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IosPrintModal: React.FC<IosPrintModalProps> = ({ isOpen, onClose }) => {
  return (
    <div id="ios-print-modal" className={isOpen ? 'open' : ''}>
      <div id="ios-print-box">
        <h3>Save as PDF on iPhone</h3>
        <p>iOS Safari doesn&apos;t support direct PDF generation. Follow these simple steps:</p>
        <ol>
          <li>Tap the <strong>Share</strong> button <span style={{ fontSize: '16px' }}>📤</span> at the bottom of Safari</li>
          <li>Scroll down and tap <strong>Print</strong></li>
          <li>Pinch-zoom outward on the preview to save as PDF</li>
          <li>Tap the <strong>Share</strong> button on the preview to save to Files</li>
        </ol>
        <button className="ios-close-btn" onClick={onClose}>Got it</button>
      </div>
    </div>
  );
};
