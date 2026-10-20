import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="closing">
      <div className="wrap closing-grid">
        <div>
          <img
            src="/assets/logos/asa-epc-logo.png"
            alt="ASA EPC Pvt. Ltd."
            className="footer-logo"
          />
          <p>
            One-stop solar solutions — EPC &amp; power transmission, energy storage, and energy trading. Franchise partner of Waaree Solar.
          </p>
        </div>
        <div>
          <div className="closing-col-label">Registered Office</div>
          <p>
            Office B-22, C Sector, Indrapuri,<br />
            near Syndicate Bank BHEL,<br />
            Bhopal, Madhya Pradesh, India
          </p>
          <p style={{ marginTop: '10px' }}>+91 75549 20666</p>
        </div>
        <div>
          <div className="closing-col-label">Contact &amp; Legal</div>
          <p><a href="mailto:ashutosh@asa-epc.com">ashutosh@asa-epc.com</a></p>
          <p><a href="mailto:pushpraj@asa-epc.com">pushpraj@asa-epc.com</a></p>
          <p style={{ marginTop: '10px' }}>
            CIN U31905MP2018PTC04527<br />
            DPIIT No. DIPP19520
          </p>
        </div>
      </div>
      <div className="wrap closing-bottom">
        <span>Quotation valid for 30 days from offer date.</span>
        <span>asa-epc.com · asasolar.in</span>
      </div>
    </footer>
  );
};
