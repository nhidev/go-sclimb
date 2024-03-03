import type { Metadata } from 'next';

import '../styles/index.scss';
import styles from './page.module.scss';

import { ScrollTrigger } from '@/components';

import {
  Footer,
  FixedFooter,
  Header,
  GridCardSection,
  InteriorConstruction,
  IntroToClimbing,
  FirstVisitHero,
  ClimbingGrades,
  IntroGymSlider,
} from '@/containers';
import { GeneralNoteSection } from '@/containers/HomeN';
import LeadFormN from '@/containers/Header/LeadForm';

export const metadata: Metadata = {
  metadataBase: new URL('https://sclimb.com.vn'),
  title: 'Sclimb - First visit',
  description:
  'Sclimb rock climbing gym provides everyone with a world class indoor rock climbing, fitness, and community experience in state of the art facilities.',
keywords:
  'rock climbing gym, bouldering gym, indor climbing gym, leo núi nhân tạo, leo núi trong nhà, thể thao mạo hiểm',
 openGraph: {
    title: 'Sclimb - First visit',
    description:
  'Sclimb rock climbing gym provides everyone with a world class indoor rock climbing, fitness, and community experience in state of the art facilities.',
 images: [
      {
        url: "/imagesN/meta-interior-page.png",
        alt: "sclimb"
      }
    ],
    url: "https://sclimb.com.vn"
  },
};

export default async function Interior() {
  return (
    <>
      <Header />
      <main>
        <FirstVisitHero />
        <IntroToClimbing className={styles.Interior_IntroToClimbing} />
        <GridCardSection />
        {/* <InteriorStartup /> */}
        {/* <IntroGymSlider /> */}
        <ScrollTrigger>
          {/* <InteriorConstruction /> */}
          <ClimbingGrades/>

          {/* <IntroGymSlider/> */}
        </ScrollTrigger>
        
        {/* <GeneralNoteSection /> */}
        {/* <OfficePortfolio /> */}
        {/* <InteriorCourse /> */}
        {/* <InteriorConsultationSection /> */}
        <LeadFormN />
      </main>
      <Footer />
      <FixedFooter textBtn="Send a message" />
    </>
  );
}
