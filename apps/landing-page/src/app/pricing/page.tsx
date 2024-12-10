import '../styles/index.scss';

import { ScrollTrigger } from '@/components';
import {
  Footer,
  FixedFooter,
  Header,
  PricingHero,
  IntroGymSlider,
  PricingAndMembershipSection,
} from '@/containers';
import LeadFormN from '@/containers/Header/LeadForm';

export default function Operation() {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        <ScrollTrigger>
          <PricingAndMembershipSection />
        </ScrollTrigger>
        <LeadFormN />
      </main>
      <Footer />
      {/* <FixedFooter textBtn='Send a message' /> */}
    </>
  );
}
