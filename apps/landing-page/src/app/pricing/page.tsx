import '../styles/index.scss';

import { ScrollTrigger } from '@/components';
import {
  Footer,
  FixedFooter,
  Header,
  PricingHero,
  IntroGymSlider,
  PricingAndMembershipSection,
  OperationSection6th,
  OperationSection7th,
} from '@/containers';
import LeadFormN from '@/containers/Header/LeadForm';

export default function Operation() {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        {/*
        <OperationChartSection /> */}
        <ScrollTrigger>
          <PricingAndMembershipSection />
          {/* <IntroGymSlider/> */}
          {/* <OperationSection6th /> */}
        </ScrollTrigger>
        {/* <OperationSection7th /> */}
        <LeadFormN />
      </main>
      <Footer />
      <FixedFooter textBtn='Send a message' />
    </>
  );
}
