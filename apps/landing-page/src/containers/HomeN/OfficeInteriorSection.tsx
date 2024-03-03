'use client';

import { Button } from 'antd';
import Image from 'next/image';
import { memo } from 'react';
import { useRouter } from 'next/navigation'

import { Default, InteriorSwiper, Mobile } from '@/components';
import withTheme from '@/theme';
import styles from './officeInteriorSection.module.scss';

const INTERIOR_SLIDE_LIST = [
  {
    image: 'slide-01.jpg',
     quote: 'A wonderful place, with many activities to enjoy! Come and have fun. Staff are very professional, friendly! Drinks are fantastic as well! You can ask a bartender to create a new drink your mood desires.',
  },
  {
    image: 'slide-02.jpg',
     quote: 'I had an amazing time at this indoor rock climbing gym!',
  },
  {
    image: 'slide-03.jpg',
     quote: 'The space is beautiful and clean, this is my destination every time I have free time and is also where I come to exercise and interact with people.',
  },
  {
    image: 'slide-04.jpg',
     quote: 'A wonderful space and lots of happiness with different colors, climbing is not only good for health, it is a sport that entertains the spirit when stressed or pressure at work.',
  },
];

const OfficeInteriorSection = memo(({ className = '' }: OfficeInteriorSectionProps) => {
  const router = useRouter();

  return (
    <section className={`${styles.OfficeInteriorSection} ${className}`}>
      <div className="office-interior_top">
        <h2>OUR COMMUNITY</h2>
        <p>Whether you are an experienced climber or brand-new to Sclimb Gym, <br />there’s never been a better time to pay us a visit. <br />It seriously might change your life, It has for many people!</p>
        
      </div>
      <div className="office-interior_bottom">
        <InteriorSwiper slideList={INTERIOR_SLIDE_LIST} />
      </div>
    </section>
  );
});

interface OfficeInteriorSectionProps {
  className?: string;
}

export default OfficeInteriorSection;
