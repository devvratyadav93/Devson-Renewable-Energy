import React from 'react';

const vendors = [
  { no: 1, item: 'Solar PV Modules', makes: 'Waaree' },
  { no: 2, item: 'Mounting Structures', makes: 'Tata / JSW' },
  { no: 3, item: 'String Inverter', makes: 'Sungrow' },
  { no: 4, item: 'DC Solar Cables', makes: 'Polycab' },
  { no: 5, item: 'AC Cables', makes: 'Polycab' },
  { no: 6, item: 'Earthing System', makes: 'Per DISCOM guidelines' },
  { no: 7, item: 'Lightning Arrestor', makes: 'Powertech / Jeftechno' },
  { no: 8, item: 'MCB / MCCB', makes: 'Schneider' },
  { no: 9, item: 'Weather Station', makes: 'Kipp & Zonen / Davis' },
  { no: 10, item: 'ACDB', makes: 'Locally manufactured, IP65' },
  { no: 11, item: 'MC4 Connectors', makes: 'Waaree / Phoenix / Elmex' },
  { no: 12, item: 'Miscellaneous', makes: 'Standard make' },
];

export const VendorsSection: React.FC = () => {
  return (
    <section className="alt">
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-lbl">03 —</span>{' '}
            <span className="sec-num-text">EQUIPMENT &amp; VENDORS</span>
          </div>
          <h2 className="sec-heading">Built on names you already trust.</h2>
          <p>Major equipment categories and the proposed manufacturer for each.</p>
        </div>
        <div className="styled-table-wrap reveal">
          <table className="styled-table">
            <thead>
              <tr>
                <th style={{ width: '80px', textAlign: 'center' }}>Sr. No.</th>
                <th>Item</th>
                <th>Offered Makes</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((v) => (
                <tr key={v.no}>
                  <td className="center">{v.no}</td>
                  <td style={{ fontWeight: 600 }}>{v.item}</td>
                  <td>{v.makes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
