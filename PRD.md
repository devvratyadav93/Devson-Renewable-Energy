# Product Requirements Document (PRD)
## ASA EPC Turnkey Solar Quotation & Proposal Platform

---

## 1. Document Overview
- **Project Name:** ASA EPC Solar Proposal & Techno-Commercial Quotation Platform
- **Reference Webpage:** [`https://theidealshukla.github.io/asa-epc-quotation/D-K-Builders-2026-06-25.html`](https://theidealshukla.github.io/asa-epc-quotation/D-K-Builders-2026-06-25.html)
- **Target Location:** Local Project Workspace [`e:\My Projects\ASA EPC Pvt. Ltd`](file:///e:/My%20Projects/ASA%20EPC%20Pvt.%20Ltd)
- **Document Version:** 1.0.0
- **Status:** Approved for Technical Architecture & Implementation
- **Author:** Antigravity AI & ASA EPC Engineering Team

---

## 2. Business Objectives & Problem Statement

### 2.1 Context
ASA EPC Pvt. Ltd. (Franchise Partner of Waaree Energies Ltd., DPIIT No. DIPP19520, CIN U31905MP2018PTC04527) delivers concept-to-commissioning utility-scale solar projects, substations, and transmission lines across India.

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
### 2026-10-20 — Transition to Next.js App Router Architecture
- Changed: Adopted Next.js 15 (App Router with TypeScript and Vanilla CSS/CSS Modules) as the application framework.
- Reason: User requested Next.js framework build to facilitate local review and subsequent Cloudflare deployment.
- Impact: Componentized all 10 quotation sections into dedicated modular React components with static asset routing and zero hydration overhead.

### 2026-10-20 — Initial PRD Creation
- Changed: Created comprehensive PRD reverse-engineered from reference website.
- Reason: Project initiation for duplicate solar quotation website build.
- Impact: Governs technical architecture, specifications, and UI implementation.
