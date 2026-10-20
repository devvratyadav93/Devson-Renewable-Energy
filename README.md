# ASA EPC Solar Proposal & Turnkey Quotation Platform

A modern, high-performance web application and corporate A4 print proposal engine built for **ASA EPC Pvt. Ltd.** (Waaree Energies Franchise Partner).

Prepared for **D K Builders (Bawadiya Kala, Bhopal, MP)** for a **12,500 KWp DC (10 MW AC) Grid-Connected Ground Mount Solar Power Project** under the PM-KUSUM / Open Access scheme.

---

## 🌟 Highlights

- **Dual-Purpose Presentation:**
  - **Interactive Screen Experience:** Sticky glassmorphic navigation, ambient background video, smooth scroll animations, 120-day Gantt timeline chart, itemized commercial Bill of Quantities (BOQ), and floating accept/print action bar.
  - **A4 Corporate Print Engine:** Automatic 1:1 multi-page PDF generation via `@page { size: A4; margin: 0; }`, dedicated executive Cover Page, zero-height hero collapse, and anti-orphan pagination rules.
- **Modern Tech Stack:** Next.js 15 (App Router), TypeScript, Vanilla CSS (Design Tokens & CSS Modules).
- **Zero Monolithic Inlining:** Fully decoupled static assets (`public/assets/`), lightweight ~112 kB bundle size, sub-second load times.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** Vanilla CSS3 with CSS Custom Properties (Tokens)
- **Typography:** Space Grotesk & Inter (Google Fonts)
- **Video:** Cloudinary streaming CDN with low-res poster fallback

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (Tested on Node v22.14.0)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/devvratyadav93/ASA-EPC-Pvt.-Ltd.git
cd ASA-EPC-Pvt.-Ltd

# Install dependencies
npm install
```

### Running Locally
```bash
# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Export
```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
├── public/
│   └── assets/                     # High-res logos, diagrams, and project photos
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML & metadata layout
│   │   └── page.tsx                # Main single-page application & print observer
│   ├── components/                 # Modular section components
│   │   ├── CoverPage.tsx           # Dedicated A4 Cover Page (print mode)
│   │   ├── Navigation.tsx          # Sticky navigation & mobile drawer
│   │   ├── Hero.tsx                # Video background & project stats
│   │   ├── AboutSection.tsx        # Company credentials & Waaree partnership
│   │   ├── ClientsNetworkSection.tsx
│   │   ├── ProjectSummarySection.tsx
│   │   ├── TechSpecSection.tsx
│   │   ├── VendorsSection.tsx
│   │   ├── ScopeOfWorkSection.tsx
│   │   ├── ProjectScheduleSection.tsx
│   │   ├── WarrantySection.tsx
│   │   ├── CommercialOfferSection.tsx
│   │   ├── ExecutionSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TrackRecordSection.tsx
│   │   ├── Footer.tsx
│   │   ├── AcceptBar.tsx
│   │   └── IosPrintModal.tsx
│   └── styles/
│       ├── tokens.css              # Design variables (colors, radii, typography)
│       ├── globals.css             # Base reset, layout, and component styles
│       └── print.css               # A4 PDF print rules & pagination controls
├── PRD.md                          # Product Requirements Document
└── TECH_SPEC.md                    # Technical Specification Document
```

---

## 📄 License & Confidentiality
Confidential commercial quotation prepared by **ASA EPC Pvt. Ltd.** Valid for 30 days from offer date.
