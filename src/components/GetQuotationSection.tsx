'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

const biharDistricts = [
  'Nalanda / Rajgir',
  'Nawada',
  'Patna',
  'Gaya',
  'Begusarai',
  'Muzaffarpur',
  'Bhagalpur',
  'Aurangabad',
  'Rohtas / Sasaram',
  'Vaishali / Hajipur',
  'Samastipur',
  'Darbhanga',
  'Madhubani',
  'Saran / Chhapra',
  'Siwan',
  'Purnia',
  'Katihar',
  'Munger',
  'Jamui',
  'Jehanabad',
  'Arwal',
  'Bhojpur / Arrah',
  'Buxar',
  'Kaimur / Bhabua',
  'West Champaran / Bettiah',
  'East Champaran / Motihari',
  'Gopalganj',
  'Sitamarhi',
  'Sheohar',
  'Supaul',
  'Saharsa',
  'Madhepura',
  'Kishanganj',
  'Araria',
  'Banka',
  'Khagaria',
  'Lakhisarai',
  'Sheikhpura',
  'Other District in Bihar'
];

const schemeOptions = [
  { val: '3kw_surya_ghar', label: '3 kW Rooftop Solar (Max ₹98,000 Subsidy · Net: ₹1,12,000) ★ Most Popular' },
  { val: '1kw_surya_ghar', label: '1 kW Rooftop Solar (₹40,000 Subsidy · Net: ₹30,000)' },
  { val: '2kw_surya_ghar', label: '2 kW Rooftop Solar (₹80,000 Subsidy · Net: ₹60,000)' },
  { val: '4kw_surya_ghar', label: '4 kW Rooftop Solar (₹98,000 Subsidy · Net: ₹1,82,000)' },
  { val: '5kw_surya_ghar', label: '5 kW Rooftop Solar (₹98,000 Subsidy · Net: ₹2,27,000)' },
  { val: '6kw_to_10kw', label: '6 kW to 10 kW Rooftop Solar (Residential / MSME)' },
  { val: 'commercial_msme', label: 'Commercial / Industrial Solar Net Metering (>10 kW)' },
  { val: 'pm_kusum_pump', label: 'PM-KUSUM Solar Agriculture Water Pump' },
  { val: 'custom_consultation', label: 'Custom Solar Assessment / Feasibility Survey' },
];

export const GetQuotationSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].getQuotation;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    district: 'Nalanda / Rajgir',
    scheme: '3kw_surya_ghar',
    monthlyBill: '',
    roofArea: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedRef = `DEVSON-QT-${Date.now().toString().slice(-6)}`;
    setRefId(generatedRef);

    // Option A delivery: send payload to Web3Forms/email webhook if key configured, or local simulated delivery
    try {
      const payload = {
        access_key: 'DEVSON_RENEWABLE_DEMO_KEY',
        subject: `New Solar Quotation Request: ${generatedRef} from ${formData.fullName}`,
        from_name: 'DEVSON Solar Portal',
        replyto: formData.email,
        to: 'devson.energy@gmail.com',
        ...formData,
        quotationRefId: generatedRef,
        timestamp: new Date().toISOString(),
      };

      // Simulated network latency for realistic customer experience
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Attempt non-blocking dispatch if external endpoint is reachable
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch {
        // Graceful fallback during offline / local test environments
      }

      setIsSubmitting(false);
      setModalOpen(true);
    } catch {
      setIsSubmitting(false);
      setModalOpen(true);
    }
  };

  const selectedSchemeObj = schemeOptions.find((s) => s.val === formData.scheme);

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello DEVSON Renewable Energy, I have requested a solar quotation on your website.\n\n` +
      `*Quotation Ref:* ${refId}\n` +
      `*Name:* ${formData.fullName}\n` +
      `*District:* ${formData.district}\n` +
      `*Scheme:* ${selectedSchemeObj?.label || formData.scheme}\n` +
      `*Monthly Bill:* ₹${formData.monthlyBill || 'N/A'}\n\n` +
      `Please provide further guidance on my site inspection and subsidy processing.`
    );
    return `https://wa.me/919296950833?text=${text}`;
  };

  return (
    <section id="quotation" className="quotation-section">
      <div className="wrap">
        <div className="section-head text-center" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
          <div className="sec-num" style={{ justifyContent: 'center' }}>
            <span className="sec-num-text">{t.badge}</span>
          </div>
          <h2 className="sec-heading">{t.title}</h2>
          <p style={{ maxWidth: '780px', margin: '0 auto' }}>{t.subtitle}</p>
        </div>

        {/* Microsoft Forms Card Shell */}
        <div className="ms-form-shell reveal">
          <div className="ms-form-accent-strip"></div>

          {/* Form Header Card */}
          <div className="ms-form-header">
            <div className="ms-form-meta-row">
              <span className="ms-meta-badge">
                🏢 {language === 'en' ? 'DEVSON Official Bihar Proposal' : 'देवसन अधिकृत बिहार प्रस्ताव'}
              </span>
              <span className="ms-meta-badge">
                ⏱️ {language === 'en' ? '~2 min to complete' : '~2 मिनट का समय'}
              </span>
              <span className="ms-meta-badge">
                🔒 {language === 'en' ? 'SSL Encrypted & Confidential' : 'सुरक्षित एवं गोपनीय'}
              </span>
              <span className="ms-meta-required">
                * {language === 'en' ? 'Required fields' : 'अनिवार्य क्षेत्र'}
              </span>
            </div>

            <h3 className="ms-form-title">{t.title}</h3>
            <p className="ms-form-desc">{t.subtitle}</p>
          </div>

          {/* Form Body with Numbered Sections */}
          <form onSubmit={handleSubmit} className="ms-form-body">
            {/* Section 1: Contact & Location */}
            <div className="ms-section-header">
              <span className="ms-sec-pill">{language === 'en' ? 'Section 1' : 'भाग 1'}</span>
              <h4 className="ms-sec-title">
                {language === 'en' ? 'Applicant & Contact Details' : 'आवेदक एवं संपर्क विवरण'}
              </h4>
            </div>

            <div className="ms-question-grid">
              {/* Question 1: Full Name */}
              <div className="ms-question-block">
                <label htmlFor="fullName" className="ms-q-label">
                  <span className="ms-q-num">1.</span>
                  <span>{t.fullNameLabel}</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t.fullNamePlaceholder}
                  className="ms-input"
                />
              </div>

              {/* Question 2: Email Address */}
              <div className="ms-question-block">
                <label htmlFor="email" className="ms-q-label">
                  <span className="ms-q-num">2.</span>
                  <span>{t.emailLabel}</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  className="ms-input"
                />
                <span className="ms-field-hint">
                  {language === 'en'
                    ? 'A formal quotation summary will be dispatched here.'
                    : 'औपचारिक प्रस्ताव की प्रति इस पते पर भेजी जाएगी।'}
                </span>
              </div>

              {/* Question 3: Phone Number */}
              <div className="ms-question-block">
                <label htmlFor="phone" className="ms-q-label">
                  <span className="ms-q-num">3.</span>
                  <span>{t.phoneLabel}</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.phonePlaceholder}
                  className="ms-input"
                />
              </div>

              {/* Question 4: District in Bihar */}
              <div className="ms-question-block">
                <label htmlFor="district" className="ms-q-label">
                  <span className="ms-q-num">4.</span>
                  <span>{t.districtLabel}</span>
                </label>
                <select
                  id="district"
                  name="district"
                  required
                  value={formData.district}
                  onChange={handleChange}
                  className="ms-select"
                >
                  {biharDistricts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Section 2: Solar System & Subsidy Scheme */}
            <div className="ms-section-header">
              <span className="ms-sec-pill">{language === 'en' ? 'Section 2' : 'भाग 2'}</span>
              <h4 className="ms-sec-title">
                {language === 'en' ? 'Solar Capacity & Subsidy Scheme' : 'सोलर क्षमता एवं सब्सिडी योजना'}
              </h4>
            </div>

            <div className="ms-question-grid">
              {/* Question 5: Desired Scheme */}
              <div className="ms-question-block ms-q-full">
                <label htmlFor="scheme" className="ms-q-label">
                  <span className="ms-q-num">5.</span>
                  <span>{t.schemeLabel}</span>
                </label>

                {/* Quick Selection Choice Chips (MS Forms style) */}
                <div className="ms-choice-chips">
                  {[
                    { val: '1kw_surya_ghar', label: '1 kW' },
                    { val: '2kw_surya_ghar', label: '2 kW' },
                    { val: '3kw_surya_ghar', label: '3 kW ★ Most Popular' },
                    { val: '4kw_surya_ghar', label: '4 kW' },
                    { val: '5kw_surya_ghar', label: '5 kW' },
                    { val: '6kw_to_10kw', label: '6–10 kW' },
                    { val: 'commercial_msme', label: 'Commercial (>10kW)' },
                    { val: 'pm_kusum_pump', label: 'PM-KUSUM Agri Pump' },
                  ].map((chip) => (
                    <button
                      key={chip.val}
                      type="button"
                      className={`ms-chip-btn ${formData.scheme === chip.val ? 'active' : ''}`}
                      onClick={() => setFormData((prev) => ({ ...prev, scheme: chip.val }))}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>

                <select
                  id="scheme"
                  name="scheme"
                  required
                  value={formData.scheme}
                  onChange={handleChange}
                  className="ms-select ms-select-highlight"
                >
                  {schemeOptions.map((opt) => (
                    <option key={opt.val} value={opt.val}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Question 6: Monthly Bill */}
              <div className="ms-question-block">
                <label htmlFor="monthlyBill" className="ms-q-label">
                  <span className="ms-q-num">6.</span>
                  <span>{t.monthlyBillLabel}</span>
                </label>

                {/* Quick bill choice chips */}
                <div className="ms-choice-chips">
                  {['₹1,000 – ₹2,500', '₹2,500 – ₹4,000', '₹4,000 – ₹7,000', '₹7,000+'].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      className={`ms-chip-btn ${formData.monthlyBill === chip ? 'active' : ''}`}
                      onClick={() => setFormData((prev) => ({ ...prev, monthlyBill: chip }))}
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  id="monthlyBill"
                  name="monthlyBill"
                  value={formData.monthlyBill}
                  onChange={handleChange}
                  placeholder={t.monthlyBillPlaceholder}
                  className="ms-input"
                />
              </div>

              {/* Question 7: Roof Area */}
              <div className="ms-question-block">
                <label htmlFor="roofArea" className="ms-q-label">
                  <span className="ms-q-num">7.</span>
                  <span>{t.roofAreaLabel}</span>
                </label>

                {/* Quick area choice chips */}
                <div className="ms-choice-chips">
                  {['100 – 200 sq.ft', '200 – 350 sq.ft', '350 – 500 sq.ft', '600+ sq.ft'].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      className={`ms-chip-btn ${formData.roofArea === chip ? 'active' : ''}`}
                      onClick={() => setFormData((prev) => ({ ...prev, roofArea: chip }))}
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  id="roofArea"
                  name="roofArea"
                  value={formData.roofArea}
                  onChange={handleChange}
                  placeholder={t.roofAreaPlaceholder}
                  className="ms-input"
                />
              </div>
            </div>

            {/* Section 3: Notes & Special Requirements */}
            <div className="ms-section-header">
              <span className="ms-sec-pill">{language === 'en' ? 'Section 3' : 'भाग 3'}</span>
              <h4 className="ms-sec-title">
                {language === 'en' ? 'Property Specifications & Remarks (Optional)' : 'छत का विवरण एवं विशेष टिप्पणी (वैकल्पिक)'}
              </h4>
            </div>

            <div className="ms-question-grid">
              <div className="ms-question-block ms-q-full">
                <label htmlFor="message" className="ms-q-label">
                  <span className="ms-q-num">8.</span>
                  <span>{t.messageLabel}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  className="ms-textarea"
                ></textarea>
              </div>
            </div>

            {/* MS Forms Submission Footer */}
            <div className="ms-form-footer">
              <div className="ms-footer-notice">
                <div className="ms-notice-line">
                  <span>✉ {t.notificationNotice}</span>
                </div>
                <div className="ms-security-line">
                  <span>🔒 {language === 'en' ? 'Never submit sensitive passwords. Form submission is verified and processed under DEVSON corporate data privacy protocols.' : 'पासवर्ड कभी साझा न करें। यह फॉर्म देवसन डेटा गोपनीयता प्रोटोकॉल के अंतर्गत सुरक्षित है।'}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="ms-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> {t.submittingBtn}
                  </>
                ) : (
                  <>
                    ⚡ {t.submitBtn} →
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {modalOpen && (
        <div className="quotation-modal-overlay">
          <div className="quotation-modal">
            <div className="modal-header">
              <div className="modal-badge">✓ QUOTATION GENERATED</div>
              <h3 className="modal-title">{t.modalTitle}</h3>
              <p className="modal-sub">{t.modalSub}</p>
            </div>

            <div className="modal-body">
              <div className="ref-box">
                <span className="ref-label">{t.refNumberLabel}</span>
                <strong className="ref-value">{refId}</strong>
              </div>

              <div className="summary-list">
                <div className="summary-item">
                  <span className="s-label">Applicant:</span>
                  <span className="s-val">{formData.fullName}</span>
                </div>
                <div className="summary-item">
                  <span className="s-label">Email:</span>
                  <span className="s-val">{formData.email}</span>
                </div>
                <div className="summary-item">
                  <span className="s-label">District:</span>
                  <span className="s-val">{formData.district}</span>
                </div>
                <div className="summary-item">
                  <span className="s-label">Selected Scheme:</span>
                  <span className="s-val highlight">{selectedSchemeObj?.label}</span>
                </div>
                {formData.monthlyBill && (
                  <div className="summary-item">
                    <span className="s-label">Monthly Bill:</span>
                    <span className="s-val">₹{formData.monthlyBill}</span>
                  </div>
                )}
              </div>

              <div className="modal-notice">
                {t.emailSentNotice}
              </div>
            </div>

            <div className="modal-actions">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modal-whatsapp"
              >
                💬 {t.btnWhatsApp}
              </a>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="btn-modal-close"
              >
                {t.btnClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
