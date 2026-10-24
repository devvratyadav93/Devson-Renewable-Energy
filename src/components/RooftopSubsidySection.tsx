'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

interface SubsidyTier {
  kw: number;
  dailyUnits: number;
  monthlyUnits: number;
  sqFt: number;
  totalCost: number;
  centralSubsidy: number;
  stateSubsidy: number;
  totalSubsidy: number;
  netPayable: number;
}

const subsidyData: SubsidyTier[] = [
  { kw: 1, dailyUnits: 4, monthlyUnits: 120, sqFt: 80, totalCost: 70000, centralSubsidy: 30000, stateSubsidy: 10000, totalSubsidy: 40000, netPayable: 30000 },
  { kw: 2, dailyUnits: 8, monthlyUnits: 240, sqFt: 160, totalCost: 140000, centralSubsidy: 60000, stateSubsidy: 20000, totalSubsidy: 80000, netPayable: 60000 },
  { kw: 3, dailyUnits: 12, monthlyUnits: 360, sqFt: 240, totalCost: 210000, centralSubsidy: 78000, stateSubsidy: 20000, totalSubsidy: 98000, netPayable: 112000 },
  { kw: 4, dailyUnits: 16, monthlyUnits: 480, sqFt: 320, totalCost: 280000, centralSubsidy: 78000, stateSubsidy: 20000, totalSubsidy: 98000, netPayable: 182000 },
  { kw: 5, dailyUnits: 20, monthlyUnits: 600, sqFt: 400, totalCost: 325000, centralSubsidy: 78000, stateSubsidy: 20000, totalSubsidy: 98000, netPayable: 227000 },
  { kw: 6, dailyUnits: 24, monthlyUnits: 720, sqFt: 480, totalCost: 390000, centralSubsidy: 78000, stateSubsidy: 20000, totalSubsidy: 98000, netPayable: 292000 },
  { kw: 7, dailyUnits: 28, monthlyUnits: 840, sqFt: 560, totalCost: 455000, centralSubsidy: 78000, stateSubsidy: 20000, totalSubsidy: 98000, netPayable: 357000 },
  { kw: 8, dailyUnits: 32, monthlyUnits: 960, sqFt: 640, totalCost: 520000, centralSubsidy: 78000, stateSubsidy: 20000, totalSubsidy: 98000, netPayable: 422000 },
  { kw: 9, dailyUnits: 36, monthlyUnits: 1080, sqFt: 720, totalCost: 585000, centralSubsidy: 78000, stateSubsidy: 20000, totalSubsidy: 98000, netPayable: 487000 },
  { kw: 10, dailyUnits: 40, monthlyUnits: 1200, sqFt: 800, totalCost: 620000, centralSubsidy: 78000, stateSubsidy: 20000, totalSubsidy: 98000, netPayable: 522000 },
];

const getIdealFor = (kw: number, lang: 'en' | 'hi'): string => {
  const map: Record<number, { en: string; hi: string }> = {
    1: { en: 'Small Homes / 1-2 BHK', hi: 'छोटे मकान / 1-2 बीएचके' },
    2: { en: 'Medium Homes / 2-3 BHK', hi: 'मध्यम आवास / 2-3 बीएचके' },
    3: { en: 'Standard Villas / High Subsidy (Most Popular)', hi: 'मानक आवास / अधिकतम सब्सिडी (सर्वाधिक लोकप्रिय)' },
    4: { en: 'Large Independent Houses with AC', hi: 'एसी युक्त बड़े स्वतंत्र मकान' },
    5: { en: 'Shops, Clinics & Joint Families', hi: 'दुकानें, क्लीनिक एवं संयुक्त परिवार' },
    6: { en: 'Commercial Offices & Small Showrooms', hi: 'व्यावसायिक कार्यालय एवं शोरूम' },
    7: { en: 'Schools, Hostels & Boutiques', hi: 'स्कूल, हॉस्टल एवं बुटीक' },
    8: { en: 'Hotels, Hospitals & Workshops', hi: 'होटल, अस्पताल एवं वर्कशॉप' },
    9: { en: 'Warehouses & Commercial Complexes', hi: 'गोदाम एवं व्यावसायिक कॉम्प्लेक्स' },
    10: { en: 'Small Factories & Industrial Units', hi: 'लघु कारखाने एवं औद्योगिक इकाइयां' },
  };
  return map[kw]?.[lang] || '';
};

const formatINR = (val: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(val);
};

export const RooftopSubsidySection: React.FC = () => {
  const [selectedKw, setSelectedKw] = useState<number>(3);
  const [selectedSchemeFilter, setSelectedSchemeFilter] = useState<'all' | 'central' | 'state'>('all');
  const [showFullTable, setShowFullTable] = useState<boolean>(true);
  const { language } = useLanguage();
  const t = translations[language].subsidy;

  const current = subsidyData.find((d) => d.kw === selectedKw) || subsidyData[2];

  // Calculate values according to selected scheme filter
  let displayedSubsidy = current.totalSubsidy;
  let displayedNet = current.netPayable;
  let subsidyBreakdownText = `Central: ${formatINR(current.centralSubsidy)} + Bihar State: ${formatINR(current.stateSubsidy)}`;

  if (selectedSchemeFilter === 'central') {
    displayedSubsidy = current.centralSubsidy;
    displayedNet = current.totalCost - current.centralSubsidy;
    subsidyBreakdownText = `PM Surya Ghar Central Subsidy (Up to ₹78,000)`;
  } else if (selectedSchemeFilter === 'state') {
    displayedSubsidy = current.stateSubsidy;
    displayedNet = current.totalCost - current.stateSubsidy;
    subsidyBreakdownText = `Bihar State Govt BREDA Additional Subsidy`;
  }

  const whatsappMessage = encodeURIComponent(
    language === 'en'
      ? `Hello DEVSON Renewable Energy, I am interested in the ${current.kw} kW Rooftop Solar System (Net Investment: ${formatINR(displayedNet)}). Please share consultation details for my property in Bihar.`
      : `नमस्ते देवसन रिन्यूएबल एनर्जी, मुझे ${current.kw} किलोवाट रूफटॉप सोलर सिस्टम (शुद्ध लागत: ${formatINR(displayedNet)}) में रुचि है। कृपया बिहार स्थित मेरी संपत्ति के लिए परामर्श विवरण साझा करें।`
  );

  return (
    <section id="subsidy" className="subsidy-section">
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-text">{t.sectionBadge}</span>
          </div>
          <h2 className="sec-heading">{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        {/* Scheme Selector Filter Tabs */}
        <div className="scheme-filter-tabs-wrap reveal">
          <div className="scheme-filter-label">{t.selectorTitle}</div>
          <div className="scheme-filter-tabs">
            <button
              type="button"
              className={`scheme-filter-tab ${selectedSchemeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedSchemeFilter('all')}
            >
              ★ {t.tabAll}
            </button>
            <button
              type="button"
              className={`scheme-filter-tab ${selectedSchemeFilter === 'central' ? 'active' : ''}`}
              onClick={() => setSelectedSchemeFilter('central')}
            >
              🇮🇳 {t.tabCentral}
            </button>
            <button
              type="button"
              className={`scheme-filter-tab ${selectedSchemeFilter === 'state' ? 'active' : ''}`}
              onClick={() => setSelectedSchemeFilter('state')}
            >
              🏛️ {t.tabState}
            </button>
          </div>
        </div>

        {/* Capacity Selector Tabs (1 kW to 10 kW) */}
        <div className="capacity-selector-wrap reveal">
          <label className="cs-label">{t.capacityLabel}</label>
          <div className="capacity-pills">
            {subsidyData.map((tier) => (
              <button
                key={tier.kw}
                type="button"
                className={`cap-pill ${tier.kw === selectedKw ? 'active' : ''}`}
                onClick={() => setSelectedKw(tier.kw)}
                aria-label={`${tier.kw} kW`}
              >
                <span className="cap-kw">{tier.kw} kW</span>
                {tier.kw === 3 && <span className="cap-popular">★ {language === 'en' ? 'Most Popular' : 'सर्वाधिक लोकप्रिय'}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Calculation Card */}
        <div className="subsidy-calc-card reveal">
          <div className="scc-header">
            <div>
              <div className="scc-badge">{language === 'en' ? '✓ SELECTED CAPACITY' : '✓ चयनित क्षमता'}</div>
              <h3 className="scc-title">{current.kw} kW Solar System</h3>
              <p className="scc-sub">{getIdealFor(current.kw, language)}</p>
            </div>
            <div className="scc-net-wrap">
              <span className="scc-net-lbl">{t.netPayableLabel}</span>
              <span className="scc-net-val">{formatINR(displayedNet)}</span>
              <span className="scc-net-save">
                {language === 'en' ? 'You Save' : 'आपकी बचत:'} {formatINR(displayedSubsidy)} ({language === 'en' ? 'Subsidy Benefit' : 'सब्सिडी लाभ'})
              </span>
            </div>
          </div>

          <div className="scc-grid">
            <div className="scc-metric">
              <div className="scc-metric-lbl">{t.dailyGenLabel}</div>
              <div className="scc-metric-val">{current.dailyUnits} Units/Day</div>
              <div className="scc-metric-sub">{language === 'en' ? 'Approx.' : 'अनुमानित'} {current.monthlyUnits} Units/Month</div>
            </div>

            <div className="scc-metric">
              <div className="scc-metric-lbl">{t.areaLabel}</div>
              <div className="scc-metric-val">{current.sqFt} Sq. Ft.</div>
              <div className="scc-metric-sub">{language === 'en' ? 'Shadow-free roof space' : 'छाया-मुक्त छत क्षेत्र'}</div>
            </div>

            <div className="scc-metric">
              <div className="scc-metric-lbl">{t.totalCostLabel}</div>
              <div className="scc-metric-val">{formatINR(current.totalCost)}</div>
              <div className="scc-metric-sub">{language === 'en' ? 'Turnkey installation price' : 'टर्नकी स्थापना दर'}</div>
            </div>

            <div className="scc-metric highlight-green">
              <div className="scc-metric-lbl">{t.totalSubsidyLabel}</div>
              <div className="scc-metric-val text-green">{formatINR(displayedSubsidy)}</div>
              <div className="scc-metric-sub">{subsidyBreakdownText}</div>
            </div>
          </div>

          {/* Action Row */}
          <div className="scc-actions">
            <Link href="/energy-needs#quotation" className="scc-btn-quote">
              <span>⚡ {t.btnGetQuoteForThis}</span>
            </Link>
            <a
              href={`https://wa.me/919296950833?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="scc-btn-whatsapp"
            >
              <span>💬 {language === 'en' ? 'WhatsApp Inquiry' : 'व्हाट्सएप पूछताछ'}</span>
            </a>
            <a href="tel:+919296950833" className="scc-btn-call">
              <span>📞 {language === 'en' ? 'Call: 92969 50833' : 'कॉल: 92969 50833'}</span>
            </a>
          </div>
        </div>

        {/* 4 Application Sectors Grid with Photographic References */}
        <div className="sectors-banner reveal">
          <div className="sec-banner-head">
            <span className="sec-banner-badge">
              {language === 'en' ? 'ENGINEERING & DEPLOYMENT' : 'इंजीनियरिंग एवं स्थापना'}
            </span>
            <h3>{language === 'en' ? 'Complete Solar Solutions Across Bihar' : 'बिहार के सभी क्षेत्रों के लिए सौर समाधान'}</h3>
            <p>{language === 'en' ? 'Reliable solar engineering for homes, commercial retail, MSME industries, and agriculture.' : 'घरों, दुकानों, उद्योगों और कृषि के लिए विश्वसनीय सौर ऊर्जा समाधान।'}</p>
          </div>
          <div className="sectors-grid">
            {/* Sector 1: Domestic Rooftops */}
            <div className="sector-card">
              <div className="sector-photo-wrap">
                <img
                  src="/assets/sectors/domestic.jpg"
                  alt={t.sector1Title}
                  className="sector-photo"
                />
                <span className="sector-badge-chip">
                  {language === 'en' ? 'Residential' : 'घरेलू'}
                </span>
              </div>
              <div className="sector-body">
                <h4>{t.sector1Title}</h4>
                <h5>{t.sector1Sub}</h5>
                <p>{t.sector1Desc}</p>
                <div className="sector-perk">
                  <span className="perk-check">✓</span>
                  <span>{language === 'en' ? 'Direct Subsidy: Up to ₹98,000' : 'सीधी सब्सिडी: ₹98,000 तक'}</span>
                </div>
                <div className="sector-perk">
                  <span className="perk-check">✓</span>
                  <span>{language === 'en' ? '300 Units Free Electricity/Mo' : '300 यूनिट मुफ्त बिजली/माह'}</span>
                </div>
                <a href="#quotation" className="sector-action-link">
                  {language === 'en' ? 'Get Home Quote →' : 'घरेलू कोटेशन प्राप्त करें →'}
                </a>
              </div>
            </div>

            {/* Sector 2: Commercial & Retail */}
            <div className="sector-card">
              <div className="sector-photo-wrap">
                <img
                  src="/assets/sectors/commercial.jpg"
                  alt={t.sector2Title}
                  className="sector-photo"
                />
                <span className="sector-badge-chip">
                  {language === 'en' ? 'Commercial' : 'व्यावसायिक'}
                </span>
              </div>
              <div className="sector-body">
                <h4>{t.sector2Title}</h4>
                <h5>{t.sector2Sub}</h5>
                <p>{t.sector2Desc}</p>
                <div className="sector-perk">
                  <span className="perk-check">✓</span>
                  <span>{language === 'en' ? '40% Accelerated Depreciation' : '40% त्वरित मूल्यह्रास कर बचत'}</span>
                </div>
                <div className="sector-perk">
                  <span className="perk-check">✓</span>
                  <span>{language === 'en' ? 'Cut Daytime HT Grid Bills' : 'दिन के व्यावसायिक बिलों में भारी कमी'}</span>
                </div>
                <a href="#quotation" className="sector-action-link">
                  {language === 'en' ? 'Get Business Quote →' : 'व्यावसायिक कोटेशन लें →'}
                </a>
              </div>
            </div>

            {/* Sector 3: Industrial & MSME */}
            <div className="sector-card">
              <div className="sector-photo-wrap">
                <img
                  src="/assets/sectors/industrial.jpg"
                  alt={t.sector3Title}
                  className="sector-photo"
                />
                <span className="sector-badge-chip">
                  {language === 'en' ? 'Industrial' : 'औद्योगिक'}
                </span>
              </div>
              <div className="sector-body">
                <h4>{t.sector3Title}</h4>
                <h5>{t.sector3Sub}</h5>
                <p>{t.sector3Desc}</p>
                <div className="sector-perk">
                  <span className="perk-check">✓</span>
                  <span>{language === 'en' ? '10 kW to 250+ kW Heavy Plants' : '10 kW से 250+ kW औद्योगिक संयंत्र'}</span>
                </div>
                <div className="sector-perk">
                  <span className="perk-check">✓</span>
                  <span>{language === 'en' ? 'Net Metering & Diesel Offset' : 'नेट-मीटरिंग एवं डीजल से मुक्ति'}</span>
                </div>
                <a href="#quotation" className="sector-action-link">
                  {language === 'en' ? 'Get Factory Quote →' : 'उद्योग कोटेशन प्राप्त करें →'}
                </a>
              </div>
            </div>

            {/* Sector 4: Agricultural Pumps */}
            <div className="sector-card">
              <div className="sector-photo-wrap">
                <img
                  src="/assets/sectors/agricultural.jpg"
                  alt={t.sector4Title}
                  className="sector-photo"
                />
                <span className="sector-badge-chip">
                  {language === 'en' ? 'Agri Pumps' : 'कृषि पंप'}
                </span>
              </div>
              <div className="sector-body">
                <h4>{t.sector4Title}</h4>
                <h5>{t.sector4Sub}</h5>
                <p>{t.sector4Desc}</p>
                <div className="sector-perk">
                  <span className="perk-check">✓</span>
                  <span>{language === 'en' ? '60%–75% Subsidized Cost' : '60% से 75% तक लागत सब्सिडी'}</span>
                </div>
                <div className="sector-perk">
                  <span className="perk-check">✓</span>
                  <span>{language === 'en' ? 'Zero Diesel Running Cost' : 'डीजल खर्च से शत-प्रतिशत मुक्ति'}</span>
                </div>
                <a href="#quotation" className="sector-action-link">
                  {language === 'en' ? 'Get Agri Quote →' : 'कृषि कोटेशन प्राप्त करें →'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 1 kW – 10 kW Official Pricing Schedule Table */}
        <div className="subsidy-table-section reveal">
          <div className="sts-head">
            <div>
              <h3 className="sts-title">{t.tableTitle}</h3>
              <p className="sts-sub">{t.tableSub}</p>
            </div>
            <button
              type="button"
              className="sts-toggle-btn"
              onClick={() => setShowFullTable(!showFullTable)}
            >
              {showFullTable ? t.hideTableBtn : t.showTableBtn}
            </button>
          </div>

          {showFullTable && (
            <div className="table-responsive">
              <table className="subsidy-data-table">
                <thead>
                  <tr>
                    <th className="th-cap">{t.thCapacity}</th>
                    <th className="th-daily">{t.thDaily}</th>
                    <th className="th-monthly">{t.thMonthly}</th>
                    <th className="th-area">{t.thArea}</th>
                    <th className="th-cost">{t.thTotalCost}</th>
                    <th className="th-central">{t.thCentralSubsidy}</th>
                    <th className="th-state">{t.thStateSubsidy}</th>
                    <th className="th-subsidy">{t.thTotalSubsidy}</th>
                    <th className="th-net">{t.thNetPayable}</th>
                    <th className="th-action">{t.thAction}</th>
                  </tr>
                </thead>
                <tbody>
                  {subsidyData.map((row) => (
                    <tr
                      key={row.kw}
                      className={row.kw === selectedKw ? 'row-selected' : ''}
                      onClick={() => setSelectedKw(row.kw)}
                    >
                      <td className="td-cap">
                        <strong>{row.kw} kW</strong>
                        {row.kw === 3 && <span className="table-pop-tag">★ Pop</span>}
                      </td>
                      <td className="td-daily">{row.dailyUnits}</td>
                      <td className="td-monthly">{row.monthlyUnits}</td>
                      <td className="td-area">{row.sqFt} sq. ft.</td>
                      <td className="td-cost">{formatINR(row.totalCost)}</td>
                      <td className="td-central text-green">{formatINR(row.centralSubsidy)}</td>
                      <td className="td-state text-green">{formatINR(row.stateSubsidy)}</td>
                      <td className="td-subsidy text-green font-bold">{formatINR(row.totalSubsidy)}</td>
                      <td className="td-net">
                        <strong>{formatINR(row.netPayable)}</strong>
                      </td>
                      <td className="td-action">
                        <button
                          type="button"
                          className={`table-select-btn ${row.kw === selectedKw ? 'selected' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedKw(row.kw);
                          }}
                        >
                          {row.kw === selectedKw ? t.btnSelected : t.btnSelect}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
