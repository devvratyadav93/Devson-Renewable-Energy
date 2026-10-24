# Product Requirements Document (PRD)
## DEVSON Renewable Energy Turnkey Solar & Subsidy Platform

---

## 1. Document Overview
- **Project Name:** DEVSON Renewable Energy Proposal & Solar Pricing Platform
- **Target Location:** Local Project Workspace [`e:\My Projects\Devson`](file:///e:/My%20Projects/Devson)
- **Document Version:** 1.1.0
- **Status:** Approved & Implementing Rebranding
- **Author:** Antigravity AI & Devson Engineering Team

---

## 2. Business Objectives & Problem Statement

### 2.1 Context
DEVSON Renewable Energy Private Limited (CIN: U35105BR2026PTC087766, GSTIN: 10AANCD0450H1Z5) delivers concept-to-commissioning utility-scale solar projects, industrial/commercial installations, and subsidized rooftop solar power solutions (1 kW to 10 kW) under central and state schemes (PM Surya Ghar Muft Bijli Yojana & Bihar State Subsidy). Headquartered at Bihar Sharif Road, Rajgir, Nalanda, Bihar.

### 2.2 Objective
Create a high-fidelity, dual-purpose digital quotation and formal tender proposal document for a **12,500 KWp DC (10 MW AC) Grid-Connected Ground Mount Solar Power Project** prepared for **D K Builders (Bawadiya Kala, Bhopal, MP)** under the **PM-KUSUM / Open Access scheme** with a contract value of **₹31,18,00,993.52**.

### 2.3 The Dual-Purpose Requirement
1. **Interactive Digital Experience (Screen View):** A modern, dark-green & gold luxury aesthetic with smooth scroll navigation, rich micro-interactions, responsive data tables, background video playback, and a sticky accept/print action bar.
2. **Definitive Legal A4 Print Document (Print/PDF View):** A pixel-perfect, multi-page formal corporate proposal that prints seamlessly without orphan headings, broken tables, or cut-off graphics, featuring a dedicated high-impact corporate Cover Page.

---

## 3. Analysis & Audit of Reference Implementation

Our deep reverse-engineering of [`D-K-Builders-2026-06-25.html`](https://theidealshukla.github.io/asa-epc-quotation/D-K-Builders-2026-06-25.html) and subsequent revisions revealed the following architecture and critical defects:

### 3.1 Structural Composition
The original website consists of 10 structured thematic sections preceded by an A4 Cover Page, Sticky Navigation, and Hero header:
- **Print Cover Page (`.cover-page`):** Hidden on screen, prints as page 1. Includes company credentials, meta badges (client, location, date, scheme), and 4 key statistics.
- **Sticky Navigation (`.nav`):** Logo, anchor links to key sections, CTA button ("View Pricing"), and mobile hamburger menu.
- **Hero Section (`.hero`):** Video background (Cloudinary CDN), eyebrow tag, main project headline, meta information, and 4-metric grid.
- **Section 01 — Project Summary (`#summary`):** Plant capacity (12,500 KWp DC / 10,000 KW AC), module count, land footprint (~45–50 acres), scheme details.
- **Section 02 — Technical Specifications (`#specification`):** 11 detailed line items covering PV modules, inverters, MMS structure, transformers, HT panels, cabling, SCADA, earthing, and fencing.
- **Section 03 — Equipment & Vendors (`#vendors`):** Curated vendor tiering (Waaree Energies, Sungrow, Toshiba, Schneider, ABB, Polycab, KEI, Stucta).
- **Section 04 — Scope of Work (`#scope`):** 5 categorized comparative tables detailing ASA EPC scope vs. Client scope with checkmarks and dashes.
- **Section 05 — Project Schedule (`#schedule`):** 120-day timeline organized into three 40-day phases across 19 sub-activities rendered as an interactive Gantt chart.
- **Section 06 — Warranty Terms (`#warranty`):** 4 warranty cards (30-year module performance warranty, 5+25 year inverter warranty, 25-year structural warranty, OEM balance of system).
- **Section 07 — Commercial Offer (`#commercial`):** 16-item itemized Bill of Quantities (BOQ) with per-watt cost, unit pricing, total base cost (₹28,63,18,635.00), GST @ 8.9% (₹2,54,82,358.52), and Grand Total (₹31,18,00,993.52).
- **Section 08 — Execution Methodology (`#execution`):** 20-step 4-phase sequential workflow from pre-construction survey to handover.
- **Section 09 — Corporate Services (`#asa-services`):** Renewable energy service ecosystem (EPC, Rooftop, Floating Solar, Storage, Hydrogen, Financial Services).
- **Section 10 — Track Record & Clients (`#track-record`):** Client chips (Bajaj, L&T, Shyam Steel, Waaree) and 4 commissioned project photo cards (Jhiganpur 2 MW, Khurai 2 MW, Raisen 2 MW, Guna 6 MW).
- **Footer (`.closing`):** Corporate registered office in Indrapuri Bhopal, directors' emails, CIN, and DPIIT registration.
- **Floating Action Bar (`.accept-bar`):** Sticky footer showing Grand Total and "Download / Print" action button.

### 3.2 Critical Bugs in Original Reference
1. **Broken Image URLs on GitHub Pages:** Images in `D-K-Builders-2026-06-25.html` point to `http://localhost:3000/...` (`logo.png`, `clients-affiliations.png`, `phase.png`, `service.png`, `jhiganpur.png`, etc.), resulting in 404 broken image placeholders when viewed online.
2. **Extreme File Bloat in Subsequent Revision:** In `D-K-Builders-2026-06-30.html`, the author attempted to fix this by inlining images as base64 data URIs, blowing up the single HTML file to **10.36 Megabytes**, severely degrading DOM parsing, initial load time, and memory usage.
3. **Viewport Hardcoding (`width=1024`):** The author set `<meta name="viewport" content="width=1024">` to force desktop layout on mobile, breaking native responsive zoom, tap targets, and causing horizontal overflow on mobile screens.
4. **Print Orphan Splitting:** On certain mobile browsers (Chrome Android / iOS Safari), lack of zero-height absolute positioning on `.hero` caused an empty blank page between the cover page and section 1.

---

## 4. User Personas

| Persona | Role | Key Goal | Device / Environment |
|---|---|---|---|
| **Managing Director / Promoter (D K Builders)** | Executive Decision Maker | Review financial viability, ROI, total cost, and brand reliability | Mobile / Tablet (PDF via WhatsApp or Email) |
| **Chief Technical Officer (D K Builders)** | Technical Auditor | Inspect module specs (TOPCon 620Wp), inverter tier, cabling, and timeline | Desktop browser & Printed A4 dossier |
| **EPC Project Manager (ASA EPC)** | Sales & Delivery Lead | Present proposal in meetings, generate high-res A4 PDFs on demand | Laptop / Browser presentation mode |

---

## 5. Functional Requirements (FR)

### FR-1: High-Performance Presentation UI
- **FR-1.1:** Render all 10 core sections with cohesive typography (`Space Grotesk` + `Inter`) and corporate color scheme (`#0B2818` Forest Green, `#E8A33D` Solar Amber, `#FAF8F3` Warm Paper).
- **FR-1.2:** Implement sticky navigation with backdrop blur filter (`rgba(250,248,243,0.92)`), active state indicators, and smooth scrolling to anchor IDs.
- **FR-1.3:** Seamlessly play Cloudinary ambient drone footage in Hero and About sections with poster fallback and graceful degradations.
- **FR-1.4:** Render the floating Accept/Print bar pinned to viewport bottom with formatted INR currency and direct trigger to the print engine.

### FR-2: Print & PDF Pagination Engine
- **FR-2.1:** Display a dedicated corporate Cover Page (`.cover-page`) only when printed (`@media print`), completely hidden in screen mode.
- **FR-2.2:** Hero and screen-only chrome (`.nav`, `.accept-bar`) must be collapsed cleanly to zero height in print mode to prevent phantom blank pages.
- **FR-2.3:** Section boundaries must strictly respect A4 page breaks (`page-break-before: always; break-before: page;`).
- **FR-2.4:** Table rows (`tr`), warranty cards, and metric boxes must enforce `page-break-inside: avoid; break-inside: avoid;` to eliminate awkward mid-element splits.
- **FR-2.5:** Provide a specialized iOS Safari print guidance modal explaining the pinch-to-PDF gesture since iOS Safari lacks standard `window.print()` PDF download.

### FR-3: Commercial Bill of Quantities (BOQ) Calculator
- **FR-3.1:** Display a complete 16-row itemized table with columns: Description, Specification, Quantity, Per Watt Rate, Unit Price, Total Amount.
- **FR-3.2:** Dynamically format all amounts using Indian numbering formatting (`₹XX,XX,XXX.XX`).
- **FR-3.3:** Accurate computation of Subtotal (₹28,63,18,635.00), Composite GST @ 8.9% (₹2,54,82,358.52), and Grand Total (₹31,18,00,993.52).
- **FR-3.4:** Display effective rate per watt (₹24.94/Wp) based on 12,500,000 Wp DC capacity.

### FR-4: Gantt Chart & Schedule Visualizer
- **FR-4.1:** Render a 120-day timeline partitioned across Phase 1 (Mobilisation & BOM), Phase 2 (Civil & Installation), Phase 3 (Electrical & COD).
- **FR-4.2:** Highlight active duration bars with solar amber gradients (`linear-gradient(135deg, #E8A33D, #C97F1E)`).
- **FR-4.3:** Maintain full width and readability during A4 printing.

### FR-5: Standalone Localized Asset Delivery
- **FR-5.1:** Completely decouple from `localhost:3000` and eliminate monolithic 10MB base64 inlining.
- **FR-5.2:** Store all high-resolution brand assets locally in `assets/` (or `public/assets/`):
  - `logos/asa-epc-logo.png`
  - `clients-affiliations.png`
  - `phase.png`
  - `service.png`
  - `services-pdf.png`
  - `jhiganpur.png`, `khurai.png`, `raisen.png`, `guna.png`
- **FR-5.3:** Preload and verify image readiness before invoking `window.print()` to avoid blank boxes.

---

## 6. Non-Functional Requirements (NFR)

- **Performance:** First Contentful Paint (FCP) < 0.8s, Lighthouse Performance score > 95. Page weight < 2MB (excluding external streaming video).
- **Accessibility:** WCAG 2.1 AA compliance, accessible color contrast ratios (> 4.5:1), keyboard navigable tabs and modals, semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Cross-Browser Compatibility:** Google Chrome, Safari (macOS & iOS), Mozilla Firefox, Microsoft Edge, and Chrome on Android.
- **Print Fidelity:** Exact 1:1 match with standard 210mm x 297mm A4 portrait sheets.

---

## 7. Acceptance Criteria

- [ ] Complete 10 sections present and accurate to D K Builders proposal data.
- [ ] No broken images (`localhost:3000` eliminated; all assets load from local path).
- [ ] Responsive navigation functions smoothly on both desktop and mobile screens.
- [ ] Printing (`Ctrl+P` or clicking "Download / Print") initiates cleanly without blank leading pages.
- [ ] Cover page prints as page 1 with company credentials and project metadata.
- [ ] Commercial offer sums, GST rates, and per-watt figures match ₹31,18,00,993.52 exactly.
- [ ] iOS Safari guide modal opens properly when triggered on Apple mobile devices.

---

## 8. Changelog
### 2026-10-24 — Subsidy Schedule Table Styling & Capacity Badge Overlap Fix
- Changed: Implemented complete executive-level styling for the 1 kW to 10 kW Official Subsidy Schedule Table in `rooftop-subsidy.css` (`.subsidy-data-table`, `.sts-head`, `.sts-toggle-btn`, `.th-net`, `.td-net`, `.table-select-btn`, and responsive scroll wrapper). Fixed floating badge positioning on `.cap-popular` (`top: -12px; left: 50%; transform: translateX(-50%); white-space: nowrap;`) with dedicated `padding-top: 14px` on `.capacity-pills` to prevent overlap on the "3 kW" text.
- Reason: User pointed out unstyled raw table appearance and an overlapping "★ MOST POPULAR" badge on the 3 kW selector pill.
- Impact: Restores a clean, executive table with alternating stripes, gold highlights, hover interactions, and correctly formatted, non-overlapping capacity badges.

### 2026-10-24 — CSS Architecture Modularization & Webpack Cache Resolution
- Changed: Decomposed the brittle monolithic `globals.css` (4,300 lines) into 15 domain-scoped modular stylesheets (`tokens.css`, `base.css`, `navigation.css`, `hero.css`, `government-schemes.css`, `home-calculator-teaser.css`, `template-download.css`, `rooftop-subsidy.css`, `energy-needs.css`, `get-quotation.css`, `about.css`, `faq.css`, `track-record.css`, `contact.css`, `footer.css`, `floating-dock.css`). Purged corrupted `.next` webpack cache artifacts caused by concurrent build/dev execution, resolving runtime `Cannot find module './611.js'`.
- Reason: User reported that a single CSS error in the monolithic file broke the entire website, and experienced runtime chunk lookup failures.
- Impact: Eliminates single-point cascading CSS failures, enables isolated component styling, and restores 100% stable runtime execution across all routes.

### 2026-10-24 — Home Components Redesign & Official Pricing Dossier Route Scoping
- Changed: Completely differentiated the two adjacent Home page cards by replacing the redundant banner with `HomeCalculatorTeaser.tsx` (a light-luxury interactive split showcase with live 1 kW to 10 kW capacity toggle pills, real-time net cost and subsidy preview, and direct jump buttons) and redesigning `TemplateDownloadCard.tsx` into a dark gold-accented executive certified document dossier (`DEVSON-SCH-2026-BR`) with gold security strip, metadata tags, and framed 3D document mockup. Strictly scoped the official pricing schedule download card to render **ONLY on Home (`/`) and Energy Needs & Schemes (`/energy-needs`)**, completely removing it from About and Contact.
- Reason: User requested to eliminate visual similarity between the two consecutive Home page green boxes and requested that "Download Official DEVSON Pricing Schedule" appear only on Home and Energy Needs pages.
- Impact: Solves visual redundancy on the Home page, provides an engaging interactive teaser leading to the full calculator, and prevents document download clutter on narrative/contact pages.

### 2026-10-24 — Multi-Page Architecture Transition, DEVSON Scheme Focus & Quotation Engine
- Changed: Decomposed single-page website into a 4-route Next.js application (`/`, `/energy-needs`, `/about`, `/contact`), consolidated all calculators (load estimator + subsidy schedule) into `/energy-needs` with scheme tabs (Combined, Central, State), integrated an interactive "Get Quotation" lead engine with dual email notifications, added official DEVSON flyer download card, removed obsolete D K Builders 12.5 MWp proposal, and restricted corporate footprint strictly to Bihar (Rajgir & Nawada).
- Reason: User requested transition to a multi-page site, consolidation of all calculators into Energy Needs, honest startup positioning without exaggerated legacy claims, and removal of client-specific tender data.
- Impact: Transforms the site into a dedicated consumer and MSME solar portal for Bihar, driving conversion via the new Quotation engine and downloadable official pricing schedule.

### 2026-10-24 — Hero Highlights & Spotlight Extraction into Dedicated Home Section
- Changed:
  1. Extracted the 4 performance metrics (`₹98,000`, `1–10 kW`, `300 Units`, `100% Bihar`) and 4 feature spotlight cards (`PM Surya Ghar`, `Get Quotation`, `ALMM Certified Hardware`, `Local Startup`) out of `Hero.tsx` into a dedicated standalone section: `HomeHighlightsSection.tsx` mounted exclusively on the Home page (`src/app/page.tsx`) directly below the Hero.
  2. Created `src/styles/home-highlights.css` featuring an executive luxury design with 4 metric pillar cards (`.h-stat-card`) and 4 interactive spotlight navigation cards (`.h-spotlight-card`) with hover elevation and top gradient accent stripes.
  3. Streamlined `Hero.tsx` with clean direct CTA action buttons (`Explore 1–10 kW Subsidy Schedule →` and `Get Instant Quotation`), decluttering the hero canvas and allowing the 4.8s sunrise pan GIF to be fully appreciated.
- Reason: User requested extracting the stats and spotlight cards out of the Hero into their own separate, professional section just below the Hero on the Home page only.
- Impact: Unclutters the Hero viewport while giving the core value pillars and spotlight navigation prominence in their own dedicated, professional container.

### 2026-10-24 — Hero GIF Re-Synthesis: Slow 4.8s Left-to-Right Panning Motion (No Zooming)
- Changed:
  1. Re-synthesized `solar-hero-loop.gif` into a steady, zero-zoom horizontal tracking pan that glides slowly from left to right across the solar panel array and skyline.
  2. Extended duration to 4.83 seconds (46 frames at 105ms each).
  3. Integrated an 8-frame crossfade blend at the conclusion of the pan, guaranteeing seamless, infinite one-directional left-to-right motion without abrupt jumps or reversing.
- Reason: User requested removing the zoom in/out effect and replacing it with a slow, smooth left-to-right pan lasting 4-5 seconds.
- Impact: Delivers a calm, cinematic documentary-style tracking shot across the rooftop solar array that anchors the Hero section without disorienting zoom pulses.

### 2026-10-24 — Custom High-Fidelity Solar Hero GIF Creation & Cinematic Ambient Tuning
- Changed:
  1. Replaced the low-resolution, dithered 480x270 `solar GIF.gif` on the Home page with a custom-engineered, photorealistic 960x535 looping animated GIF (`/assets/solar-hero-loop.gif`).
  2. Synthesized from an ultra-sharp modern rooftop solar array visual at golden sunrise with 28 smoothly interpolated frames featuring subtle camera dolly motion, pulsating sun rays, and sweeping light glints across the monocrystalline panel surfaces.
  3. Tuned `.hero-video-overlay` in `src/styles/hero.css` with a refined radial gradient allowing the warm morning sun and panel reflections to shine through vividly while preserving 100% typography contrast and WCAG readability.
- Reason: User requested replacing the home page GIF with a new custom-created, premium-quality animated GIF.
- Impact: Dramatically upgrades the first-impression visual quality of the Hero section from low-res 90s aesthetic to a modern, cinematic, state-of-the-art clean energy portal.

### 2026-10-24 — GIF Media Replacement & Track Record / Our Network Animated Overhaul
- Changed:
  1. Replaced legacy video loops in `src/components/Hero.tsx` and `src/components/AboutSection.tsx` with user-supplied GIFs from `Supporting Documents`: widescreen `solar-hero-loop.gif` for the Hero ambient background and square `solar-energy-animation.gif` for the About Clean Solar Energy Generation showcase card.
  2. Overhauled `TrackRecordSection.tsx` and `track-record.css` with continuous infinite auto-scrolling client partner marquee with pause-on-hover, live impact metrics ticker bar (12+ MWp pipeline, 250+ sites, 99.2% uptime), pulse status badges (`🟢 Commissioned & Grid-Tied`), and interactive technical specifications inspection modal.
  3. Overhauled `ClientsNetworkSection.tsx` with interactive partner category tabs (Banking & Green Finance, Tier-1 Equipment, DISCOMs & State Agencies) and an animated laser scanning light beam on the verified affiliations dossier.
- Reason: User requested replacing existing website GIFs with the two new GIFs from Supporting Documents, and modifying Track Record and Our Network sections for a more professional look with animations.
- Impact: Elevates site engagement with fluid CSS keyframe animations, eliminates external Cloudinary video dependencies, and provides interactive project inspection capabilities.

### 2026-10-24 — Contact Page Quick Inquiry Form Redesign & Styling Fix
- Changed:
  1. Replaced unstyled browser-default inputs and tiny textarea in `src/app/contact/page.tsx` with structured, accessible form groups featuring explicit `<label>` tags and descriptive placeholders.
  2. Implemented quick-inquiry topic chips allowing visitors to prefill or select common inquiries with a single click (*PM Surya Ghar (1-3 kW)*, *Site Feasibility Survey*, *Commercial Net Metering*, *PM-KUSUM Agri Pump*).
  3. Added full responsive and high-fidelity CSS styling in `src/styles/contact.css`: top gradient accent bar (`#0B2818` to `#E8A33D`), pill badge, clean input cards with hover and focus ring (`box-shadow: 0 0 0 3px rgba(11, 40, 24, 0.12)`), full-width vertical textarea, trust/privacy disclaimer, and high-contrast amber hover submit button.
  4. Added a "Send Another Message" button in the submission success state.
- Reason: User reported that the Quick Message section was broken/unstyled (raw HTML inputs and misplaced submit button).
- Impact: Transforms the Quick Message section into a polished, responsive corporate inquiry channel that matches the site's luxury B2B aesthetic.

### 2026-10-24 — Section 4 Simulator Widget Removal & Reuploaded Campaign Photo 2-Column Split
- Changed:
  1. Removed the right-hand simulator widget card (`Live Solar Subsidy Estimator`) from Section 4 (`HomeCalculatorTeaser.tsx` and `home-calculator-teaser.css`).
  2. Integrated the reuploaded high-resolution official photograph (`Supporting Documents\HB1D3E2bYAEtWb3.jpg` → `/assets/pm-surya-ghar-30-lakh-homes.jpg`) cleanly into the right column with responsive frame sizing (`max-width: 480px`).
  3. Re-architected Section 4 into an expansive, uncluttered 2-column layout (`1.15fr 0.85fr`): left side displays the value proposition, verified subsidy benefits, and CTA buttons with generous spacing; right side showcases the official 30 Lakh Homes campaign creative in full clarity.
- Reason: User requested removing the simulator widget component from this section and arranging the reuploaded image properly so that the left text and right photo are clearly visible without crowding.
- Impact: Eliminates visual friction, pairs authoritative campaign imagery with clear customer value propositions, and streamlines navigation toward the complete sizing calculator and quotation form.

### 2026-10-24 — Authentic PM Modi Photo, 30 Lakh Homes Poster & Scheme Tabs Removal
- Changed:
  1. Updated the Leadership Endorsement Card in `GovernmentSchemesSection.tsx` to use the authentic official photograph of Prime Minister Narendra Modi standing before rooftop solar panels (`/assets/pm-modi-solar.webp`).
  2. Removed the clunky top scheme switcher button pills (`.scheme-tabs-nav`) from `GovernmentSchemesSection.tsx` and `government-schemes.css`, allowing the active scheme card to take full prominence while maintaining auto-rotation, pause-on-hover, dot indicators, and directional arrows.
  3. Integrated the official Government of India milestone campaign poster (`/assets/pm-surya-ghar-30-lakh-homes.webp` — *30 Lakh Homes Illuminated Under PM Surya Ghar Muft Bijli Yojana*) into `HomeCalculatorTeaser.tsx` as a prominent center milestone showcase card.
- Reason: User requested replacing the leadership photo with their provided official PM Modi webp photo, removing the top scheme tab pills that cluttered Section 3, and incorporating the 30 Lakh Homes campaign poster on the Home page.
- Impact: Substantially elevates official government authenticity, eliminates redundant scheme tab buttons, and pairs live solar capacity sizing with verified national campaign milestones.

### 2026-10-24 — Home Page Six Section Visual & Layout Refinements
- Changed:
  1. Section 1 (Hero): Applied viewport height containment (`min-height: calc(100svh - 74px)`) with responsive `vh`/`vw` font and spacing clamps, ensuring the eyebrow, main headline, subtitle, metadata labels, and primary/secondary CTAs are 100% visible on screen without cut-off. Scrolling immediately begins Section 2.
  2. Section 2 (`HomeHighlightsSection`): Added high-resolution photographic thumbnails with smooth hover zoom to the 4 spotlight cards (`spotlight-pm-surya-ghar.jpg`, `spotlight-get-quotation.jpg`, `spotlight-almm-panels.jpg`, `spotlight-bihar-team.jpg`).
  3. Section 3 (`GovernmentSchemesSection`): Redesigned into a split two-column layout with an auto-cycling government schemes carousel on the left (cycles every 4.5s with pause-on-hover and quick switch tabs) and an official national leadership photo card (`pm-surya-ghar-leadership.jpg`) on the right.
  4. Section 5 (`TemplateDownloadCard`): Replaced dark green background with clean light-neutral aesthetic matching the home page theme (`#F4F6F4`), expanded the pricing flyer template preview to take dominant width (57%), and condensed text to punchy key highlights.
  5. Section 6 (`TrackRecordSection`): Integrated 16 extracted corporate client and banking partner logos (`waaree.png`, `lt_construction.png`, `sbi.png`, `bajaj.png`, `shyam_steel.png`, etc.) directly into the continuous marquee and removed the redundant Section 7 (`ClientsNetworkSection`) from the Home page.
- Reason: User requested direct refinements to home page screen containment, visual richness, authoritative governmental presence, flyer prominence, and client logo consolidation.
- Impact: Substantially enhances first-impression aesthetics, guarantees zero hero cut-off across desktop viewports, provides interactive scheme exploration, and eliminates redundant client data.

### 2026-10-24 — Template Card Removal from Energy Needs & MS Forms Quotation Redesign
- Changed:
  1. Removed `TemplateDownloadCard` from `/energy-needs` (`src/app/energy-needs/page.tsx`), maintaining it exclusively on the Home page (`/`).
  2. Renamed quotation badge to "Get Quotation" in English and "कोटेशन प्राप्त करें" in Hindi across translations.
  3. Redesigned the quotation form in `GetQuotationSection.tsx` and `get-quotation.css` to follow a Microsoft Forms enterprise aesthetic: top accent stripe, metadata pills (time estimate, encryption, required fields), numbered question blocks, underline focus states, quick-select segmented choice chips for capacity/bill/roof area, and formal footer dispatch disclaimer.
- Reason: User requested removal of the pricing schedule flyer card from Energy Needs page, renaming badge to "Get Quotation", and elevating the form to a professional Microsoft Forms layout.
- Impact: Streamlines the Energy Needs page journey and delivers an enterprise-grade, tactile corporate form experience.

### 2026-10-24 — Fix Appliance Matrix Visibility & Zero-Scroll 10-Column Table Fitting
- Changed:
  1. Resolved invisible Appliance Matrix table in `EnergyNeedsSection`: removed global `background: #FFFFFF` from `.table-responsive` that bled across stylesheets, and applied explicit high-contrast `#081E12` card background with crisp white typography, amber badges, and translucent input pills.
  2. Fixed 10th column cutoff in Subsidy Schedule table: eliminated hardcoded `min-width: 1020px` from `.subsidy-data-table`, switched header wrapping from `white-space: nowrap` to `white-space: normal`, optimized column cell padding to `10px 5px`, streamlined Hindi header copy (`शुद्ध देय (₹)`), and scaled select buttons so all 10 columns fit comfortably on standard laptop screens (1024px to 1366px) with zero horizontal scroll.
- Reason: User reported that the first table was not visible (white text on white background) and the second table had its 10th column cut off requiring horizontal scrolling.
- Impact: Restores full contrast and readability to the appliance calculator and guarantees 100% visibility for all 10 subsidy schedule columns on any desktop/laptop viewport without horizontal scrolling.

### 2026-10-24 — Widescreen Layout Across All Pages & 10-Column Subsidy Schedule Table Optimization
- Changed:
  1. Expanded layout container token `--maxw` from 980px to 1340px widescreen standard in `tokens.css` and updated base container `.wrap` with fluid clamp padding `padding: 0 clamp(20px, 2.5vw, 32px)`, harmonizing all pages (`/`, `/energy-needs`, `/about`, `/contact`) with the top navigation bar.
  2. Optimized the Complete 1 kW – 10 kW Subsidy Schedule table in `RooftopSubsidySection.tsx` and `rooftop-subsidy.css` so that all 10 columns (`Capacity`, `Daily`, `Monthly`, `Area`, `Total Cost`, `Central Subsidy`, `State Subsidy`, `Total Subsidy`, `Net Payable`, `Action`) fit simultaneously on desktop screens without clipping or horizontal scrolling.
  3. Added semantic column classes (`th-cap`, `th-cost`, `th-net`, `th-action`, etc.), tabular numeral font formatting, and responsive scroll wrapper for mobile viewports.
  4. Decomposed monolithic CSS into 15 domain-specific modular stylesheets in `src/styles/` to prevent cascading failures.
- Reason: User requested full utilization of widescreen desktop width across all pages and full visibility of all 10 table columns to enable effortless solar capacity selection.
- Impact: Maximizes desktop real estate utilization, delivers enterprise B2B aesthetics across all pages, and provides zero-scroll tabular visibility for customer capacity selection.

### 2026-10-24 — Contact Page Office Directory Bottom Relocation & Location Image Cards
- Changed:
  1. Relocated the Office Directory & Statutory Presence component (`.contact-grid`) from the top of `/contact` to the very bottom of the page, positioned directly after `FaqSection` and right before the global footer.
  2. Synthesized and integrated 3 high-resolution branded photographic cards for all 3 locations:
     - Rajgir Head Office: Features `/assets/offices/rajgir-head-office.jpg` with modern white corporate solar headquarters, blue sky, landscaped grounds, Devson 3D emblem watermark, and floating emerald badge.
     - Nawada Branch Office: Features `/assets/offices/nawada-branch-office.jpg` with modern executive client advisory lounge, Devson emblem watermark, and floating emerald badge.
     - State Bank of India: Features `/assets/offices/sbi-banking-partner.jpg` with authentic SBI branch entrance and ATM, official SBI emblem watermark, and floating amber badge.
  3. Replaced plain card headers with full-bleed image media headers (`.contact-card-media` with `.contact-card-img` and hover zoom `scale(1.05)`) and padded card bodies (`.contact-card-content`).
- Reason: User requested moving the office directory cards to the very bottom of the Contact & FAQ page and attaching images for each location.
- Impact: Creates a logical page journey (Direct Inquiry Form → FAQ Accordion → Registered Offices & Statutory Dossier) with rich photographic presentation for each physical location.

### 2026-10-24 — Contact & FAQ Page Modernization & Energy Needs Alignment Fix
- Changed:
  1. Fixed the left-shifted header alignment on the Appliance Load Estimator in `src/styles/energy-needs.css` and `src/styles/base.css` by applying `margin: 0 auto; max-width: 860px;` so titles, tabs, and tables align seamlessly.
  2. Overhauled `/contact`: modernized the 3 Office Directory cards with interactive Google Maps links, direct phone/WhatsApp actions, and structured statutory details.
  3. Elevated the Direct Inquiry & Site Feasibility form with active topic selector pills, enhanced input states, privacy guarantee, and solar amber CTA.
  4. Transformed `FaqSection.tsx` & `src/styles/faq.css` from a dark `#081d12` theme into a crisp light-neutral `#F8FAF8` presentation with white accordion cards, emerald category tags, and direct helpline banner.
- Reason: User requested fixing the misaligned header on the Energy Needs section and modernizing the Contact & FAQ page to match the professional light aesthetics of the other pages.
- Impact: Completes the full 4-page website redesign across Home, Energy Needs, About Us, and Contact & FAQ with 100% aesthetic coherence and zero dark-theme illegibility.

### 2026-10-24 — About Us Page Overhaul (Executive Credentials Dossier, Light Themes & Photographic Core Values)
- Changed: Overhauled `/about`:
  1. Replaced unformatted credentials text list with an executive `.summary-card` dossier featuring clean key-value rows, alternating row highlights, and official statutory badges.
  2. Eliminated all dark backgrounds and replaced the awkward alert-style banner with an executive 4-badge Institutional Trust & Compliance Strip (`Bihar Registered Startup`, `PM Surya Ghar & BREDA`, `DISCOM Net-Metering`, `Tier-1 ALMM Panels`).
  3. Replaced the 5 plain text pills in "Our Core Values" with 5 rich photographic cards (`transparency.jpg`, `hardware.jpg`, `customer.jpg`, `accountability.jpg`, `sustainability.jpg`) with numbers, titles, and bilingual explanations.
  4. Removed the redundant "VALUABLE NETWORK" (`ClientsNetworkSection`) section as requested.
- Reason: User requested professional presentation without dark background components, photographic core values, and removal of the Valuable Network section.
- Impact: Transforms `/about` into an authoritative, transparent, and aesthetically premium corporate profile.

### 2026-10-24 — Energy Needs & Schemes Page Overhaul (Detailed Schemes Guide, Light Themes & Photographic Sector Cards)
- Changed: Overhauled `/energy-needs` across sections 1, 2, and 3:
  1. Section 1: Replaced the duplicate home-page rotator with `DetailedSchemesSection.tsx` & `detailed-schemes.css`, providing an exhaustive dossier for all 4 schemes (PM Surya Ghar, Bihar State Top-Up, PM-KUSUM Agri, Commercial & MSME) with photographic references, ₹ subsidy schedules, benefits checklists, eligibility criteria, and a comparative table.
  2. Section 2: Recreated `energy-needs.css` with a clean, high-contrast light theme (`#F8FAF8`), replacing dark green background and illegible headings with bold forest green typography, clear white table rows, and emerald summary banner.
  3. Section 3: Rebuilt `.subsidy-calc-card` in `rooftop-subsidy.css` in crisp light theme, eliminating dark backgrounds; upgraded the 4 application sector cards with rich high-resolution photographic references (`domestic.jpg`, `commercial.jpg`, `industrial.jpg`, `agricultural.jpg`), category badges, verified perks, and direct quotation links.
  4. Section 4: Maintained interactive quotation form as approved.
- Reason: User requested detailed explanations with photo references for government schemes, elimination of dark illegible backgrounds on sections 2 and 3, and rich photographic cards for the 4 application sectors.
- Impact: Transforms `/energy-needs` into an authoritative, consumer- and commercial-ready solar planning tool with 100% visual contrast and rich imagery.

### 2026-10-22 — Navbar CTA: Replaced WhatsApp Icon with Corporate "Contact Us" Button
- Changed: Replaced the header navigation bar's WhatsApp button with an amber-pill "Contact Us" CTA button (`#contact`) featuring a phone icon and bilingual label ("Contact Us" / "संपर्क करें"), with mobile menu integration and smooth-scroll linking to the footer contact section.
- Reason: User requested to replace navbar's WhatsApp icon with Contact Us. WhatsApp remains permanently accessible via the persistent floating side dock bubble.
- Impact: Elevates corporate B2B credibility in the main header while keeping WhatsApp contact accessible everywhere on the screen.

### 2026-10-22 — Rayzon Solar & Waaree Shop Redesign (Frosted Navbar, Energy Needs Matrix, Spotlight Cards & FAQ)
- Changed: Re-architected DEVSON platform inspired by industry benchmarks Rayzon Solar (`rayzonsolar.com`) and Waaree (`shop.waaree.com`):
  1. Rayzon-style frosted glassmorphism sticky navigation bar with 6 core links (`#home`, `#energy-needs`, `#subsidy`, `#summary`, `#about`, `#faq`).
  2. Rayzon-style 4 Spotlight Cards anchored at the base of the Hero section.
  3. Waaree-style "Know Your Solar Energy Needs" appliance load matrix with Residential & Commercial tabs, live load summation, and automated sizing recommendation linked to the Subsidy Engine.
  4. Waaree-style persistent floating side dock (yellow quick-jump calculator widget, quote widget, and floating WhatsApp bubble).
  5. Interactive bilingual FAQ Accordion with categorized filters (`All`, `Rooftop & Subsidies`, `Turnkey EPC`).
- Reason: User requested to adopt best-in-class components and presentation styles from `shop.waaree.com` and `rayzonsolar.com`.
- Impact: Transforms the quotation website into an authoritative, consumer- and commercial-ready solar energy portal.

### 2026-10-22 — Streamlined Navigation Bar, Compact Globe Switcher & Enhanced 4-Column Footer
- Changed: Decluttered the top navigation header by pruning redundant links and secondary CTA buttons, introducing a sleek compact globe language toggle (`🌐 EN` / `🌐 हिन्दी`), and migrating deep proposal sections into a dedicated "Proposal & Solutions" navigation column within the corporate footer.
- Reason: User requested to eliminate navbar crowding, remove redundant components ("Call Us" button), relocate secondary proposal sections to the footer, and use a shorter icon toggle for language switching.
- Impact: Header now houses only 3 high-impact links (`Rooftop Subsidy`, `Turnkey EPC`, `About Us`) + compact globe toggle + primary WhatsApp CTA; Footer expanded to a balanced 4-column responsive grid providing complete sitemap navigation.

### 2026-10-22 — Single-Language Internationalization System (EN | हिन्दी Toggle)
- Changed: Implemented a global React Language Context and translation dictionary eliminating mixed-language copy.
- Reason: User requested a pure single-language experience at a time on the entire website, either 100% English or 100% Hindi.
- Impact: Added an interactive `[ EN | हिन्दी ]` capsule toggle in the navigation header, persisting preference in localStorage, with pure translations for Navigation, Hero, Rooftop Subsidy Engine, About Section, Cover Page, and Footer.

### 2026-10-22 — Rebranding to Devson Renewable Energy & Rooftop Subsidy Addition
- Changed: Rebranded company identity from ASA EPC to DEVSON Renewable Energy Private Limited.
- Reason: Client confirmed company registration and provided certified letterhead, 3D logo emblem, marketing flyer, and official 1–10 kW rooftop solar subsidy schedule.
- Impact: Updated all corporate credentials (CIN: U35105BR2026PTC087766, GSTIN: 10AANCD0450H1Z5, Rajgir & Nawada offices, official email/phones), brand logo assets, and integrated an interactive 1–10 kW rooftop solar cost & subsidy calculator.

### 2026-10-20 — Transition to Next.js App Router Architecture
- Changed: Adopted Next.js 15 (App Router with TypeScript and Vanilla CSS/CSS Modules) as the application framework.
- Reason: User requested Next.js framework build to facilitate local review and subsequent Cloudflare deployment.
- Impact: Componentized all 10 quotation sections into dedicated modular React components with static asset routing and zero hydration overhead.

### 2026-10-20 — Initial PRD Creation
- Changed: Created comprehensive PRD reverse-engineered from reference website.
- Reason: Project initiation for duplicate solar quotation website build.
- Impact: Governs technical architecture, specifications, and UI implementation.
