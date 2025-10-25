'use client';

import HeroBanner from '@/components/sections/home1/HeroBanner';
import NewsList from '@/components/sections/home1/NewsList';
import ProjectInquiry from '@/components/sections/home1/ProjectInquiry';
import Services from '@/components/sections/home1/Services';
import Solutions from '@/components/sections/home1/Solutions';
import Teams from '@/components/sections/home1/Teams';
import { slides } from '@/data/hero';

export default function CorporateHomePage() {
  return (
    <>
      <HeroBanner slides={slides} autoPlayMs={5000} />
      <Services />
      <Solutions />
      <Teams />
      <ProjectInquiry />
      <NewsList />
    </>
  );
}
