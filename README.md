# 🏢 ModernCorp – Company Profile Website

**ModernCorp** is a modern, responsive **company profile website** built with **Next.js 15**, **TypeScript**, and **Tailwind CSS 4**.  
It is designed to present businesses, agencies, or startups with a professional, clean, and animated user experience.

---

## 🖥️ Live Demo

🌐 **[https://portofolio-v2-dusky.vercel.app](https://portofolio-v2-dusky.vercel.app)**  
_(Hosted on Vercel)_

![ModernCorp Preview](https://via.placeholder.com/1200x600?text=ModernCorp+Preview)

---

## 🚀 Tech Stack

| Category             | Technology                                                |
| -------------------- | --------------------------------------------------------- |
| **Framework**        | [Next.js 15](https://nextjs.org/)                         |
| **Language**         | [TypeScript](https://www.typescriptlang.org/)             |
| **Styling**          | [Tailwind CSS 4](https://tailwindcss.com/)                |
| **Animation**        | [Framer Motion](https://www.framer.com/motion/)           |
| **Icons**            | [Lucide React](https://lucide.dev/)                       |
| **UI Library**       | [Radix UI](https://www.radix-ui.com/)                     |
| **Theme Management** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Code Quality**     | ESLint + Prettier                                         |

---

## 🌟 Features

- 🧭 Modular and reusable components
- 🌗 Dark / Light mode toggle
- 🎬 Smooth page and section transitions
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js 15 App Router
- 🧩 Two homepage variants: **Corporate** and **Startup**
- 🔍 SEO optimized & accessible

---

## ⚙️ Next.js Configuration

Optimized for remote image loading (e.g., Unsplash):

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```
