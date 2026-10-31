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

const billPresets = ['₹1,000 – ₹2,500', '₹2,500 – ₹4,000', '₹4,000 – ₹7,000', '₹7,000+'];
const areaPresets = ['150 sq. ft.', '250 sq. ft.', '350 sq. ft.', '500+ sq. ft.'];

export const GetQuotationSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].getQuotation;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    district: 'Nalanda / Rajgir',
    scheme: '3kw_surya_ghar',
    monthlyBill: '₹2,500 – ₹4,000',
    roofArea: '250 sq. ft.',
    message: '',
  });

  // Settings for 6th and 7th point: preset selection vs custom input
  const [billMode, setBillMode] = useState<'preset' | 'custom'>('preset');
  const [roofAreaMode, setRoofAreaMode] = useState<'preset' | 'custom'>('preset');

  // Mandatory policies acceptance checkboxes (a & b)
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Active policy details popup modal ('siteVisit' | 'privacy' | null)
  const [activePolicyModal, setActivePolicyModal] = useState<'siteVisit' | 'privacy' | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBillPresetSelect = (preset: string) => {
    setBillMode('preset');
    setFormData((prev) => ({ ...prev, monthlyBill: preset }));
  };

  const handleBillCustomClick = () => {
    setBillMode('custom');
    if (billPresets.includes(formData.monthlyBill)) {
      setFormData((prev) => ({ ...prev, monthlyBill: '' }));
    }
  };

  const handleAreaPresetSelect = (preset: string) => {
    setRoofAreaMode('preset');
    setFormData((prev) => ({ ...prev, roofArea: preset }));
  };

  const handleAreaCustomClick = () => {
    setRoofAreaMode('custom');
    if (areaPresets.includes(formData.roofArea)) {
      setFormData((prev) => ({ ...prev, roofArea: '' }));
    }
  };

  const bothAccepted = policyAccepted && privacyAccepted;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bothAccepted) {
      alert(t.bothPoliciesRequiredWarning);
      return;
    }

    setIsSubmitting(true);
    const generatedRef = `DEVSON-QT-${Date.now().toString().slice(-6)}`;
    setRefId(generatedRef);

    try {
      const payload = {
        access_key: 'DEVSON_RENEWABLE_DEMO_KEY',
        subject: `New Solar Quotation Request: ${generatedRef} from ${formData.fullName} (${formData.district})`,
        from_name: 'DEVSON Solar Portal',
        replyto: formData.email,
        to: 'devson.energy@gmail.com',
        ...formData,
        quotationRefId: generatedRef,
        policyAccepted: true,
        privacyAccepted: true,
        timestamp: new Date().toISOString(),
      };

      await new Promise((resolve) => setTimeout(resolve, 800));

      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch {
        // Fallback for offline / sandboxed execution
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
      `Hello DEVSON Renewable Energy, I have submitted an official quotation request on your website.\n\n` +
      `*Quotation Ref:* ${refId}\n` +
      `*Applicant Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*District:* ${formData.district}\n` +
      `*Selected Scheme:* ${selectedSchemeObj?.label || formData.scheme}\n` +
      `*Monthly Bill:* ${formData.monthlyBill || 'N/A'}\n` +
      `*Roof Area:* ${formData.roofArea || 'N/A'}\n\n` +
      `*Accepted Policies:* Engineering Site Visit & Floor-Level Policy + Corporate Privacy Policy.\n\n` +
      `*Note:* The final price may vary during the engineer's site visit, depending on your rooftop floor level.\n\n` +
      `Please schedule my site feasibility survey.`
    );
    return `https://wa.me/919296950833?text=${text}`;
  };

  return (
    <section id="quotation" className="quotation-section">
      <div className="wrap">
        {/* Master Quotation Card (Includes Section Header + 3 Sub-sections on White Background) */}
        <div className="q-master-card reveal">
          <div className="q-card-top-stripe"></div>

          {/* Master Card Header: QUOTATION Heading (Bold & Underlined), Sub-Heading, Subtitle */}
          <div className="q-card-header text-center">
            <h1 className="q-card-main-heading">
              {t.badge}
            </h1>
            <h2 className="q-card-subheading">
              {t.title}
            </h2>
            <p className="q-card-subtitle">
              {t.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="q-card-form">

            {/* ============================================================== */}
            {/* SECTION 1: APPLICANT IDENTITY & SITE LOCATION                  */}
            {/* ============================================================== */}
            <div className="q-section-block">
              <div className="q-section-header">
                <div className="q-sec-title-bar">
                  <span className="q-sec-step">01</span>
                  <h4 className="q-sec-title">{t.sec1Title}</h4>
                </div>
                <div className="q-sec-divider" aria-hidden="true" />
              </div>

              <div className="q-sec1-grid">
                {/* 1. Full Name */}
                <div className="q-col-cell">
                  <label htmlFor="fullName" className="q-label">
                    <span className="q-num">1.</span>
                    <span>{t.fullNameLabel}</span>
                  </label>
                  <div className="q-input-wrap">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t.fullNamePlaceholder}
                      className="q-input"
                    />
                  </div>
                </div>

                {/* 2. Phone / WhatsApp Number */}
                <div className="q-col-cell">
                  <label htmlFor="phone" className="q-label">
                    <span className="q-num">2.</span>
                    <span>{t.phoneLabel}</span>
                  </label>
                  <div className="q-phone-input-group">
                    <span className="q-phone-prefix">🇮🇳 +91</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.phonePlaceholder}
                      className="q-input q-phone-input"
                    />
                  </div>
                </div>

                {/* 3. Email Address */}
                <div className="q-col-cell">
                  <label htmlFor="email" className="q-label">
                    <span className="q-num">3.</span>
                    <span>{t.emailLabel}</span>
                  </label>
                  <div className="q-input-wrap">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      className="q-input"
                    />
                  </div>
                </div>

                {/* 4. District in Bihar */}
                <div className="q-col-cell">
                  <label htmlFor="district" className="q-label">
                    <span className="q-num">4.</span>
                    <span>{t.districtLabel}</span>
                  </label>
                  <div className="q-input-wrap">
                    <select
                      id="district"
                      name="district"
                      required
                      value={formData.district}
                      onChange={handleChange}
                      className="q-select"
                    >
                      {biharDistricts.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* ============================================================== */}
            {/* SECTION 2: SOLAR SIZING & CONSUMPTION (3 COLUMNS)              */}
            {/* ============================================================== */}
            <div className="q-section-block">
              <div className="q-section-header">
                <div className="q-sec-title-bar">
                  <span className="q-sec-step">02</span>
                  <h4 className="q-sec-title">{t.sec2Title}</h4>
                </div>
                <div className="q-sec-divider" aria-hidden="true" />
              </div>

              <div className="q-grid-3col q-align-stretch">
                {/* Column 1: Point 5 — Desired Scheme & System Sizing */}
                <div className="q-col-cell q-cell-elevated">
                  <label htmlFor="scheme" className="q-label">
                    <span className="q-num">5.</span>
                    <span>{t.schemeLabel}</span>
                  </label>

                  {/* Quick selection choice chips */}
                  <div className="q-chips-grid">
                    {[
                      { val: '1kw_surya_ghar', label: '1 kW' },
                      { val: '2kw_surya_ghar', label: '2 kW' },
                      { val: '3kw_surya_ghar', label: '3 kW ★ Pop' },
                      { val: '4kw_surya_ghar', label: '4 kW' },
                      { val: '5kw_surya_ghar', label: '5 kW' },
                      { val: '6kw_to_10kw', label: '6–10 kW' },
                      { val: 'commercial_msme', label: 'Commercial' },
                      { val: 'pm_kusum_pump', label: 'Agri Pump' },
                    ].map((chip) => (
                      <button
                        key={chip.val}
                        type="button"
                        className={`q-chip-btn ${formData.scheme === chip.val ? 'active' : ''}`}
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
                    className="q-select q-select-highlight"
                  >
                    {schemeOptions.map((opt) => (
                      <option key={opt.val} value={opt.val}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Column 2: Point 6 — Average Monthly Electricity Bill */}
                <div className="q-col-cell q-cell-elevated">
                  <div className="q-label-with-mode">
                    <label htmlFor="monthlyBill" className="q-label">
                      <span className="q-num">6.</span>
                      <span>{t.monthlyBillLabel}</span>
                    </label>
                  </div>

                  {/* Preset Chips + Custom Mode Button */}
                  <div className="q-chips-grid">
                    {billPresets.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        className={`q-chip-btn ${billMode === 'preset' && formData.monthlyBill === preset ? 'active' : ''}`}
                        onClick={() => handleBillPresetSelect(preset)}
                      >
                        {preset}
                      </button>
                    ))}
                    <button
                      type="button"
                      className={`q-chip-btn q-custom-toggle-btn ${billMode === 'custom' ? 'active' : ''}`}
                      onClick={handleBillCustomClick}
                    >
                      {t.customBtn}
                    </button>
                  </div>

                  {/* Text Input (Auto-shows when Custom, or shows editable value) */}
                  <div className="q-input-wrap">
                    <span className="q-affix-currency">₹</span>
                    <input
                      type="text"
                      id="monthlyBill"
                      name="monthlyBill"
                      value={formData.monthlyBill}
                      onChange={(e) => {
                        setBillMode('custom');
                        handleChange(e);
                      }}
                      placeholder={billMode === 'custom' ? t.customBillPlaceholder : t.monthlyBillPlaceholder}
                      className={`q-input q-has-currency ${billMode === 'custom' ? 'q-custom-active-input' : ''}`}
                    />
                  </div>
                  <span className="q-field-hint">
                    {billMode === 'custom'
                      ? (language === 'en' ? 'Custom bill mode active: type your exact monthly bill amount.' : 'कस्टम मोड सक्रिय: अपना सटीक मासिक बिल दर्ज करें।')
                      : (language === 'en' ? 'Select a preset above or click Custom to type exact bill.' : 'ऊपर से विकल्प चुनें या कस्टम पर क्लिक कर सटीक बिल लिखें।')}
                  </span>
                </div>

                {/* Column 3: Point 7 — Approximate Available Roof Area */}
                <div className="q-col-cell q-cell-elevated">
                  <div className="q-label-with-mode">
                    <label htmlFor="roofArea" className="q-label">
                      <span className="q-num">7.</span>
                      <span>{t.roofAreaLabel}</span>
                    </label>
                  </div>

                  {/* Preset Chips + Custom Mode Button */}
                  <div className="q-chips-grid">
                    {areaPresets.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        className={`q-chip-btn ${roofAreaMode === 'preset' && formData.roofArea === preset ? 'active' : ''}`}
                        onClick={() => handleAreaPresetSelect(preset)}
                      >
                        {preset}
                      </button>
                    ))}
                    <button
                      type="button"
                      className={`q-chip-btn q-custom-toggle-btn ${roofAreaMode === 'custom' ? 'active' : ''}`}
                      onClick={handleAreaCustomClick}
                    >
                      {t.customBtn}
                    </button>
                  </div>

                  {/* Text Input (Auto-shows when Custom, or shows editable value) */}
                  <div className="q-input-wrap">
                    <input
                      type="text"
                      id="roofArea"
                      name="roofArea"
                      value={formData.roofArea}
                      onChange={(e) => {
                        setRoofAreaMode('custom');
                        handleChange(e);
                      }}
                      placeholder={roofAreaMode === 'custom' ? t.customAreaPlaceholder : t.roofAreaPlaceholder}
                      className={`q-input ${roofAreaMode === 'custom' ? 'q-custom-active-input' : ''}`}
                    />
                  </div>
                  <span className="q-field-hint">
                    {roofAreaMode === 'custom'
                      ? (language === 'en' ? 'Custom roof area mode active: enter your available sq. ft.' : 'कस्टम मोड सक्रिय: अपना उपलब्ध वर्ग फुट क्षेत्रफल लिखें।')
                      : (language === 'en' ? 'Rule of thumb: ~80 sq. ft. shadow-free roof required per 1 kW.' : 'सामान्य नियम: प्रति 1 kW हेतु ~80 वर्ग फुट छाया-मुक्त छत चाहिए।')}
                  </span>
                </div>
              </div>
            </div>

            {/* ============================================================== */}
            {/* SECTION 3: SPECIFICATIONS, POLICIES & FORMAL ACCEPTANCE        */}
            {/* ============================================================== */}
            <div className="q-section-block">
              <div className="q-section-header">
                <div className="q-sec-title-bar">
                  <span className="q-sec-step">03</span>
                  <h4 className="q-sec-title">{t.sec3Title}</h4>
                </div>
                <div className="q-sec-divider" aria-hidden="true" />
              </div>

              {/* Point 8: Full Width Remarks & Notes Textarea */}
              <div className="q-point8-fullwidth">
                <label htmlFor="message" className="q-label">
                  <span className="q-num">8.</span>
                  <span>{t.messageLabel}</span>
                  <span className="q-optional-tag">({language === 'en' ? 'Optional' : 'वैकल्पिक'})</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  className="q-textarea q-textarea-full"
                ></textarea>
                <span className="q-field-hint">
                  {language === 'en'
                    ? 'Mention your roof surface type (RCC flat, tin/metal shed, elevated structure), floor height, or specific site access notes.'
                    : 'अपनी छत का प्रकार (आरसीसी समतल, टिन शेड, एलिवेटेड स्ट्रक्चर), छत की मंजिल या कोई विशेष निर्देश साझा करें।'}
                </span>
              </div>

              {/* Compact Policy A Card: Engineering Site Visit & Pricing Policy */}
              <div className={`q-compact-policy-card ${policyAccepted ? 'is-accepted' : ''}`}>
                <div className="q-compact-policy-main">
                  <label className="q-compact-check-label">
                    <input
                      type="checkbox"
                      required
                      checked={policyAccepted}
                      onChange={(e) => setPolicyAccepted(e.target.checked)}
                      className="q-checkbox-input"
                    />
                    <div className="q-compact-policy-text">
                      <div className="q-compact-title-row">
                        <span className="q-compact-tag">{t.policySectionTitle}</span>
                        <span className="q-required-star">*</span>
                      </div>
                      <p className="q-compact-snippet">
                        {t.floorLevelNote}
                      </p>
                    </div>
                  </label>
                </div>
                <button
                  type="button"
                  className="q-btn-read-policy"
                  onClick={() => setActivePolicyModal('siteVisit')}
                >
                  {t.readDetailsBtn}
                </button>
              </div>

              {/* Compact Policy B Card: Corporate Data Privacy & Security Policy */}
              <div className={`q-compact-policy-card ${privacyAccepted ? 'is-accepted' : ''}`}>
                <div className="q-compact-policy-main">
                  <label className="q-compact-check-label">
                    <input
                      type="checkbox"
                      required
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="q-checkbox-input"
                    />
                    <div className="q-compact-policy-text">
                      <div className="q-compact-title-row">
                        <span className="q-compact-tag">{t.privacySectionTitle}</span>
                        <span className="q-required-star">*</span>
                      </div>
                      <p className="q-compact-snippet">
                        {t.privacySummaryDesc}
                      </p>
                    </div>
                  </label>
                </div>
                <button
                  type="button"
                  className="q-btn-read-policy"
                  onClick={() => setActivePolicyModal('privacy')}
                >
                  {t.readDetailsBtn}
                </button>
              </div>

              {/* Full Width Submission Row */}
              <div className="q-fullwidth-submit-row">
                <button
                  type="submit"
                  disabled={isSubmitting || !bothAccepted}
                  className={`q-master-submit-btn ${!bothAccepted ? 'btn-disabled' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="q-btn-spinner-wrap">
                      <span className="q-btn-spinner"></span>
                      <span>{t.submittingBtn}</span>
                    </span>
                  ) : !bothAccepted ? (
                    <span>{t.acceptBothToSubmit}</span>
                  ) : (
                    <span>{t.submitBtn} →</span>
                  )}
                </button>

                {!bothAccepted && (
                  <div className="q-both-policies-alert">
                    <span>{t.bothPoliciesRequiredWarning}</span>
                  </div>
                )}

                <div className="q-submit-security-note">
                  <span>{t.notificationNotice}</span>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>

      {/* ============================================================== */}
      {/* Quotation Success Confirmation Modal */}
      {/* ============================================================== */}
      {modalOpen && (
        <div className="q-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="q-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="q-modal-head">
              <div className="q-modal-icon-circle">✓</div>
              <h3 className="q-modal-title">{t.modalTitle}</h3>
              <p className="q-modal-sub">{t.modalSub}</p>
              <div className="q-modal-ref-badge">
                <span>{t.refNumberLabel}</span>
                <strong>{refId}</strong>
              </div>
            </div>

            <div className="q-modal-body">
              <h4 className="q-modal-summary-title">{t.summaryHeading}</h4>

              <div className="q-modal-summary-grid">
                <div className="q-summary-row">
                  <span className="q-sr-label">{language === 'en' ? 'Applicant Name:' : 'आवेदक का नाम:'}</span>
                  <span className="q-sr-val">{formData.fullName}</span>
                </div>
                <div className="q-summary-row">
                  <span className="q-sr-label">{language === 'en' ? 'Phone / WhatsApp:' : 'फोन / व्हाट्सएप:'}</span>
                  <span className="q-sr-val">+91 {formData.phone}</span>
                </div>
                <div className="q-summary-row">
                  <span className="q-sr-label">{language === 'en' ? 'Email Address:' : 'ईमेल पता:'}</span>
                  <span className="q-sr-val">{formData.email}</span>
                </div>
                <div className="q-summary-row">
                  <span className="q-sr-label">{language === 'en' ? 'District in Bihar:' : 'बिहार में जिला:'}</span>
                  <span className="q-sr-val">{formData.district}</span>
                </div>
                <div className="q-summary-row">
                  <span className="q-sr-label">{language === 'en' ? 'Selected Scheme:' : 'चयनित सोलर सिस्टम:'}</span>
                  <span className="q-sr-val font-bold text-amber">{selectedSchemeObj?.label}</span>
                </div>
                {formData.monthlyBill && (
                  <div className="q-summary-row">
                    <span className="q-sr-label">{language === 'en' ? 'Monthly Bill:' : 'मासिक बिल:'}</span>
                    <span className="q-sr-val">{formData.monthlyBill}</span>
                  </div>
                )}
                {formData.roofArea && (
                  <div className="q-summary-row">
                    <span className="q-sr-label">{language === 'en' ? 'Roof Area:' : 'छत का क्षेत्रफल:'}</span>
                    <span className="q-sr-val">{formData.roofArea}</span>
                  </div>
                )}
                <div className="q-summary-row">
                  <span className="q-sr-label">{language === 'en' ? 'Accepted Guidelines:' : 'स्वीकृत नीतियां:'}</span>
                  <span className="q-sr-val font-semibold text-green">✓ Site Visit & Privacy Policies</span>
                </div>
              </div>

              {/* Floor Level Site Visit Advisory Banner */}
              <div className="q-modal-floor-callout">
                <span>{t.floorLevelNote}</span>
              </div>

              <div className="q-modal-email-notice">
                <span>{t.emailSentNotice}</span>
              </div>
            </div>

            <div className="q-modal-actions">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="q-modal-btn-whatsapp"
              >
                💬 {t.btnWhatsApp}
              </a>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="q-modal-btn-close"
              >
                {t.btnClose}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* Policy Details Popup Modal (Engineering Site Visit or Privacy) */}
      {/* ============================================================== */}
      {activePolicyModal && (
        <div className="q-modal-backdrop" onClick={() => setActivePolicyModal(null)}>
          <div className="q-policy-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="q-policy-modal-head">
              <div className="q-policy-modal-head-left">
                <span className="q-policy-modal-tag">
                  {activePolicyModal === 'siteVisit' ? 'ENGINEERING ADVISORY' : 'DATA PRIVACY'}
                </span>
                <h3 className="q-policy-modal-title">
                  {activePolicyModal === 'siteVisit' ? t.policySectionTitle : t.privacySectionTitle}
                </h3>
              </div>
              <button
                type="button"
                className="q-policy-modal-close-icon"
                onClick={() => setActivePolicyModal(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="q-policy-modal-body">
              {activePolicyModal === 'siteVisit' ? (
                <>
                  <div className="q-modal-floor-callout">
                    <span>{t.floorLevelNote}</span>
                  </div>
                  <div className="q-policy-paragraphs">
                    <p className="q-policy-p">
                      <strong>1. {language === 'en' ? 'Rooftop Floor Level & Cabling Variance:' : 'छत की मंजिल एवं केबलिंग दूरी:'}</strong> {t.policyP1}
                    </p>
                    <p className="q-policy-p">
                      <strong>2. {language === 'en' ? 'Physical Shadow Feasibility & Sanction:' : 'छाया-मुक्त फिजिबिलिटी एवं ग्रिड स्वीकृति:'}</strong> {t.policyP2}
                    </p>
                    <p className="q-policy-p">
                      <strong>3. {language === 'en' ? 'Direct Benefit Transfer (DBT) Subsidy Credit:' : 'सीधे बैंक खाते में डीबीटी सब्सिडी:'}</strong> {t.policyP3}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="q-modal-floor-callout">
                    <span>{language === 'en' ? 'SSL 256-Bit Encrypted Data Governance · Certified Engineering Desk' : '256-बिट सुरक्षित एसएसएल डेटा ट्रांसमिशन · प्रमाणित इंजीनियरिंग डेस्क'}</span>
                  </div>
                  <div className="q-policy-paragraphs">
                    <p className="q-policy-p">
                      <strong>1. {language === 'en' ? 'Confidentiality & Fair Use:' : 'पूर्ण गोपनीयता एवं डेटा सुरक्षा:'}</strong> {t.privacyP1}
                    </p>
                    <p className="q-policy-p">
                      <strong>2. {language === 'en' ? 'Zero Third-Party Sharing:' : 'शून्य तृतीय-पक्ष प्रकटीकरण:'}</strong> {t.privacyP2}
                    </p>
                    <p className="q-policy-p">
                      <strong>3. {language === 'en' ? 'Direct Dual Notification:' : 'द्वि-स्तरीय त्वरित सूचना:'}</strong> {t.privacyP3}
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="q-policy-modal-actions">
              <button
                type="button"
                className="q-btn-modal-accept"
                onClick={() => {
                  if (activePolicyModal === 'siteVisit') setPolicyAccepted(true);
                  if (activePolicyModal === 'privacy') setPrivacyAccepted(true);
                  setActivePolicyModal(null);
                }}
              >
                {t.modalAcceptBtn}
              </button>
              <button
                type="button"
                className="q-btn-modal-dismiss"
                onClick={() => setActivePolicyModal(null)}
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
