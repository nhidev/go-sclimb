import '../styles/index.scss';

import { ScrollTrigger } from '@/components';
import {
  Footer,
  FixedFooter,
  Header,
  OperationHero,

  OperationSection5th,
  OperationSection6th,
  OperationSection7th,
} from '@/containers';
import LeadFormN from '@/containers/Header/LeadForm';

export default function Operation() {
  return (
    <>
      <Header />
      <main>
        <OperationHero />
        {/* <OperationSlider />
        <OperationChartSection /> */}
        <ScrollTrigger>
          <OperationSection5th />
          <OperationSection6th />
        </ScrollTrigger>
        <OperationSection7th />
        <LeadFormN />
      </main>
      <Footer />
      <FixedFooter textBtn='Send a message' />
    </>
  );
}
