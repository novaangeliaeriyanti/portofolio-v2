import HeroCorporate from '@/components/sections/hero/HeroCorporate';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import ClientSection from '@/components/sections/ClientSection';
import FAQSection from '@/components/sections/FAQSection';
import LatestBlog from '@/components/sections/LatestBlog';

const logos = [
  '/images/logo/logo1.png',
  '/images/logo/logo1.png',
  '/images/logo/logo1.png',
  '/images/logo/logo1.png',
  '/images/logo/logo1.png',
];
export default function CorporateHomePage() {
  return (
    <>
      <HeroCorporate />
      <AboutSection />
      <ClientSection logos={logos} />
      <ServicesSection />
      <ProjectShowcase />
      <Testimonials />
      <FAQSection />
      <LatestBlog />
      <CTASection />
    </>
  );
}
