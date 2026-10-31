'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { PMSuryaGharBenefitsCard } from './PMSuryaGharBenefitsCard';

interface SchemeDetail {
  id: string;
  tabTitleEn: string;
  tabTitleHi: string;
  tagEn: string;
  tagHi: string;
  icon: string;
  titleEn: string;
  titleHi: string;
  subEn: string;
  subHi: string;
  targetEn: string;
  targetHi: string;
  descEn: string;
  descHi: string;
  subsidyAmountEn: string;
  subsidyAmountHi: string;
  subsidyNoteEn: string;
  subsidyNoteHi: string;
  photoUrl: string;
  photoTaglineEn: string;
  photoTaglineHi: string;
  photoCaptionEn: string;
  photoCaptionHi: string;
  benefitsEn: string[];
  benefitsHi: string[];
  eligibilityEn: string[];
  eligibilityHi: string[];
  documentsEn: string[];
  documentsHi: string[];
  ctaCalculateLink: string;
  ctaQuoteLink: string;
}

const detailedSchemes: SchemeDetail[] = [
  {
    id: 'pm-surya-ghar',
    tabTitleEn: 'PM Surya Ghar (Central)',
    tabTitleHi: 'पीएम सूर्य घर (केंद्र)',
    tagEn: 'NATIONAL SOLAR MISSION',
    tagHi: 'राष्ट्रीय सौर मिशन',
    icon: '☀️',
    titleEn: 'PM Surya Ghar: Muft Bijli Yojana',
    titleHi: 'पीएम सूर्य घर: मुफ्त बिजली योजना',
    subEn: 'Central Government Direct Benefit Transfer (DBT) Scheme',
    subHi: 'केंद्र सरकार प्रत्यक्ष लाभ हस्तांतरण (DBT) योजना',
    targetEn: 'Residential Homes & Housing Societies',
    targetHi: 'घरेलू आवास एवं हाउसिंग सोसायटियां',
    descEn:
      'Launched by the Prime Minister to empower 1 Crore Indian homes with up to 300 units of free monthly solar electricity. Subsidies are transferred directly into the consumer’s bank account within 30 days of bidirectional net-meter installation.',
    descHi:
      'प्रधानमंत्री द्वारा 1 करोड़ भारतीय परिवारों को प्रति माह 300 यूनिट तक मुफ्त बिजली देने का ऐतिहासिक राष्ट्रीय संकल्प। बायो-डायरेक्शनल नेट-मीटर स्थापना के 30 दिनों के भीतर सब्सिडी सीधे उपभोक्ता के बैंक खाते में स्थानांतरित की जाती है।',
    subsidyAmountEn: 'Up to ₹78,000 Direct DBT',
    subsidyAmountHi: '₹78,000 तक सीधा डीबीटी लाभ',
    subsidyNoteEn: '₹30,000 for 1 kW | ₹60,000 for 2 kW | ₹78,000 for 3 kW and above',
    subsidyNoteHi: '1 kW पर ₹30,000 | 2 kW पर ₹60,000 | 3 kW व अधिक पर ₹78,000',
    photoUrl: '/assets/spotlight-pm-surya-ghar.jpg',
    photoTaglineEn: 'MNRE Registered & Empanelled',
    photoTaglineHi: 'नवीन एवं नवीकरणीय ऊर्जा मंत्रालय अधिकृत',
    photoCaptionEn: 'Tier-1 ALMM Mono PERC Rooftop Array Installed with Bi-directional Net Meter',
    photoCaptionHi: 'बाय-डायरेक्शनल नेट मीटर के साथ स्थापित टियर-1 एएलएमएम मोनो पर्क रूफटॉप संयंत्र',
    benefitsEn: [
      'Eliminates up to 100% of residential electricity bills with 300 free monthly units',
      'Direct Benefit Transfer (DBT) credited directly into bank account (no middlemen)',
      '25-year panel performance guarantee from top Tier-1 ALMM Indian manufacturers',
      'Net-metering allows banking excess daytime power into NBPDCL / SBPDCL grid',
      'DEVSON delivers turnkey service: DISCOM permissions, load enhancement & metering',
    ],
    benefitsHi: [
      '300 यूनिट मुफ्त बिजली के साथ घरेलू बिजली बिलों में 100% तक की बचत',
      'सीधा डीबीटी (DBT) अनुदान बिना किसी बिचौलिए के सीधे बैंक खाते में जमा',
      'शीर्ष टियर-1 एएलएमएम निर्माताओं द्वारा 25 वर्ष की पैनल परफॉर्मेंस वारंटी',
      'नेट-मीटरिंग द्वारा दिन की अतिरिक्त बिजली एनबीपीडीसीएल / एसबीपीडीसीएल ग्रिड को निर्यात',
      'देवसन की संपूर्ण टर्नकी सेवा: डिस्कॉम अनुमति, लोड वृद्धि और मीटर स्थापना',
    ],
    eligibilityEn: [
      'Owner of residential independent house or duplex with clear roof access',
      'Active residential electricity connection under NBPDCL or SBPDCL Bihar',
      'Minimum shadow-free roof area: ~80 sq. ft. per 1 kW system capacity',
      'Bank account must be Aadhaar-linked for national DBT subsidy credit',
    ],
    eligibilityHi: [
      'छत के मालिकाना हक वाले स्वतंत्र मकान अथवा डुप्लेक्स के स्वामी',
      'एनबीपीडीसीएल अथवा एसबीपीडीसीएल बिहार का वैध घरेलू विद्युत कनेक्शन',
      'प्रति 1 किलोवाट क्षमता हेतु लगभग 80 वर्ग फुट छाया-मुक्त छत क्षेत्र',
      'राष्ट्रीय डीबीटी सब्सिडी हस्तांतरण हेतु बैंक खाता आधार से लिंक होना अनिवार्य',
    ],
    documentsEn: ['Latest Electricity Bill', 'Aadhaar Card', 'Bank Passbook / Cancelled Cheque', 'Rooftop Photo'],
    documentsHi: ['नवीनतम बिजली बिल', 'आधार कार्ड', 'बैंक पासबुक / चेक', 'छत का फोटो'],
    ctaCalculateLink: '/energy-needs#subsidy',
    ctaQuoteLink: '/energy-needs#quotation',
  },
  {
    id: 'bihar-state-subsidy',
    tabTitleEn: 'Bihar State Top-Up',
    tabTitleHi: 'बिहार राज्य टॉप-अप',
    tagEn: 'EXCLUSIVE BIHAR INCENTIVE',
    tagHi: 'बिहार राज्य विशेष प्रोत्साहन',
    icon: '🏛️',
    titleEn: 'Bihar State Rooftop Additional Subsidy',
    titleHi: 'बिहार राज्य अतिरिक्त रूफटॉप सब्सिडी',
    subEn: 'BREDA / Bihar Government Additional Incentive Grant',
    subHi: 'बिहार नवीकरणीय ऊर्जा विकास एजेंसी (BREDA) अतिरिक्त अनुदान',
    targetEn: 'All Bihar Residential Consumers (South & North Bihar)',
    targetHi: 'बिहार के समस्त घरेलू उपभोक्ता (उत्तर एवं दक्षिण बिहार)',
    descEn:
      'The Government of Bihar, via the Bihar Renewable Energy Development Agency (BREDA), provides an extra top-up grant over and above the central subsidy: ₹10,000 for 1 kW and ₹20,000 for 2 kW and above, delivering up to ₹98,000 total relief.',
    descHi:
      'बिहार सरकार द्वारा ब्रेडा (BREDA) के माध्यम से केंद्रीय सब्सिडी के अतिरिक्त विशेष टॉप-अप अनुदान: 1 kW पर ₹10,000 तथा 2 kW व उससे अधिक पर ₹20,000 का अतिरिक्त लाभ, जिससे कुल बचत ₹98,000 तक पहुंचती है।',
    subsidyAmountEn: '₹20,000 Extra (Total ₹98,000)',
    subsidyAmountHi: '₹20,000 अतिरिक्त (कुल ₹98,000)',
    subsidyNoteEn: 'Exclusive to residential electricity consumers with Bihar DISCOM meters',
    subsidyNoteHi: 'बिहार डिस्कॉम मीटर युक्त घरेलू विद्युत उपभोक्ताओं के लिए विशेष',
    photoUrl: '/assets/spotlight-bihar-team.jpg',
    photoTaglineEn: 'BREDA Accredited Agency Liaison',
    photoTaglineHi: 'ब्रेडा (BREDA) अधिकृत एजेंसी समन्वय',
    photoCaptionEn: 'DEVSON Bihar Engineering Team Conducting Site Survey & DISCOM Feasibility Study',
    photoCaptionHi: 'देवसन बिहार इंजीनियरिंग टीम द्वारा साइट सर्वे एवं डिस्कॉम व्यवहार्यता अध्ययन',
    benefitsEn: [
      'Additional ₹10,000 to ₹20,000 grant given exclusively to Bihar residents',
      'Brings your out-of-pocket investment for a 3 kW system down to just ₹1,12,000',
      'Combined with PM Surya Ghar, covers up to 47% of the total turnkey project cost',
      'Smooth joint verification between DISCOM and BREDA officers handled by DEVSON',
      'Helps accelerate return on investment (ROI) to under 3.5 years in Bihar',
    ],
    benefitsHi: [
      'केवल बिहार के निवासियों के लिए ₹10,000 से ₹20,000 का विशेष अतिरिक्त अनुदान',
      '3 किलोवाट सिस्टम की शुद्ध निवेश लागत घटकर मात्र ₹1,12,000 रह जाती है',
      'पीएम सूर्य घर के साथ मिलकर कुल टर्नकी लागत का 47% तक सरकारी सब्सिडी',
      'डिस्कॉम और ब्रेडा अधिकारियों के साथ संयुक्त सत्यापन देवसन द्वारा संचालित',
      'बिहार में निवेश की पूर्ण वसूली (ROI) मात्र 3.5 वर्षों के भीतर संभव',
    ],
    eligibilityEn: [
      'Residential LT consumer connection in North Bihar (NBPDCL) or South Bihar (SBPDCL)',
      'Installation must be done by an MNRE & BREDA empanelled vendor (like DEVSON)',
      'BIS / ALMM approved solar modules with Made-in-India DCR cells',
      'Proper earthing pits and lightning arrestor conforming to CEA safety guidelines',
    ],
    eligibilityHi: [
      'उत्तर बिहार (NBPDCL) या दक्षिण बिहार (SBPDCL) का वैध घरेलू एलटी विद्युत कनेक्शन',
      'स्थापना केवल एमएनआरई एवं ब्रेडा अधिकृत वेंडर (जैसे देवसन) द्वारा अनिवार्य',
      'मेक-इन-इंडिया डीसीआर सेल्स से निर्मित बीआईएस / एएलएमएम प्रमाणित सोलर मॉड्यूल',
      'सीईए सुरक्षा मानकों के अनुरूप अर्थिंग पिट्स एवं तड़ित चालक (Lightning Arrestor)',
    ],
    documentsEn: ['Bihar Electricity Bill (Recent)', 'Aadhaar Card', 'Bank Passbook Copy', 'Property Tax Receipt / Registry'],
    documentsHi: ['बिहार बिजली बिल (नवीनतम)', 'आधार कार्ड', 'बैंक पासबुक प्रति', 'होल्डिंग टैक्स रसीद / रजिस्ट्री'],
    ctaCalculateLink: '/energy-needs#subsidy',
    ctaQuoteLink: '/energy-needs#quotation',
  },
  {
    id: 'pm-kusum',
    tabTitleEn: 'PM-KUSUM (Agri Pumps)',
    tabTitleHi: 'पीएम-कुसुम (कृषि पंप)',
    tagEn: 'FARMERS & IRRIGATION ENERGY',
    tagHi: 'किसान कल्याण एवं सिंचाई ऊर्जा',
    icon: '🌾',
    titleEn: 'PM-KUSUM: Solar Agricultural Pumping',
    titleHi: 'पीएम-कुसुम: सौर कृषि पंप योजना',
    subEn: 'Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan',
    subHi: 'प्रधानमंत्री किसान ऊर्जा सुरक्षा एवं उत्थान महाभियान',
    targetEn: 'Farmers, Agri Cooperatives & South Bihar Farmlands',
    targetHi: 'किसान, कृषि सहकारी समितियां एवं ग्रामीण खेत-खलिहान',
    descEn:
      'Provides farmers with 60% to 75% subsidized standalone solar pumps (Component B) and solarization of existing grid-connected agricultural pumps (Component C). Completely eliminates expensive diesel running costs and guarantees daytime crop irrigation.',
    descHi:
      'किसानों को 60% से 75% सब्सिडी पर स्टैंडअलोन सोलर पंप (घटक बी) और मौजूदा ग्रिड पंपों का सौरीकरण (घटक सी) उपलब्ध कराता है। महंगे डीजल के खर्च से पूर्ण मुक्ति और दिन के समय निर्बाध सिंचाई सुनिश्चित करता है।',
    subsidyAmountEn: 'Up to 60%–75% Subsidized Cost',
    subsidyAmountHi: '60% से 75% तक लागत सब्सिडी',
    subsidyNoteEn: '30% Central Subsidy + 30% State Subsidy + Easy Bank Financing',
    subsidyNoteHi: '30% केंद्रीय अनुदान + 30% राज्य अनुदान + आसान कृषि ऋण सुविधा',
    photoUrl: '/assets/sectors/agricultural.jpg',
    photoTaglineEn: 'PM-KUSUM Component B & C Ready',
    photoTaglineHi: 'पीएम-कुसुम कंपोनेंट बी एवं सी प्रमाणित',
    photoCaptionEn: 'High-Discharge Solar Submersible Pump Installed for Farm Irrigation in Bihar',
    photoCaptionHi: 'बिहार के कृषि खेतों में सिंचाई हेतु स्थापित उच्च जल-प्रवाह सोलर सबमर्सिबल पंप',
    benefitsEn: [
      'Zero diesel expenses: saves ₹45,000 to ₹90,000 every year on agricultural diesel',
      'Guaranteed daytime irrigation power for paddy, wheat, maize, pulses & vegetables',
      'Dual-benefit Component C allows selling surplus farm solar power to the grid',
      'Stainless steel submersible and surface solar pump sets with smart pump controller',
      'Rugged galvanized mounting frames designed for Bihar field soil conditions',
    ],
    benefitsHi: [
      'डीजल खर्च शून्य: हर साल ₹45,000 से ₹90,000 तक डीजल बिल की सीधी बचत',
      'धान, गेहूं, मक्का, दलहन और सब्जी की फसलों हेतु दिन के समय विश्वसनीय सिंचाई',
      'कंपोनेंट सी के तहत अतिरिक्त सौर ऊर्जा ग्रिड को बेचकर अतिरिक्त आमदनी का अवसर',
      'स्मार्ट पंप कंट्रोलर युक्त स्टेनलेस स्टील सबमर्सिबल एवं सरफेस सोलर पंप सेट',
      'बिहार के कृषि मौसम व मिट्टी के अनुकूल मजबूत गैल्वेनाइज्ड स्ट्रक्चर',
    ],
    eligibilityEn: [
      'Individual farmer, group of farmers, or Farmer Producer Organization (FPO)',
      'Agricultural land with borewell / water source for irrigation',
      'Valid land ownership record (LPC / Khatiyan / Jamabandi)',
      'Self-financing or institutional credit for the remaining farmer contribution',
    ],
    eligibilityHi: [
      'व्यक्तिगत किसान, किसानों का समूह अथवा किसान उत्पादक संगठन (FPO)',
      'सिंचाई हेतु बोरवेल अथवा जल स्रोत युक्त वैध कृषि भूमि',
      'वैध भूमि स्वामित्व प्रमाण पत्र (एलपीसी / खतियान / जमाबंदी)',
      'शेष किसान अंशदान हेतु स्वयं का निवेश अथवा कृषि बैंक ऋण',
    ],
    documentsEn: ['Land Possession Certificate (LPC)', 'Khatiyan / Jamabandi', 'Aadhaar Card', 'Bank Passbook'],
    documentsHi: ['भूमि स्वामित्व प्रमाण (LPC)', 'खतियान / जमाबंदी प्रति', 'आधार कार्ड', 'बैंक पासबुक'],
    ctaCalculateLink: '/energy-needs#quotation',
    ctaQuoteLink: '/energy-needs#quotation',
  },
  {
    id: 'commercial-msme',
    tabTitleEn: 'Commercial & MSME',
    tabTitleHi: 'व्यावसायिक एवं एमएसएमई',
    tagEn: 'COMMERCIAL & INDUSTRIAL TAX SAVINGS',
    tagHi: 'व्यावसायिक एवं औद्योगिक कर बचत',
    icon: '🏢',
    titleEn: 'Commercial & Industrial Solar Incentives',
    titleHi: 'व्यावसायिक एवं औद्योगिक सौर प्रोत्साहन',
    subEn: '40% Accelerated Depreciation (AD) & Grid Net-Metering',
    subHi: '40% त्वरित मूल्यह्रास (Accelerated Depreciation) एवं नेट-मीटरिंग',
    targetEn: 'Showrooms, Cold Storages, Rice Mills, Schools & Hospitals',
    targetHi: 'शोरूम, कोल्ड स्टोरेज, राइस मिल, स्कूल, अस्पताल एवं वर्कशॉप',
    descEn:
      'Commercial entities in Bihar can claim 40% Accelerated Depreciation (AD) under Section 32 of the Income Tax Act in Year 1. Replaces steep commercial electricity tariffs (₹8.50 to ₹10.50/unit) and diesel generator runtime with clean on-site generation.',
    descHi:
      'बिहार के व्यावसायिक और एमएसएमई संस्थान आयकर अधिनियम की धारा 32 के तहत प्रथम वर्ष में 40% त्वरित मूल्यह्रास का लाभ ले सकते हैं। उच्च व्यावसायिक टैरिफ (₹8.50 से ₹10.50/यूनिट) और महंगे डीजल जनरेटर से मुक्ति।',
    subsidyAmountEn: '40% Tax Write-Off + Net Credits',
    subsidyAmountHi: '40% आयकर कटौती + ग्रिड क्रेडिट',
    subsidyNoteEn: 'Project payback in 3–4 years, followed by 20+ years of virtually free daytime power',
    subsidyNoteHi: '3–4 वर्षों में पूंजी की पूरी वापसी, उसके बाद 20+ वर्षों तक मुफ्त बिजली',
    photoUrl: '/assets/sectors/commercial.jpg',
    photoTaglineEn: 'Commercial HT / LT Solar Systems',
    photoTaglineHi: 'व्यावसायिक एचटी / एलटी सोलर संयंत्र',
    photoCaptionEn: 'Turnkey Commercial Rooftop Installation for Bihar Retail & Institutional Facilities',
    photoCaptionHi: 'बिहार के व्यावसायिक एवं संस्थागत प्रतिष्ठानों हेतु टर्नकी रूफटॉप सोलर संयंत्र',
    benefitsEn: [
      '40% Accelerated Depreciation cuts corporate income tax significantly in Year 1',
      'Reduces operational daytime power overheads from ₹9/unit to zero',
      'Surplus generation on Sundays and holidays is automatically banked with DISCOM',
      'Guards against future electricity tariff hikes over the 25-year panel lifespan',
      'Enhances corporate ESG compliance and green business certification in Bihar',
    ],
    benefitsHi: [
      '40% त्वरित मूल्यह्रास द्वारा पहले वित्तीय वर्ष में कंपनी के आयकर में भारी बचत',
      'दिन के व्यावसायिक परिचालन बिजली खर्च को ₹9/यूनिट से घटाकर शून्य पर लाना',
      'रविवार एवं अवकाश के दिन उत्पन्न अतिरिक्त बिजली डिस्कॉम ग्रिड में बैंक होना',
      'आगामी 25 वर्षों तक बिजली की दरों में होने वाली बढ़ोतरी से पूर्ण सुरक्षा',
      'बिहार में कॉर्पोरेट ईएसजी (ESG) अनुपालन एवं हरित व्यावसायिक साख में वृद्धि',
    ],
    eligibilityEn: [
      'Proprietorship, Partnership, Private Limited, or Educational / Trust institution',
      'Commercial or Industrial tariff meter with NBPDCL or SBPDCL',
      'Available RCC roof, tin shed, or elevated parking canopy area',
      'Sanctioned connected load appropriate for the required solar kW capacity',
    ],
    eligibilityHi: [
      'एकल स्वामित्व, साझेदारी, प्राइवेट लिमिटेड कंपनी अथवा शैक्षणिक/ट्रस्ट संस्थान',
      'एनबीपीडीसीएल अथवा एसबीपीडीसीएल का व्यावसायिक या औद्योगिक टैरिफ मीटर',
      'उपलब्ध आरसीसी छत, टिन शेड अथवा एलिवेटेड पार्किंग कैनोपी क्षेत्र',
      'प्रस्तावित सोलर क्षमता के अनुकूल वैध स्वीकृत विद्युत भार (Sanctioned Load)',
    ],
    documentsEn: ['GST Registration Certificate', 'Commercial Electricity Bill', 'PAN Card of Firm', 'Roof Layout Details'],
    documentsHi: ['जीएसटी पंजीकरण प्रमाण', 'व्यावसायिक बिजली बिल', 'संस्थान का पैन कार्ड', 'छत का लेआउट विवरण'],
    ctaCalculateLink: '/energy-needs#quotation',
    ctaQuoteLink: '/energy-needs#quotation',
  },
];

export const DetailedSchemesSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeTabId, setActiveTabId] = useState<string>('pm-surya-ghar');

  const current = detailedSchemes.find((s) => s.id === activeTabId) || detailedSchemes[0];

  return (
    <section id="schemes-guide" className="detailed-schemes-section">
      <div className="wrap">
        {/* Section Header */}
        <div className="detailed-schemes-header reveal">
          <div className="sec-badge">
            <span>🏛️</span>
            <span>
              {language === 'en'
                ? 'OFFICIAL GOVERNMENT SOLAR SCHEMES (BIHAR & CENTRAL)'
                : 'अधिकृत सरकारी सौर ऊर्जा योजनाएं (बिहार एवं केंद्र)'}
            </span>
          </div>
          <h2>
            {language === 'en'
              ? 'Complete Guide to Solar Subsidies & Benefits in Bihar'
              : 'बिहार में सोलर सब्सिडी एवं योजनाओं की संपूर्ण मार्गदर्शिका'}
          </h2>
          <p>
            {language === 'en'
              ? 'Explore comprehensive details, direct financial subsidies, verified benefits, and eligibility criteria for residential, agricultural, and commercial clean energy schemes facilitated by DEVSON.'
              : 'देवसन द्वारा संचालित आवासीय, कृषि एवं व्यावसायिक स्वच्छ ऊर्जा योजनाओं के लिए विस्तृत सब्सिडी आंकड़े, प्रमाणित लाभ एवं पात्रता शर्तों की संपूर्ण जानकारी।'}
          </p>
        </div>

        {/* 4 Interactive Scheme Navigation Tabs */}
        <div className="schemes-nav-tabs reveal">
          {detailedSchemes.map((scheme) => (
            <button
              key={scheme.id}
              type="button"
              className={`scheme-nav-tab ${activeTabId === scheme.id ? 'active' : ''}`}
              onClick={() => setActiveTabId(scheme.id)}
            >
              <span className="snt-icon">{scheme.icon}</span>
              <div className="snt-info">
                <span className="snt-tag">{language === 'en' ? scheme.tagEn : scheme.tagHi}</span>
                <span className="snt-title">{language === 'en' ? scheme.tabTitleEn : scheme.tabTitleHi}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Master Detailed Scheme Card with Photographic Reference */}
        <div className="detailed-scheme-card reveal">
          {/* Top Half: Photo Showcase & Core Overview */}
          <div className="dsc-hero-split">
            {/* Photographic Reference Column */}
            <div className="dsc-photo-wrap">
              <img
                src={current.photoUrl}
                alt={language === 'en' ? current.titleEn : current.titleHi}
                className="dsc-photo"
              />
              <div className="dsc-photo-overlay">
                <span className="dsc-photo-pill">
                  {language === 'en' ? current.photoTaglineEn : current.photoTaglineHi}
                </span>
                <div className="dsc-photo-footer">
                  <div className="photo-tagline">
                    {language === 'en' ? 'DEVSON FACILITATION' : 'देवसन अधिकृत क्रियान्वयन'}
                  </div>
                  <div className="photo-caption">
                    {language === 'en' ? current.photoCaptionEn : current.photoCaptionHi}
                  </div>
                </div>
              </div>
            </div>

            {/* Scheme Briefing Column */}
            <div className="dsc-content-col">
              <div>
                <div className="dsc-head-row">
                  <span className="dsc-target-pill">
                    🎯 {language === 'en' ? current.targetEn : current.targetHi}
                  </span>
                </div>
                <h3 className="dsc-scheme-title">
                  {language === 'en' ? current.titleEn : current.titleHi}
                </h3>
                <div className="dsc-scheme-sub">
                  {language === 'en' ? current.subEn : current.subHi}
                </div>
                <p className="dsc-scheme-desc">
                  {language === 'en' ? current.descEn : current.descHi}
                </p>
              </div>

              {/* Direct Subsidy Highlight Banner */}
              <div className="dsc-subsidy-box">
                <div className="dsb-left">
                  <span className="dsb-icon">💰</span>
                  <div>
                    <div className="dsb-label">
                      {language === 'en' ? 'Direct Subsidy Benefit' : 'प्रत्यक्ष वित्तीय सब्सिडी'}
                    </div>
                    <div className="dsb-note">
                      {language === 'en' ? current.subsidyNoteEn : current.subsidyNoteHi}
                    </div>
                  </div>
                </div>
                <div className="dsb-amount">
                  {language === 'en' ? current.subsidyAmountEn : current.subsidyAmountHi}
                </div>
              </div>
            </div>
          </div>

          {/* Official PM Surya Ghar National Portal Benefits & Sizing Matrix */}
          {current.id === 'pm-surya-ghar' && (
            <PMSuryaGharBenefitsCard language={language} />
          )}

          {/* Bottom Half: Verified Benefits & Eligibility Dual Columns */}
          <div className="dsc-specs-grid">
            {/* Left: Key Verified Benefits */}
            <div>
              <h4 className="dsc-column-title">
                <span className="col-ico">★</span>
                <span>{language === 'en' ? 'Key Benefits & Value Proposition' : 'मुख्य लाभ एवं विशेषताएं'}</span>
              </h4>
              <div className="dsc-list">
                {(language === 'en' ? current.benefitsEn : current.benefitsHi).map((benefit, idx) => (
                  <div key={idx} className="dsc-list-item">
                    <span className="dsc-check">✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Eligibility & Required Documents */}
            <div>
              <h4 className="dsc-column-title">
                <span className="col-ico">📋</span>
                <span>{language === 'en' ? 'Eligibility & Required Documents' : 'पात्रता एवं आवश्यक दस्तावेज'}</span>
              </h4>
              <div className="dsc-list">
                {(language === 'en' ? current.eligibilityEn : current.eligibilityHi).map((item, idx) => (
                  <div key={idx} className="dsc-list-item">
                    <span className="dsc-check">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '16px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {language === 'en' ? 'Required Documentation Checklist:' : 'आवश्यक दस्तावेजों की सूची:'}
                </span>
                <div className="dsc-doc-pills">
                  {(language === 'en' ? current.documentsEn : current.documentsHi).map((doc, idx) => (
                    <span key={idx} className="dsc-doc-pill">
                      📄 {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer Bar */}
          <div className="dsc-footer-bar">
            <div className="dsc-compliance-chips">
              <span className="dsc-chip">✓ MNRE Standards</span>
              <span className="dsc-chip">✓ BREDA Liaison</span>
              <span className="dsc-chip">✓ DISCOM Net-Metering</span>
              <span className="dsc-chip">✓ Tier-1 ALMM Panels</span>
            </div>

            <div className="dsc-actions-group">
              {current.id === 'pm-surya-ghar' && (
                <a
                  href="https://pmsuryaghar.gov.in/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dsc-gov-portal"
                  title="Official National Portal for PM Surya Ghar"
                >
                  🏛️ {language === 'en' ? 'pmsuryaghar.gov.in ↗' : 'अधिकृत पोर्टल ↗'}
                </a>
              )}
              <Link href={current.ctaCalculateLink} className="btn-dsc-secondary">
                {language === 'en' ? 'View 1–10 kW Subsidy Schedule →' : '1–10 kW सब्सिडी दरें देखें →'}
              </Link>
              <Link href={current.ctaQuoteLink} className="btn-dsc-primary">
                {language === 'en' ? 'Apply for this Scheme' : 'इस योजना हेतु आवेदन करें'}
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Comparative Table Across All 4 Schemes */}
        <div className="schemes-comparison-box reveal">
          <div className="sc-box-head">
            <h4>
              {language === 'en'
                ? 'Quick Comparison: All Bihar Solar Schemes at a Glance'
                : 'संक्षिप्त तुलना: बिहार की सभी सोलर योजनाएं एक नजर में'}
            </h4>
            <span>
              {language === 'en'
                ? 'Official 2024–2026 DISCOM & Central Guidelines'
                : 'अधिकृत 2024–2026 डिस्कॉम एवं केंद्रीय दिशानिर्देश'}
            </span>
          </div>

          <div className="table-responsive">
            <table className="schemes-summary-table">
              <thead>
                <tr>
                  <th>{language === 'en' ? 'Scheme Name' : 'योजना का नाम'}</th>
                  <th>{language === 'en' ? 'Target Sector' : 'लक्षित क्षेत्र'}</th>
                  <th>{language === 'en' ? 'Central Subsidy' : 'केंद्रीय सब्सिडी'}</th>
                  <th>{language === 'en' ? 'Bihar State Top-Up' : 'बिहार राज्य सब्सिडी'}</th>
                  <th>{language === 'en' ? 'Total Benefit' : 'कुल सरकारी लाभ'}</th>
                  <th>{language === 'en' ? 'DISCOM Net-Metering' : 'नेट-मीटरिंग'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="s-name-cell">PM Surya Ghar Muft Bijli Yojana</td>
                  <td>{language === 'en' ? 'Residential Homes' : 'घरेलू आवास'}</td>
                  <td>Up to ₹78,000</td>
                  <td>Eligible for +₹20k</td>
                  <td className="s-subsidy-cell">Up to ₹98,000</td>
                  <td>✓ {language === 'en' ? 'Approved' : 'अनुमोदित'}</td>
                </tr>
                <tr>
                  <td className="s-name-cell">Bihar State Rooftop Additional Subsidy</td>
                  <td>{language === 'en' ? 'Bihar Residential LT' : 'बिहार घरेलू एलटी'}</td>
                  <td>Stacked with Central</td>
                  <td>₹10,000 to ₹20,000</td>
                  <td className="s-subsidy-cell">Up to ₹98,000 Combined</td>
                  <td>✓ {language === 'en' ? 'BREDA Facilitated' : 'ब्रेडा अधिकृत'}</td>
                </tr>
                <tr>
                  <td className="s-name-cell">PM-KUSUM Agri Pumping Scheme</td>
                  <td>{language === 'en' ? 'Farmers & Farmlands' : 'किसान व कृषि भूमि'}</td>
                  <td>30% Cost</td>
                  <td>30% Cost</td>
                  <td className="s-subsidy-cell">60%–75% Subsidized</td>
                  <td>✓ {language === 'en' ? 'Component C Feeder' : 'कंपोनेंट सी'}</td>
                </tr>
                <tr>
                  <td className="s-name-cell">Commercial & MSME Rooftop Solar</td>
                  <td>{language === 'en' ? 'Enterprises & Factories' : 'व्यापार व उद्योग'}</td>
                  <td>40% Year-1 AD Tax Benefit</td>
                  <td>Industrial Policy Perks</td>
                  <td className="s-subsidy-cell">{language === 'en' ? '40% Tax Write-Off' : '40% कर बचत'}</td>
                  <td>✓ {language === 'en' ? 'Gross / Net Banking' : 'ग्रॉस/नेट मीटरिंग'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
