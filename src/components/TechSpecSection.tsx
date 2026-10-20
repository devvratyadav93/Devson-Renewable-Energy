import React from 'react';

const specs = [
  { no: 1, item: 'Solar PV Modules', spec: 'P max ≥ 615 Wp, N-Type Bi-Facial' },
  { no: 2, item: 'Mounting Structures', spec: 'Seasonal tilt 5–20°, HDGI (for RCC) + Galvanum, min. 500mm clearance' },
  { no: 3, item: 'Inverter', spec: 'Outdoor string inverter, min. 98% efficiency (SG320HX20), multi-rated 300–352 KVA' },
  { no: 4, item: 'Combiner Boxes', spec: 'Dust / water-proof with applicable protection features' },
  { no: 5, item: 'DC Solar Cables', spec: 'Solar grade, halogen-free, UV & weather resistant' },
  { no: 6, item: 'AC LT Cables', spec: '3-core aluminium XLPE insulated, galvanised steel armoured' },
  { no: 7, item: 'Earthing System', spec: 'Chemical, maintenance-free type' },
  { no: 8, item: 'Lightning Arrestor', spec: 'ESE type, 120m radius coverage, per industry standards' },
  { no: 9, item: 'ACDB', spec: 'Dust-proof, over-current and surge protection, IP65' },
  { no: 10, item: 'Remote Monitoring', spec: 'Web-based, with data logger & SCADA system' },
  { no: 11, item: 'Substation & Yard', spec: '800/33KV pulling substation, 10MVA transformer, breaker, isolator, metering unit' },
  { no: 12, item: 'Transmission Line', spec: "33KV overhead, 'H'-beam 13m structure, Dog conductor" },
  { no: 13, item: 'Injection Bay & Metering', spec: '33KV injection bay at HT side of substation, with metering unit' },
];

export const TechSpecSection: React.FC = () => {
  return (
    <section id="specification">
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-lbl">02 —</span>{' '}
            <span className="sec-num-text">TECHNICAL SPECIFICATION</span>
          </div>
          <h2 className="sec-heading">What&apos;s going into the ground.</h2>
          <p>Component-level specification for the project.</p>
        </div>
        <div className="styled-table-wrap reveal">
          <table className="styled-table">
            <thead>
              <tr>
                <th style={{ width: '60px', textAlign: 'center' }}>No.</th>
                <th>Item</th>
                <th>Specification</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((s) => (
                <tr key={s.no}>
                  <td className="center">{s.no}</td>
                  <td style={{ fontWeight: 600 }}>{s.item}</td>
                  <td>{s.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
