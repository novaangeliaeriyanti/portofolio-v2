# 🏭 IndustrialCorp -- Industrial Company Profile Website Template

IndustrialCorp is a modern, responsive **Industrial Company Profile
Website Template** built using **Next.js 15**, **TypeScript**, and
**Tailwind CSS 4**.\
It is designed for companies in **manufacturing, construction,
engineering, oil & gas, energy, and industrial services** to present a
professional and clean online presence.

------------------------------------------------------------------------

## 🔗 Live Demo

🌐 https://portofolio-v2-dusky.vercel.app

------------------------------------------------------------------------

## 📂 Project Structure

    src/
     ├── app/
     │   ├── (site)/
     │   │   ├── about/
     │   │   ├── blogs/
     │   │   ├── contact/
     │   │   ├── home/
     │   │   ├── services/
     │   │   └── page.tsx
     │   ├── layout.tsx
     │   └── not-found.tsx
     │
     ├── components/
     │   ├── layout/
     │   │   ├── Footer.tsx
     │   │   ├── Header.tsx
     │   │   └── PageWrapper.tsx
     │   ├── sections/
     │   │   ├── home1/
     │   │   ├── home2/
     │   │   ├── HeroBanner.tsx
     │   │   ├── NewsList.tsx
     │   │   ├── Services.tsx
     │   │   └── Teams.tsx
     │   ├── shared/
     │   └── ui/
     │
     ├── data/
     ├── lib/
     ├── styles/
     └── types/

------------------------------------------------------------------------

## 🖥️ Tech Stack

  -----------------------------------------------------------------------
  Category           Technology
  ------------------ ----------------------------------------------------
  **Framework**      Next.js 15 (App Router)

  **Language**       TypeScript

  **Styling**        Tailwind CSS 4

  **Animation**      Framer Motion

  **Icons**          Lucide React

  **UI Library**     Radix UI

  **Theme**          next-themes (Light/Dark Mode)

  **Code Quality**   ESLint + Prettier
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 🌟 Features

-   Modern design built for industrial companies\
-   Fully responsive layout\
-   Dark & Light Mode\
-   Smooth animations with Framer Motion\
-   SEO-ready\
-   Modular and scalable components\
-   Two homepage variants\
-   High-performance with Next.js 15

------------------------------------------------------------------------

## 🖼️ Image Configuration

Supports images from **Unsplash**, **Pexels**, and Canva exports:

``` ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'images.pexels.com',
      port: '',
      pathname: '/**',
    },
  ],
}
```

------------------------------------------------------------------------

## 🚀 Installation & Setup

``` bash
cd Template
npm install
npm run dev
```

Visit:\
http://localhost:3000

------------------------------------------------------------------------

## 🏗️ Build & Deploy

### Production Build

``` bash
npm run build
npm start
```

------------------------------------------------------------------------

## 📦 Reusable Components

-   Hero Banner\
-   Services & Capabilities\
-   Projects / Case Studies\
-   Team Section\
-   Blog / News\
-   Contact Form\
-   Industrial Footer\
-   Responsive Header with Navigation & Submenu

------------------------------------------------------------------------

## 🔧 Customization

-   Update branding in `/data`\
-   Modify UI components in `/components/ui`\
-   Manage homepage sections in `/components/sections/home1` and
    `home2`\
-   Add pages inside the `(site)` folder
-   Modify styles text, font, or color in `/styles/global.css`
-   Modify animation `/lib/motion.ts`
-   Add SEO config `/lib/seo.config.ts`

------------------------------------------------------------------------