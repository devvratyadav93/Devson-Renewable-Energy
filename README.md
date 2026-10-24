# DEVSON Renewable Energy Proposal & Solar Pricing Platform

A modern, high-performance web application, residential/commercial solar subsidy calculator, and corporate A4 print proposal engine built for **DEVSON Renewable Energy Private Limited**.

---

## 🌟 Highlights

- **Dual-Purpose Presentation:**
  - **Interactive Screen Experience:** Sticky glassmorphic navigation, ambient background video, smooth scroll animations, 120-day Gantt timeline chart, itemized commercial Bill of Quantities (BOQ), and floating accept/print action bar.
  - **Interactive 1 kW to 10 kW Rooftop Subsidy Matrix:** Live calculation of system generation, roof space, Central Subsidy, and Bihar State Subsidy with instant WhatsApp quote booking.
  - **A4 Corporate Print Engine:** Automatic 1:1 multi-page PDF generation via `@page { size: A4; margin: 0; }`, dedicated executive Cover Page, zero-height hero collapse, and anti-orphan pagination rules.
- **Modern Tech Stack:** Next.js 15 (App Router), TypeScript, Vanilla CSS (Design Tokens & CSS Modules).
- **Zero Monolithic Inlining:** Fully decoupled static assets (`public/assets/`), lightweight bundle size, sub-second load times.

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
git clone https://github.com/devvratyadav93/Devson.git
cd Devson

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
│       └── logos/
│           ├── devson-logo.png     # Official transparent Devson emblem
│           └── favicon.png         # Devson circular brand icon
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML & Devson metadata layout
│   │   └── page.tsx                # Main single-page application & print observer
│   ├── components/                 # Modular section components
│   │   ├── CoverPage.tsx           # Dedicated A4 Cover Page with Devson credentials
│   │   ├── Navigation.tsx          # Sticky navigation, WhatsApp CTA & mobile drawer
│   │   ├── Hero.tsx                # Video background & project stats
│   │   ├── AboutSection.tsx        # Devson company credentials & 4 core sectors
│   │   ├── RooftopSubsidySection.tsx # Interactive 1–10 kW Solar Cost & Subsidy calculator
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
│   │   ├── Footer.tsx              # Devson Rajgir/Nawada offices, CIN, GSTIN, contacts
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

## 📄 Corporate Identity & Statutory Credentials
- **Company Name:** DEVSON Renewable Energy Private Limited
- **CIN:** `U35105BR2026PTC087766`
- **GSTIN:** `10AANCD0450H1Z5`
- **Corporate Office:** Bihar Sharif Road, Panditpur More, Rajgir, Nalanda, Bihar 803116 (Opp. Hotel Stay Here)
- **Registered Office:** At H 01, Vill Dattitellaha, Rajauli East Block, Nawada, Bihar 805125
- **Official Email:** `devson.energy@gmail.com`
- **Official Phones:** `+91 99730 50833` · `+91 92969 50833` (WhatsApp) · `+91 91133 02738`
