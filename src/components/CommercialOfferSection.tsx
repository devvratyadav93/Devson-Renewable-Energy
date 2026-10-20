import React from 'react';

interface BoqRow {
  desc: string;
  spec: string;
  qty: string;
  perWatt: string;
  unitPrice: string;
  amount: string;
}

const boqItems: BoqRow[] = [
  { desc: 'Solar Module', spec: '620 Wp Future', qty: '20,161', perWatt: '₹14.25', unitPrice: '₹8,835.00', amount: '₹17,81,22,435.00' },
  { desc: 'Inverter', spec: '320 KVA Sungrow', qty: '34', perWatt: '₹1.21', unitPrice: '₹4,45,000.00', amount: '₹1,51,30,000.00' },
  { desc: 'Structure', spec: 'HDGI Column & Galvanum Rafter', qty: '200', perWatt: '₹1.68', unitPrice: '₹1,05,000.00', amount: '₹2,10,00,000.00' },
  { desc: 'Cable AC', spec: '300SQMM Armoured, 11KV HT', qty: '6,800', perWatt: '₹0.82', unitPrice: '₹1,500.00', amount: '₹1,02,00,000.00' },
  { desc: 'Cable DC', spec: '4 Sq.mm copper, EN type', qty: '52,075', perWatt: '₹0.23', unitPrice: '₹56.00', amount: '₹29,16,200.00' },
  { desc: 'BOS', spec: 'HDPE pipe, connectors, LA, earthing', qty: '1', perWatt: '₹0.40', unitPrice: '₹50,00,000.00', amount: '₹50,00,000.00' },
  { desc: 'ACDB (LT Panel)', spec: '7 IN 2 OUT, L&T', qty: '1', perWatt: '₹0.32', unitPrice: '₹40,00,000.00', amount: '₹40,00,000.00' },
  { desc: 'Transformer', spec: '33/0.8KV, 10000 KVA', qty: '1', perWatt: '₹1.04', unitPrice: '₹1,30,00,000.00', amount: '₹1,30,00,000.00' },
  { desc: 'HT Panel', spec: '33KV, ABB Panel', qty: '1', perWatt: '₹0.16', unitPrice: '₹20,00,000.00', amount: '₹20,00,000.00' },
  { desc: 'GSS Meter', spec: '3× ABT Meter 150 + metering eqpt.', qty: '1', perWatt: '₹0.11', unitPrice: '₹13,50,000.00', amount: '₹13,50,000.00' },
  { desc: 'Transmission Line', spec: '33 KV', qty: '3', perWatt: '₹0.36', unitPrice: '₹15,00,000.00', amount: '₹45,00,000.00' },
  { desc: 'GSS Injection Bay', spec: '33 KV', qty: '1', perWatt: '₹0.08', unitPrice: '₹10,00,000.00', amount: '₹10,00,000.00' },
  { desc: 'I&C incl. Civil', spec: '12,500 KW installation & commissioning', qty: '1', perWatt: '₹1.02', unitPrice: '₹1,28,00,000.00', amount: '₹1,28,00,000.00' },
  { desc: 'EPCM', spec: '12,500 KW', qty: '1', perWatt: '₹0.72', unitPrice: '₹90,00,000.00', amount: '₹90,00,000.00' },
  { desc: 'Fencing', spec: 'Chain fencing, 10ft/mtr', qty: '3,000', perWatt: '₹0.24', unitPrice: '₹1,000.00', amount: '₹30,00,000.00' },
  { desc: 'Control Room', spec: 'SCADA, CCTV, lighting', qty: '1', perWatt: '₹0.26', unitPrice: '₹33,00,000.00', amount: '₹33,00,000.00' },
];

export const CommercialOfferSection: React.FC = () => {
  return (
    <section id="commercial" className="alt">
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-lbl">07 —</span>{' '}
            <span className="sec-num-text">COMMERCIAL OFFER</span>
          </div>
          <h2 className="sec-heading">The investment, itemised.</h2>
          <p>Full bill of quantities for the turnkey system.</p>
        </div>
        <div className="commercial-table-wrap reveal">
          <table className="commercial-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Specification</th>
                <th className="num">Qty</th>
                <th className="num">Per Watt</th>
                <th className="num">Unit Price</th>
                <th className="num">Amount</th>
              </tr>
            </thead>
            <tbody>
              {boqItems.map((item, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 600 }}>{item.desc}</td>
                  <td>{item.spec}</td>
                  <td className="num">{item.qty}</td>
                  <td className="num">{item.perWatt}</td>
                  <td className="num">{item.unitPrice}</td>
                  <td className="num">{item.amount}</td>
                </tr>
              ))}
              <tr className="sum">
                <td colSpan={5}>Total</td>
                <td className="num">₹28,63,18,635.00</td>
              </tr>
              <tr className="sum">
                <td colSpan={5}>GST @ 8.9%</td>
                <td className="num">₹2,54,82,358.52</td>
              </tr>
              <tr className="grand">
                <td colSpan={5}>Grand Total</td>
                <td className="num">₹31,18,00,993.52</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="total-banner reveal">
          <div>
            <div className="tb-label">Grand Total (incl. 8.9% GST)</div>
            <div className="tb-value">₹31,18,00,993.52</div>
            <div className="tb-sub">Effective ₹24.94 per watt across the full system</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="tb-label">Base value</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700 }}>
              ₹28,63,18,635.00
            </div>
            <div className="tb-sub">GST @ 8.9% — ₹2,54,82,358.52</div>
          </div>
        </div>
      </div>
    </section>
  );
};
