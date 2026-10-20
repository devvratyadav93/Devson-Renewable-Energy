import React from 'react';

export const ScopeOfWorkSection: React.FC = () => {
  return (
    <section id="scope">
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-lbl">04 —</span>{' '}
            <span className="sec-num-text">SCOPE OF WORK</span>
          </div>
          <h2 className="sec-heading">Who does what, on paper.</h2>
          <p>Responsibility split across clearances, site preparation, and DC/AC side delivery.</p>
        </div>

        {/* Clearances & Approvals */}
        <div className="scope-block reveal">
          <span className="scope-title">Clearances &amp; Approvals</span>
          <div className="scope-table-wrap">
            <table className="scope-table">
              <thead>
                <tr>
                  <th>Approval / Clearance</th>
                  <th className="center" style={{ width: '80px' }}>EPC</th>
                  <th className="center" style={{ width: '80px' }}>Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CEIG &amp; MPPTCL approval</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="dash">—</span></td>
                </tr>
                <tr>
                  <td>Third-party inspection &amp; testing</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="dash">—</span></td>
                </tr>
                <tr>
                  <td>Completion certificate from nodal agencies</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="dash">—</span></td>
                </tr>
                <tr>
                  <td>Liaison for meter approval</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="dash">—</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Site Preparation */}
        <div className="scope-block reveal">
          <span className="scope-title">Site Preparation</span>
          <div className="scope-table-wrap">
            <table className="scope-table">
              <thead>
                <tr>
                  <th>Activity</th>
                  <th className="center" style={{ width: '80px' }}>EPC</th>
                  <th className="center" style={{ width: '80px' }}>Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Construction power</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="dash">—</span></td>
                </tr>
                <tr>
                  <td>Construction water</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="dash">—</span></td>
                </tr>
                <tr>
                  <td>Power plant design &amp; layout</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="dash">—</span></td>
                </tr>
                <tr>
                  <td>Access of site</td>
                  <td className="center"><span className="dash">—</span></td>
                  <td className="center"><span className="tick">✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* DC Side */}
        <div className="scope-block reveal">
          <span className="scope-title">DC Side</span>
          <div className="scope-table-wrap">
            <table className="scope-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="center" style={{ width: '80px' }}>Supply</th>
                  <th className="center" style={{ width: '80px' }}>E&amp;C</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Solar panels</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="tick">✓</span></td>
                </tr>
                <tr>
                  <td>MMS — seasonal tilt</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="tick">✓</span></td>
                </tr>
                <tr>
                  <td>DC cables</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="tick">✓</span></td>
                </tr>
                <tr>
                  <td>DC side earthing</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="tick">✓</span></td>
                </tr>
                <tr>
                  <td>Weather monitoring system</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="tick">✓</span></td>
                </tr>
                <tr>
                  <td>Lightning arrestor</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="tick">✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* AC Side */}
        <div className="scope-block reveal" style={{ marginBottom: 0 }}>
          <span className="scope-title">AC Side</span>
          <div className="scope-table-wrap">
            <table className="scope-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="center" style={{ width: '80px' }}>Supply</th>
                  <th className="center" style={{ width: '80px' }}>E&amp;C</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Inverter</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="tick">✓</span></td>
                </tr>
                <tr>
                  <td>LT cables</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="tick">✓</span></td>
                </tr>
                <tr>
                  <td>AC distribution board</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="tick">✓</span></td>
                </tr>
                <tr>
                  <td>AC side earthing</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="tick">✓</span></td>
                </tr>
                <tr>
                  <td>Control &amp; communication cables</td>
                  <td className="center"><span className="tick">✓</span></td>
                  <td className="center"><span className="tick">✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
