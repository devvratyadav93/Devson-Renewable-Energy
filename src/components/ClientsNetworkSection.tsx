import React from 'react';

export const ClientsNetworkSection: React.FC = () => {
  return (
    <section id="clients-network">
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-text">OUR NETWORK</span>
          </div>
          <h2 className="sec-heading">Valuable Clients &amp; Affiliations</h2>
          <p>Trusted by industry leaders, infrastructure conglomerates, and top-tier financial institutions.</p>
        </div>
        <div className="clients-image-wrap reveal">
          <img
            src="/assets/clients-affiliations.png"
            alt="Valuable Clients and Banking Affiliations"
            className="clients-affiliations-img"
          />
        </div>
      </div>
    </section>
  );
};
