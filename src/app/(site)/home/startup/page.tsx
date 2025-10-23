'use client';

import AboutSection from '@/components/sections/home2/AboutSection';
import ClientSection from '@/components/sections/home2/ClientSection';
import FAQSection from '@/components/sections/home2/FAQSection';
import HeroStartup from '@/components/sections/home2/HeroStartup';
import LatestBlog from '@/components/sections/home2/LatestBlog';
import ProjectShowcase from '@/components/sections/home2/ProjectShowcase';
import ServicesSection from '@/components/sections/home2/ServicesSection';
import Testimonials from '@/components/sections/home2/Testimonials';
import CTASection from '@/components/sections/shared/CTASection';
import { clients } from '@/data/clients';

export default function StartupHomePage() {
  return (
    <>
      <HeroStartup />
      <AboutSection />
      <ClientSection logos={clients.logos} />
      <ServicesSection />
      <ProjectShowcase />
      <Testimonials />
      <FAQSection />
      <LatestBlog />
      <CTASection />
    </>
  );
}
