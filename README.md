# XAMS Consultancy – Web Application & Developer Documentation

Welcome to the **XAMS Consultancy** web portal repository. This document provides a comprehensive overview of the website's structure, features, architecture, and developer guides for building, running, and maintaining the platform.

---

# 🌐 About the Website

The XAMS Consultancy platform is a high-performance, responsive single-page web application (SPA) tailored for elite **Airworthiness Management**, **Quality Assurance (QA)**, and **Compliance Monitoring** consultancy serving the aviation, manufacturing, maritime, and defense sectors.

---

# 📋 Key Sections & Components

### Header Bar (`src/components/Header.tsx`)

Displays:

- Global regional presence:
  - Islamabad
  - Karachi
  - Rawalpindi
  - Abbottabad
- Hotline contact information
- Official support email
- Social media links
- Company branding
- Client Registration CTA button

---

### Hero Banner (`src/components/Hero.tsx`)

Highlights:

- ISO Compliance
- Confidential Consultancy
- Audit-Ready Assurance
- Quick registration actions
- Interactive modal triggers

---

### Who We Are (`src/components/WhoWeAre.tsx`)

Executive corporate profile introducing:

- Airworthiness Management capabilities
- Quality Management System (QMS)
- EASA alignment
- Corporate values

---

### Services (`src/components/Services.tsx`)

Categorized breakdown of:

- Airworthiness Management
- Quality Assurance
- Educational Consultancy
- Career Counselling

---

### Mission & Vision (`src/components/MissionVision.tsx`)

Contains:

- Strategic goals
- Quality policies
- Corporate values
- Long-term industry vision

---

### Leadership Team (`src/components/Team.tsx`)

Professional credentials and profiles of:

- Executive leadership
- Directors
- Senior consultants

---

### Join Us (`src/components/JoinUs.tsx`)

Recruitment portal for:

- Career Counselling Professionals
- QA & HSE Professionals
- Internship opportunities

---

### Office Locations (`src/components/AboutCompany.tsx`)

Interactive regional hub featuring:

- Islamabad office
- Karachi office
- Rawalpindi office
- Abbottabad office

---

### Footer (`src/components/Footer.tsx`)

Contains:

- Contact information
- Quick links
- Copyright notice
- Compliance notices
- Scroll-to-top functionality

---

### Registration Modal (`src/components/RegistrationModal.tsx`)

Modal interface linking directly to the official registration form.

---

# 📍 Office Locations & Official Information

| Office Hub | Address |
|------------|----------|
| Islamabad (HQ) | Abu Dhabi Towers, F-11/1, Islamabad, Pakistan |
| Karachi | Room No. 217, DHA Suffa University, Karachi, Pakistan |
| Rawalpindi | Rawalpindi, Pakistan |
| Abbottabad | Abbottabad, Pakistan |

### Contact Information

- Hotline: **03200551376**
- Email: **xamconsultancy@gmail.com**

---

# 🏢 Leadership & Team Directory

1. **Zameer Ul Hasan**
   - CEO & Lead Auditor

2. **Prof. Dr. Razi Sultan Siddiqui**
   - Associate Dean & Director Student Counselling

3. **Iftikhar Javaid**
   - Director Operations

4. **Xain Ul Hassan**
   - Director IT

---

# 📁 Project Directory Structure

```text
xam-consultancy-website/

├── public/
│   └── logo.jpg
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── aviation_hero_banner.jpg
│   │       ├── company_logo.jpg
│   │       ├── iftikar.jfif
│   │       ├── logo.jpg
│   │       ├── quality_assurance_audit.jpg
│   │       ├── razi.jpg
│   │       ├── xain.jfif
│   │       ├── xams_official_logo.jpg
│   │       └── zameer.jfif
│   │
│   ├── components/
│   │   ├── AboutCompany.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Interns.tsx
│   │   ├── JoinUs.tsx
│   │   ├── MissionVision.tsx
│   │   ├── Partnership.tsx
│   │   ├── RegistrationModal.tsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   └── WhoWeAre.tsx
│   │
│   ├── App.tsx
│   ├── assets.d.ts
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---
# 🛠 Screenshot
<img width="1747" height="16300" alt="image" src="https://github.com/user-attachments/assets/f8caea21-75e7-45ef-a56b-efc8bc949604" />

# 🛠 Developer Setup & Execution Guide

## 1. Requirements & Prerequisites

Ensure your system has the following installed:

- Node.js v18+ (recommended: LTS)
- npm v9+
- VS Code (recommended)

---

## 2. Clone the Repository

```bash
git clone <repository-url>

cd xam-consultancy-website
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Run Development Server

Start the Vite development server:

```bash
npm run dev
```

The application will start on:

```text
http://localhost:5173
```

---

## 5. Type Checking & Linting

Run static checks:

```bash
npm run lint
```

---

## 6. Production Build

Generate an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 🎨 Tech Stack & Conventions

| Technology | Description |
|------------|-------------|
| React 18 | Frontend framework |
| TypeScript | Type-safe JavaScript |
| Vite | Build tool |
| Tailwind CSS | Utility-first CSS |
| Lucide React | Icon library |
| Google Forms | Registration integration |

---

# ✨ Features

- Responsive design
- Single-page application (SPA)
- Fast Vite build system
- TypeScript support
- Interactive modals
- Office location directory
- Registration forms integration
- Team showcase section
- Mobile-friendly UI
- Smooth scrolling navigation

---

# 🚀 Future Enhancements

- Backend integration
- Authentication system
- Admin dashboard
- Blog section
- Analytics dashboard
- CMS integration
- Multi-language support

---

# 📧 Contact

**XAMS Consultancy**

- Email: xamconsultancy@gmail.com
- Hotline: 03200551376

---

## © XAMS Consultancy. All Rights Reserved.
