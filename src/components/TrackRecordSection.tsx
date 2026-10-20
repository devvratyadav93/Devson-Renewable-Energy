import React from 'react';

const clients = [
  'Bajaj',
  'L&T Construction',
  'Shyam Steel',
  'Envisol',
  'Novus Green',
  'Shakti Pumping Life',
  'Waaree',
  'Bhawani',
  'Disha Interio',
  'KEC International',
  'CVRU',
  'Monte Carlo',
];

const projects = [
  { img: '/assets/jhiganpur.png', alt: 'Jhiganpur 2 MW Solar Project', mw: '2 MW', loc: 'Jhiganpur' },
  { img: '/assets/khurai.png', alt: 'Khurai 2 MW Solar Project', mw: '2 MW', loc: 'Khurai' },
  { img: '/assets/raisen.png', alt: 'Raisen 2 MW Solar Project', mw: '2 MW', loc: 'Raisen' },
  { img: '/assets/guna.png', alt: 'Guna 6 MW Solar Project', mw: '6 MW', loc: 'Guna' },
];

export const TrackRecordSection: React.FC = () => {
  return (
    <section className="alt">
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-lbl">10 —</span>{' '}
            <span className="sec-num-text">TRACK RECORD</span>
          </div>
          <h2 className="sec-heading">Trusted by 200+ customers.</h2>
        </div>
        <div className="client-strip reveal">
          {clients.map((c, i) => (
            <span key={i} className="client-chip">{c}</span>
          ))}
        </div>
        <div className="proj-grid reveal" style={{ marginTop: '32px' }}>
          {projects.map((p, idx) => (
            <div key={idx} className="proj-card proj-card-photo">
              <img src={p.img} alt={p.alt} className="proj-photo" />
              <div className="proj-overlay">
                <div className="pc-mw">{p.mw}</div>
                <div className="pc-loc">{p.loc}</div>
                <div className="pc-tag">Ground-Mounted EPC</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
