import Hero from '@/components/sections/Hero';
import CompanyOverview from '@/components/sections/CompanyOverview';
import ServicesOverview from '@/components/sections/ServicesOverview';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ServicesOverview />
      <Testimonials />
    </>
  );
}