'use client';

import React from 'react';

interface PMSuryaGharBenefitsCardProps {
  language: 'en' | 'hi';
}

export const PMSuryaGharBenefitsCard: React.FC<PMSuryaGharBenefitsCardProps> = ({ language }) => {
  const isEn = language === 'en';

  return (
    <div className="pmsg-benefits-container">
      {/* Primary Section Title */}
      <h3 className="pmsg-main-heading">
        {isEn ? 'Benefits' : 'योजना के प्रमुख लाभ (Benefits)'}
      </h3>

      {/* Top 2-Column Section: Residential Households vs GHS/RWA */}
      <div className="pmsg-subsidy-split">
        {/* Left Column: Subsidy for Residential Households */}
        <div className="pmsg-col pmsg-col-residential">
          <div className="pmsg-col-header">
            <span className="pmsg-header-line1">
              {isEn ? 'Subsidy for' : 'घरेलू परिवारों हेतु सब्सिडी'}
            </span>
            <span className="pmsg-header-line2">
              {isEn ? 'Residential Households' : 'Residential Households'}
            </span>
          </div>

          <div className="pmsg-sub-grid">
            {/* 1. Up to 2 kW */}
            <div className="pmsg-tier-cell">
              <div className="pmsg-tier-amount">Rs. 30,000</div>
              <div className="pmsg-tier-unit">{isEn ? 'per kW' : 'प्रति kW'}</div>
              <div className="pmsg-tier-desc">{isEn ? 'up to 2 kW' : '2 kW तक'}</div>
            </div>

            {/* 2. Additional capacity up to 3 kW */}
            <div className="pmsg-tier-cell">
              <div className="pmsg-tier-amount">Rs. 18,000</div>
              <div className="pmsg-tier-unit">{isEn ? 'per kW' : 'प्रति kW'}</div>
              <div className="pmsg-tier-desc">
                {isEn ? 'for additional capacity up to 3 kW' : '3 kW तक की अतिरिक्त क्षमता हेतु'}
              </div>
            </div>

            {/* 3. Capped at Rs. 78,000 */}
            <div className="pmsg-tier-cell">
              <div className="pmsg-tier-amount">Rs. 78,000</div>
              <div className="pmsg-tier-desc pmsg-tier-desc-long">
                {isEn
                  ? 'Total subsidy for systems larger than 3 kW capped at'
                  : '3 kW से बड़े संयंत्रों हेतु अधिकतम सब्सिडी सीमा'}
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Center Divider */}
        <div className="pmsg-vertical-divider" aria-hidden="true" />

        {/* Right Column: Subsidy for GHS/RWA */}
        <div className="pmsg-col pmsg-col-ghs">
          <div className="pmsg-col-header">
            <span className="pmsg-header-line1">
              {isEn ? 'Subsidy for ' : 'सोसायटियों हेतु सब्सिडी '}
              <strong className="pmsg-header-highlight">GHS/RWA</strong>
            </span>
            <span className="pmsg-header-sub">
              {isEn
                ? '(Group Housing Society/Resident Welfare Association)'
                : '(ग्रुप हाउसिंग सोसायटी / रेजिडेंट वेलफेयर एसोसिएशन)'}
            </span>
          </div>

          <div className="pmsg-ghs-content">
            <div className="pmsg-tier-amount">Rs. 18,000</div>
            <div className="pmsg-tier-unit">{isEn ? 'per kW' : 'प्रति kW'}</div>
            <p className="pmsg-ghs-desc">
              {isEn
                ? 'for common facilities, including EV charging, up to 500 kW Capacity(@3 kW per house) with the upper limit being inclusive of individual rooftop plants installed by individual residents in the GHS/RWA'
                : 'कॉमन सुविधाओं एवं ईवी चार्जिंग हेतु, 500 kW क्षमता तक (@3 kW प्रति आवास), जिसमें जीएचएस/आरडब्ल्यूए के व्यक्तिगत निवासियों द्वारा स्थापित सोलर संयंत्र शामिल हैं।'}
            </p>
          </div>
        </div>
      </div>

      {/* Special States Callout Note */}
      <div className="pmsg-special-states-note">
        {isEn
          ? 'For special states, an additional 10% Subsidy will be applicable per kW'
          : 'विशेष श्रेणी राज्यों हेतु, प्रति kW 10% अतिरिक्त सब्सिडी लागू होगी'}
      </div>

      {/* Capacity Recommendation Subtitle */}
      <h4 className="pmsg-table-heading">
        {isEn
          ? 'Suitable Rooftop Solar Plant Capacity for households'
          : 'घरेलू परिवारों हेतु उपयुक्त रूफटॉप सोलर प्लांट क्षमता'}
      </h4>

      {/* Household Sizing Matrix Table */}
      <div className="pmsg-table-wrap">
        <table className="pmsg-table">
          <tbody>
            <tr>
              <th scope="row" className="pmsg-table-th">
                {isEn
                  ? 'Average Monthly Electricity Consumption (units)'
                  : 'औसत मासिक बिजली खपत (यूनिट)'}
              </th>
              <td className="pmsg-table-td">0-150</td>
              <td className="pmsg-table-td">150-300</td>
              <td className="pmsg-table-td">&gt;300</td>
            </tr>
            <tr>
              <th scope="row" className="pmsg-table-th">
                {isEn
                  ? 'Suitable Rooftop Solar Plant Capacity'
                  : 'उपयुक्त रूफटॉप सोलर प्लांट क्षमता'}
              </th>
              <td className="pmsg-table-td pmsg-td-highlight">1-2 kW</td>
              <td className="pmsg-table-td pmsg-td-highlight">2-3 kW</td>
              <td className="pmsg-table-td pmsg-td-highlight">
                {isEn ? 'Above 3 kW' : '3 kW से अधिक'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Official Government Portal Link Banner */}
      <div className="pmsg-gov-link-banner">
        <div className="pmsg-glb-left">
          <span className="pmsg-glb-emblem">🏛️</span>
          <div>
            <div className="pmsg-glb-title">
              {isEn
                ? 'Official Government of India National Portal'
                : 'भारत सरकार का अधिकृत राष्ट्रीय सौर पोर्टल'}
            </div>
            <div className="pmsg-glb-sub">
              {isEn
                ? 'Ministry of New & Renewable Energy (MNRE) · Direct Benefit Transfer (DBT) Online Portal'
                : 'नवीन एवं नवीकरणीय ऊर्जा मंत्रालय (MNRE) · प्रत्यक्ष लाभ हस्तांतरण (DBT) ऑनलाइन पोर्टल'}
            </div>
          </div>
        </div>
        <a
          href="https://pmsuryaghar.gov.in/#/"
          target="_blank"
          rel="noopener noreferrer"
          className="pmsg-glb-btn"
          title="Open Official PM Surya Ghar National Portal in a new tab"
        >
          <span>https://pmsuryaghar.gov.in/#/</span>
          <span className="pmsg-glb-arrow">↗</span>
        </a>
      </div>
    </div>
  );
};

