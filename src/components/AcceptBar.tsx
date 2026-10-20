'use client';

import React from 'react';

interface AcceptBarProps {
  onPrint: () => void;
}

export const AcceptBar: React.FC<AcceptBarProps> = ({ onPrint }) => {
  return (
    <div className="accept-bar">
      <div className="ab-left">
        Grand Total <strong>₹31,18,00,993.52</strong>
      </div>
      <button className="ab-btn" onClick={onPrint}>
        Download / Print
      </button>
    </div>
  );
};
