'use client';

import React, { useEffect, useState } from 'react';
import { FaqSection } from '@/components/FaqSection';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              entry.target.classList.remove('animate-in');
            }
          });
        },
        { threshold: 0.05, rootMargin: '100px 0px' }
      );

      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          el.classList.add('animate-in');
          observer?.observe(el);
        } else {
          el.classList.add('is-visible');
        }
      });
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="subpage-wrapper">
      {/* Subpage Banner */}
      <header className="subpage-banner">
        <div className="wrap">
          <span className="subpage-tag">
            {language === 'en' ? 'LOCAL PRESENCE & SUPPORT' : 'स्थानीय उपस्थिति एवं तकनीकी सहायता'}
          </span>
          <h1 className="subpage-title">
            {language === 'en'
              ? 'Contact Our Energy Experts & Solar FAQ'
              : 'हमारे सौर ऊर्जा विशेषज्ञों से संपर्क करें एवं अक्सर पूछे जाने वाले प्रश्न'}
          </h1>
          <p className="subpage-desc">
            {language === 'en'
              ? 'Reach our registered offices in Rajgir (Nalanda) and Nawada, get in touch via phone or WhatsApp, or explore our comprehensive solar knowledge base.'
              : 'राजगीर (नालंदा) एवं नवादा स्थित हमारे कार्यालयों से संपर्क करें, फोन या व्हाट्सएप पर बात करें अथवा अक्सर पूछे जाने वाले प्रश्नों के उत्तर देखें।'}
          </p>
        </div>
      </header>

      {/* Quick Inquiry / Message Section */}
      <section className="contact-inquiry-section">
        <div className="wrap">
          <div className="quick-inquiry-box reveal">
            <div className="inquiry-header">
              <span className="inquiry-badge">
                ✉ {language === 'en' ? 'DIRECT INQUIRY' : 'त्वरित पूछताछ'}
              </span>
              <h3>
                {language === 'en' ? 'Send Us a Quick Message' : 'हमें संदेश भेजें'}
              </h3>
              <p>
                {language === 'en'
                  ? 'Have a specific query or need a site feasibility check? Drop your contact details below.'
                  : 'कोई विशेष प्रश्न है या रूफटॉप निरीक्षण चाहते हैं? नीचे अपना विवरण दर्ज करें।'}
              </p>
            </div>

            {submitted ? (
              <div className="inquiry-success">
                <div className="success-icon">✓</div>
                <h4>
                  {language === 'en'
                    ? 'Message Received Successfully!'
                    : 'संदेश सफलतापूर्वक प्राप्त हुआ!'}
                </h4>
                <p>
                  {language === 'en'
                    ? 'Thank you for reaching out. Our engineering team in Bihar will get back to you shortly.'
                    : 'संपर्क करने के लिए धन्यवाद। बिहार स्थित हमारी तकनीकी टीम शीघ्र ही आपसे संपर्क करेगी।'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormState({ name: '', phone: '', email: '', message: '' });
                    setSubmitted(false);
                  }}
                  className="btn-send-another"
                >
                  {language === 'en' ? 'Send Another Message' : 'दूसरा संदेश भेजें'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="inquiry-form">
                <div className="inquiry-grid">
                  <div className="form-group">
                    <label htmlFor="inquiry-name" className="form-label">
                      {language === 'en' ? 'Your Name *' : 'आपका नाम *'}
                    </label>
                    <input
                      type="text"
                      id="inquiry-name"
                      name="name"
                      required
                      placeholder={language === 'en' ? 'e.g. Ramesh Kumar' : 'उदा. रमेश कुमार'}
                      value={formState.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiry-phone" className="form-label">
                      {language === 'en' ? '10-digit Phone *' : '10 अंकों का फोन नंबर *'}
                    </label>
                    <input
                      type="tel"
                      id="inquiry-phone"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      placeholder={language === 'en' ? 'e.g. 9876543210' : 'उदा. 9876543210'}
                      value={formState.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiry-email" className="form-label">
                      {language === 'en' ? 'Email Address' : 'ईमेल पता'}
                    </label>
                    <input
                      type="email"
                      id="inquiry-email"
                      name="email"
                      placeholder={language === 'en' ? 'name@example.com' : 'name@example.com'}
                      value={formState.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Quick Topic Chips */}
                <div className="inquiry-topics-wrap">
                  <span className="inquiry-topics-label">
                    {language === 'en' ? 'Quick Topic (Optional):' : 'त्वरित विषय (वैकल्पिक):'}
                  </span>
                  <div className="inquiry-topic-chips">
                    {[
                      { en: 'PM Surya Ghar (1-3 kW)', hi: 'पीएम सूर्य घर (1-3 kW)' },
                      { en: 'Site Feasibility Survey', hi: 'रूफटॉप निरीक्षण / सर्वे' },
                      { en: 'Commercial Net Metering', hi: 'कमर्शियल नेट-मीटरिंग' },
                      { en: 'PM-KUSUM Agri Pump', hi: 'पीएम-कुसुम कृषि पंप' },
                    ].map((topic) => {
                      const topicText = language === 'en' ? topic.en : topic.hi;
                      return (
                        <button
                          key={topic.en}
                          type="button"
                          className="inquiry-chip"
                          onClick={() => {
                            setFormState((prev) => ({
                              ...prev,
                              message: prev.message
                                ? `${prev.message} [${topicText}]`
                                : `Inquiry about: ${topicText}`,
                            }));
                          }}
                        >
                          + {topicText}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="inquiry-message" className="form-label">
                    {language === 'en'
                      ? 'Tell us about your property, location, or solar query *'
                      : 'अपनी संपत्ति, स्थान या सोलर प्रश्न के बारे में बताएं *'}
                  </label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    rows={4}
                    required
                    placeholder={
                      language === 'en'
                        ? 'Describe your requirement (e.g. rooftop area in sq ft, monthly electricity bill, or subsidy queries)...'
                        : 'अपनी आवश्यकता बताएं (जैसे छत का क्षेत्रफल, मासिक बिजली बिल अथवा सब्सिडी से जुड़े प्रश्न)...'
                    }
                    value={formState.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <div className="inquiry-actions-row">
                  <div className="inquiry-privacy-note">
                    <span>🔒 {language === 'en' ? 'Direct response from DEVSON engineering support in Rajgir & Nawada. No spam guaranteed.' : 'देवसन तकनीकी टीम (राजगीर व नवादा) द्वारा त्वरित संपर्क। गोपनीयता सुनिश्चित।'}</span>
                  </div>

                  <button type="submit" className="btn-inquiry-submit">
                    {language === 'en' ? 'Send Message ✉' : 'संदेश भेजें ✉'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Comprehensive Categorized FAQ Accordion */}
      <FaqSection />

      {/* Offices & Contact Cards Grid at the Very Bottom */}
      <section className="contact-offices-section" id="offices">
        <div className="wrap">
          <div className="section-head text-center reveal">
            <span className="eyebrow">
              {language === 'en' ? 'PHYSICAL PRESENCE & STATUTORY OFFICES' : 'भौतिक उपस्थिति एवं वैधानिक कार्यालय'}
            </span>
            <h2>
              {language === 'en' ? 'Our Registered Offices & Locations' : 'हमारे पंजीकृत कार्यालय एवं स्थान'}
            </h2>
            <p>
              {language === 'en'
                ? 'Visit our corporate headquarters in Rajgir, branch office in Nawada, or inspect our verified banking & statutory details.'
                : 'राजगीर स्थित हमारे मुख्यालय, नवादा शाखा कार्यालय अथवा हमारे वैधानिक बैंकिंग विवरण देखें।'}
            </p>
          </div>

          <div className="contact-grid reveal">
            {/* Office 1: Head Office */}
            <div className="contact-card">
              <div className="contact-card-media">
                <img
                  src="/assets/offices/rajgir-head-office.jpg"
                  alt={language === 'en' ? 'DEVSON Renewable Energy Head Office Rajgir' : 'देवसन रिन्यूएबल एनर्जी मुख्यालय राजगीर'}
                  className="contact-card-img"
                  loading="lazy"
                />
                <span className="contact-badge-floating">
                  🏛️ {language === 'en' ? 'HEAD OFFICE' : 'मुख्यालय'}
                </span>
              </div>
              <div className="contact-card-content">
                <h3>
                  {language === 'en' ? 'Rajgir, Nalanda (Bihar)' : 'राजगीर, नालंदा (बिहार)'}
                </h3>
                <p className="contact-address">
                  Bihar Sharif Road, Panditpur More, Rajgir, Nalanda, Bihar — 803116<br />
                  <span className="landmark">{language === 'en' ? '(Opposite Hotel Stay Here)' : '(होटल स्टे हियर के सामने)'}</span>
                </p>
                <div className="contact-links">
                  <a href="tel:+919296950833" className="c-link">
                    📞 +91 92969 50833
                  </a>
                  <a href="mailto:devson.energy@gmail.com" className="c-link">
                    ✉ devson.energy@gmail.com
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Panditpur+More+Rajgir+Nalanda+Bihar+803116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="c-link"
                  >
                    📍 {language === 'en' ? 'Open in Google Maps' : 'गूगल मैप्स पर देखें'}
                  </a>
                </div>
              </div>
            </div>

            {/* Office 2: Branch Office */}
            <div className="contact-card">
              <div className="contact-card-media">
                <img
                  src="/assets/offices/nawada-branch-office.jpg"
                  alt={language === 'en' ? 'DEVSON Renewable Energy Branch Office Nawada' : 'देवसन रिन्यूएबल एनर्जी शाखा कार्यालय नवादा'}
                  className="contact-card-img"
                  loading="lazy"
                />
                <span className="contact-badge-floating">
                  🏢 {language === 'en' ? 'BRANCH OFFICE' : 'शाखा कार्यालय'}
                </span>
              </div>
              <div className="contact-card-content">
                <h3>
                  {language === 'en' ? 'Patel Nagar, Nawada (Bihar)' : 'पटेल नगर, नवादा (बिहार)'}
                </h3>
                <p className="contact-address">
                  Behind Dr. Arvind, Patel Nagar, Nawada, Bihar — 805110<br />
                  <span className="landmark">{language === 'en' ? '(Registered: Rajauli, Nawada — 805125)' : '(पंजीकृत: रजौली, नवादा — 805125)'}</span>
                </p>
                <div className="contact-links">
                  <a href="tel:+919973050833" className="c-link">
                    📞 +91 99730 50833
                  </a>
                  <a
                    href="https://wa.me/919296950833"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="c-link c-whatsapp"
                  >
                    💬 WhatsApp: 92969 50833
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Patel+Nagar+Nawada+Bihar+805110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="c-link"
                  >
                    📍 {language === 'en' ? 'Open in Google Maps' : 'गूगल मैप्स पर देखें'}
                  </a>
                </div>
              </div>
            </div>

            {/* Official Banking & Statutory Details */}
            <div className="contact-card highlight-card">
              <div className="contact-card-media">
                <img
                  src="/assets/offices/sbi-banking-partner.jpg"
                  alt="State Bank of India Official Banking Partner"
                  className="contact-card-img"
                  loading="lazy"
                />
                <span className="contact-badge-floating badge-gold">
                  🏦 {language === 'en' ? 'BANKING & STATUTORY' : 'बैंक एवं वैधानिक विवरण'}
                </span>
              </div>
              <div className="contact-card-content">
                <h3>
                  {language === 'en' ? 'State Bank of India' : 'भारतीय स्टेट बैंक'}
                </h3>
                <div className="statutory-list">
                  <div className="statutory-item">
                    <span className="stat-lbl">{language === 'en' ? 'Bank Account' : 'बैंक खाता:'}</span>
                    <span className="stat-val">SBI Rajgir (SBIN0003499)</span>
                  </div>
                  <div className="statutory-item">
                    <span className="stat-lbl">Corporate CIN</span>
                    <span className="stat-val">U35105BR2026PTC087766</span>
                  </div>
                  <div className="statutory-item">
                    <span className="stat-lbl">GSTIN (Bihar)</span>
                    <span className="stat-val">10AANCD0450H1Z5</span>
                  </div>
                  <div className="statutory-item">
                    <span className="stat-lbl">PAN / TAN</span>
                    <span className="stat-val">AANCD0450H / PTND07707A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
