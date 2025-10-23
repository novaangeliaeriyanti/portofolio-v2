import AboutSection from '@/components/sections/home1/AboutSection';
import ClientSection from '@/components/sections/home1/ClientSection';
import CTASection from '@/components/sections/shared/CTASection';
import FAQSection from '@/components/sections/home1/FAQSection';
import HeroCorporate from '@/components/sections/home1/HeroCorporate';
import LatestBlog from '@/components/sections/home1/LatestBlog';
import ProjectShowcase from '@/components/sections/home1/ProjectShowcase';
import ServicesSection from '@/components/sections/home1/ServicesSection';
import Testimonials from '@/components/sections/home1/Testimonials';
import { clients } from '@/data/clients';
export default function CorporateHomePage() {
  return (
    <>
      <HeroCorporate />
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
