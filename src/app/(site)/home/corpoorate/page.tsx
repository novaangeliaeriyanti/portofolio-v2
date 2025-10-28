'use client';

import HeroBanner from '@/components/sections/home2/HeroBanner';
import NewsList from '@/components/sections/home2/NewsList';
import ProjectInquiry from '@/components/sections/home2/ProjectInquiry';
import Services from '@/components/sections/home2/Services';
import Solutions from '@/components/sections/home2/Solutions';
import Teams from '@/components/sections/home2/Teams';
import { slides } from '@/data/hero';

export default function CorporateHomePage() {
  return (
    <>
      <HeroBanner slides={slides} autoPlayMs={10000} />
      <Services />
      <Solutions />
      <Teams />
      <ProjectInquiry />
      <NewsList />
    </>
  );
}
