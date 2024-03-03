import { ScrollTrigger } from '@/components';
import { Footer, Header, FixedFooter, MembershipAndEvents, CrossMemberSlider, IntroGymSlider } from '@/containers';

import {
  IntroductionSection,
  NoteServicesSection,
  FeaturedServiceSection
} from '@/containers/HomeN';

import './styles/index.scss';

import LeadFormN from '@/containers/Header/LeadForm';

export default function HomeN() {
  return (
    <>
      <Header />
      <main>
        <IntroductionSection />    
        <ScrollTrigger>
        <FeaturedServiceSection />
          <MembershipAndEvents />     
          <CrossMemberSlider /> 
         <IntroGymSlider/>
        </ScrollTrigger>
        <LeadFormN />
      </main>
      <Footer />
      <FixedFooter textBtn='Send a message' />
    </>
  );
}
