'use client';

import HeroBanner from '@/components/sections/home1/HeroBanner';
import NewsList from '@/components/sections/home1/NewsList';
import Services from '@/components/sections/shared/Services';
import Solutions from '@/components/sections/home1/Solutions';
import Teams from '@/components/sections/home1/Teams';
import ProjectInquiry from '@/components/sections/shared/ProjectInquiry';
import { slides } from '@/data/hero';

export default function CompanyHomePage() {
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
