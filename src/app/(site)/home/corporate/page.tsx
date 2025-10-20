import HeroCorporate from '@/components/sections/hero/HeroCorporate';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default function CorporateHomePage() {
  return (
    <>
      <HeroCorporate />
      <AboutSection />
      <ServicesSection />
      <ProjectShowcase />
      <Testimonials />
      <CTASection />
    </>
  );
}
