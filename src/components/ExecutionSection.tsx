import React from 'react';

export const ExecutionSection: React.FC = () => {
  return (
    <section id="execution">
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-lbl">08 —</span>{' '}
            <span className="sec-num-text">EXECUTION METHODOLOGY</span>
          </div>
          <h2 className="sec-heading">Project Execution Methodology</h2>
          <p>A 20-step end-to-end delivery process across 4 phases — refined over 150+ commissioned solar projects.</p>
        </div>
        <div className="phase-img-wrap reveal">
          <img
            src="/assets/phase.png"
            alt="Project Execution Methodology — 4 phases, 20 steps"
            className="phase-img"
          />
        </div>
      </div>
    </section>
  );
};
