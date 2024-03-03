import { ScrollTrigger } from '@/components';
import { Footer, Header, FixedFooter, MembershipAndEvents, CrossMemberSlider, IntroGymSlider } from '@/containers';

import {
  BenefitsSection,
  GeneralNoteSection,
  IntroductionSection,
  NoteServicesSection,
  OfficeInteriorSection,
  FeaturedServiceSection,
  ServiceSection,
  // SurveySection,
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
          {/* <OfficeInteriorSection /> */}
       
         <CrossMemberSlider /> 
         <IntroGymSlider/>
        </ScrollTrigger>
        {/* <GeneralNoteSection /> */}
        {/* <ScrollTrigger>
          <ServiceSection />
           <BenefitsSection />
        </ScrollTrigger> */}
        {/* <NoteServicesSection />
        <OfficeInteriorSection />
        <GeneralNoteSection /> */}
        <LeadFormN />
      </main>
      <Footer />
      <FixedFooter textBtn='Send a message' />
    </>
  );
}
