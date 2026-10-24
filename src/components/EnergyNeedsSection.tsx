'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export const EnergyNeedsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].energyNeeds;

  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');

  // Appliance state maps appliance ID to quantity
  const [resQuantities, setResQuantities] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    translations.en.energyNeeds.appliancesResidential.forEach((app) => {
      init[app.id] = app.defaultQty;
    });
    return init;
  });

  const [commQuantities, setCommQuantities] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    translations.en.energyNeeds.appliancesCommercial.forEach((app) => {
      init[app.id] = app.defaultQty;
    });
    return init;
  });

  const currentAppliances =
    activeTab === 'residential' ? t.appliancesResidential : t.appliancesCommercial;
  const currentQuantities = activeTab === 'residential' ? resQuantities : commQuantities;

  const updateQuantity = (id: string, delta: number) => {
    if (activeTab === 'residential') {
      setResQuantities((prev) => ({
        ...prev,
        [id]: Math.max(0, Math.min(50, (prev[id] || 0) + delta)),
      }));
    } else {
      setCommQuantities((prev) => ({
        ...prev,
        [id]: Math.max(0, Math.min(100, (prev[id] || 0) + delta)),
      }));
    }
  };

  const setDirectQuantity = (id: string, val: number) => {
    const safeVal = Math.max(0, Math.min(100, isNaN(val) ? 0 : val));
    if (activeTab === 'residential') {
      setResQuantities((prev) => ({ ...prev, [id]: safeVal }));
    } else {
      setCommQuantities((prev) => ({ ...prev, [id]: safeVal }));
    }
  };

  // Calculate total load in kW
  const totalLoadKw = useMemo(() => {
    return currentAppliances.reduce((acc, app) => {
      const qty = currentQuantities[app.id] || 0;
      return acc + qty * app.power;
    }, 0);
  }, [currentAppliances, currentQuantities]);

  // Sizing recommendation:
  // With solar peak sun hours (5.5 hrs) and diversity factor, recommended solar kW is rounded up to realistic sizes:
  // 1 kW, 2 kW, 3 kW, 4 kW, 5 kW, 6 kW, 7 kW, 8 kW, 9 kW, 10 kW (or higher for commercial)
  const recommendedKw = useMemo(() => {
    if (totalLoadKw <= 1.2) return 1;
    if (totalLoadKw <= 2.2) return 2;
    if (totalLoadKw <= 3.4) return 3;
    if (totalLoadKw <= 4.5) return 4;
    if (totalLoadKw <= 5.8) return 5;
    if (totalLoadKw <= 7.0) return 6;
    if (totalLoadKw <= 8.2) return 7;
    if (totalLoadKw <= 9.4) return 8;
    if (totalLoadKw <= 10.5) return 9;
    return Math.min(50, Math.ceil(totalLoadKw));
  }, [totalLoadKw]);

  return (
    <section id="energy-needs" className="energy-needs-section">
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="section-badge">{t.badge}</div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-sub" style={{ maxWidth: '820px', margin: '0 auto' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Waaree-style Tabs: Residential vs Commercial */}
        <div className="energy-tabs-wrap">
          <button
            type="button"
            className={`energy-tab-btn ${activeTab === 'residential' ? 'active' : ''}`}
            onClick={() => setActiveTab('residential')}
          >
            {t.tabResidential}
          </button>
          <button
            type="button"
            className={`energy-tab-btn ${activeTab === 'commercial' ? 'active' : ''}`}
            onClick={() => setActiveTab('commercial')}
          >
            {t.tabCommercial}
          </button>
        </div>

        {/* Appliance Matrix Card */}
        <div className="energy-matrix-card">
          <div className="table-responsive">
            <table className="energy-table">
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>{t.colAppliance}</th>
                  <th style={{ width: '25%', textAlign: 'center' }}>{t.colUnits}</th>
                  <th style={{ width: '17%', textAlign: 'right' }}>{t.colPower}</th>
                  <th style={{ width: '18%', textAlign: 'right' }}>{t.colTotal}</th>
                </tr>
              </thead>
              <tbody>
                {currentAppliances.map((app) => {
                  const qty = currentQuantities[app.id] || 0;
                  const itemTotal = (qty * app.power).toFixed(3);

                  return (
                    <tr key={app.id}>
                      <td className="appliance-name-cell">
                        <span className="appliance-dot">•</span>
                        <strong>{app.name}</strong>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <div className="qty-control-pill">
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => updateQuantity(app.id, -1)}
                            aria-label={`Decrease ${app.name}`}
                          >
                            –
                          </button>
                          <input
                            type="number"
                            className="qty-input"
                            min="0"
                            max="100"
                            value={qty}
                            onChange={(e) =>
                              setDirectQuantity(app.id, parseInt(e.target.value, 10))
                            }
                            aria-label={`${app.name} quantity`}
                          />
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => updateQuantity(app.id, 1)}
                            aria-label={`Increase ${app.name}`}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td style={{ textAlign: 'right', color: '#B45309', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                        {app.power.toFixed(3)} kW
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 800, color: '#0B2818', fontFamily: 'var(--font-mono)', fontSize: '1rem' }}>
                        {itemTotal} kW
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Realtime Solar Sizing Recommendation Banner */}
          <div className="energy-summary-banner">
            <div className="energy-summary-metrics">
              <div className="metric-box">
                <span className="metric-label">{t.totalLoadLabel}</span>
                <span className="metric-val">{totalLoadKw.toFixed(2)} {t.kwUnit}</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-box highlight">
                <span className="metric-label">{t.recommendedLabel}</span>
                <span className="metric-val green">
                  {recommendedKw} {t.kwUnit}
                </span>
                <span className="metric-sub">{t.recommendedSub}</span>
              </div>
            </div>

            <div className="energy-summary-action">
              <a
                href="#subsidy"
                className="btn-energy-cta"
                onClick={() => {
                  // If element exists, dispatch an event or click the capacity button
                  const capacityBtn = document.querySelector(`[data-capacity="${recommendedKw}"]`) as HTMLButtonElement | null;
                  if (capacityBtn) {
                    capacityBtn.click();
                  }
                }}
              >
                <span>{t.ctaSubsidyBtn} ({recommendedKw} kW)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
