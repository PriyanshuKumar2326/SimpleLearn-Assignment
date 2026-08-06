# Nexcent — Membership Growth Landing Page

A modern, responsive, and performance-optimized landing page built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🌟 Tech Stack & Key Technologies

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Architecture**: Server-Side Rendering (SSR) & Static Site Generation (SSG)

---

## 📁 Directory Structure & File Map

```text
simpleLearn_Assignment/
├── public/                     # Static image assets (logos, illustrations, brand icons)
│   └── images/
├── src/
│   ├── app/                    # Next.js App Router root
│   │   ├── globals.css         # Global CSS, Tailwind v4 theme, smooth scroll settings
│   │   ├── layout.tsx          # Root Layout (Metadata, HTML structure, Fonts)
│   │   └── page.tsx            # Main Landing Page entry point
│   ├── components/
│   │   ├── layout/             # Top-level layout components
│   │   │   ├── Navbar.tsx      # Sticky Navigation Bar with Scroll-Spy & Mobile Menu
│   │   │   └── Footer.tsx      # Footer section with links & newsletter signup
│   │   ├── sections/           # Modular section components
│   │   │   ├── Hero.tsx        # Top Hero section with main CTA (#home)
│   │   │   ├── Clients.tsx     # Client brand logos (#product)
│   │   │   ├── Community.tsx   # Community membership cards (#services)
│   │   │   ├── Unlock.tsx      # Platform features showcase (#features)
│   │   │   ├── Achievements.tsx# Key platform stats & figures (#achievements)
│   │   │   ├── FeatureTwo.tsx  # Additional product highlights (#faq)
│   │   │   ├── Testimonial.tsx # Customer feedback & review (#testimonial)
│   │   │   ├── Blog.tsx        # Marketing articles & news (#blog)
│   │   │   └── CTA.tsx         # Bottom Call to Action section (#cta)
│   │   └── ui/                 # Reusable UI primitive components
│   │       ├── Button.tsx      # Styled button component
│   │       ├── Card.tsx        # Standard card wrapper
│   │       ├── Container.tsx   # Max-width layout container wrapper
│   │       ├── Icon.tsx        # Icon rendering component
│   │       ├── MarketingCard.tsx# Card for blog & marketing items
│   │       └── SectionHeading.tsx# Shared title and subtitle layout
│   ├── data/
│   │   └── data.json           # Single Source of Truth: All page copy & structure
│   └── types/
│       └── landing.ts          # TypeScript type definitions for data models & components
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies & scripts
└── README.md                   # Project documentation
```

---

## 🔄 How the Code Works & Application Data Flow

### 1. Data Flow (Single Source of Truth)
Instead of hardcoding text or links across multiple components, all landing page content lives in `src/data/data.json`.

```text
[ data.json ] ───(Imported into)───> [ page.tsx ]
                                           │
       ┌───────────────────────────────────┼───────────────────────────────────┐
       ▼                                   ▼                                   ▼
[ Navbar.tsx ]                    [ Section Components ]               [ Footer.tsx ]
(Receives navbar data)           (Receives section-specific data)     (Receives footer data)
```

1. **Type Safety**: `src/types/landing.ts` defines explicit TypeScript interfaces for all data properties.
2. **Page Injection**: `src/app/page.tsx` imports `data.json`, casts it to `LandingPageData`, and passes relevant slices to section components as props (e.g. `<Hero data={landingPageData.hero} />`).
3. **Rendering**: Section components render UI primitives (`Container`, `Button`, `SectionHeading`) using the passed props.

---

## ⚡ Key Features & Technical Details

### 1. 100% Server-Side Rendered (SSR)
- **Fast Initial Page Load**: All layout sections and content are pre-rendered into static HTML on the server during build time (`next build`).
- **SEO Optimized**: Search engine crawlers receive complete HTML containing all heading tags, body copy, and navigation links (`<a href="#services">`).

### 2. Smooth Navigation & Scroll-Spy Logic (`Navbar.tsx`)
The navigation header provides a seamless single-page scrolling experience:

- **Programmatic Smooth Scrolling**: Clicking a navbar link smoothly scrolls the page to the target section ID (accounting for the 80px sticky header height).
- **Scroll-Spy URL Synchronization**: As the user scrolls up or down, an active scroll listener detects which section is currently in view and automatically updates the browser address bar hash (e.g. `/#services`, `/#features`, `/#product`) via `window.history.replaceState`.
- **Navigation Lock (`isClickScrollingRef`)**: When a link is clicked, a temporary lock disables scroll-spy for 1 second during the smooth scroll animation. This prevents the viewport from jumping back to the home section on early scroll frames.
- **Re-Click Support**: Clicking a link twice or returning to the top and clicking the same link always executes smooth scrolling.

### 3. Responsive Layout & Mobile Navigation
- Built using Tailwind CSS flexbox and grid utilities (`hidden lg:block`, `grid md:grid-cols-2`).
- Responsive mobile drawer in `Navbar.tsx` for mobile screen sizes (< 1024px).

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/PriyanshuKumar2326/simpleLearn_Assignment.git
cd simpleLearn_Assignment
npm install
```

### 2. Run Development Server
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Test
Validate compilation, TypeScript checks, and build performance:
```bash
npm run build
npm start
```

---

## 💡 Beginner's Guide: How to Make Changes

### How to update page text, images, or links?
Edit `src/data/data.json`. All headings, paragraphs, button labels, and image paths are configured in this file.

### How to add a new section?
1. Add the section's content structure to `src/data/data.json`.
2. Add its TypeScript interface to `src/types/landing.ts`.
3. Create a new component file inside `src/components/sections/YourNewSection.tsx` (ensure it has `<section id="your-id">`).
4. Import and render your component inside `src/app/page.tsx`.
