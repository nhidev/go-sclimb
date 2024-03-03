'use client';

import { Button } from 'antd';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { memo } from 'react';

import { leadFormModalAtom } from '@/atoms';
import { Default, Mobile } from '@/components';
import withTheme from '@/theme';
import styles from './generalNoteSection.module.scss';

const GeneralNoteSection = memo(({ className = '' }: GeneralNoteSectionProps) => {
  const setLeadFormModal = useSetAtom(leadFormModalAtom);

  return (
    <section className={`${styles.GeneralNoteSection} ${className}`}>
      <div className="genera-note_top">
      <p>Our Address</p>
        {/* <h2>Come Climb With Us</h2>
        <p>Our Address</p>
        <p>Hours of Operation</p>
        <p>Monday to Sunday 10 AM – 10 PM</p>
        <p>Any Questions?</p>
        <p> tufas@tufasboulderlounge.com</p>
        <p>215-360-3999</p>
        <p>tufas@tufasboulderlounge.com</p> */}
      </div>
      <div className="genera-note_bottom">
         <Image width={700} height={400} src="/imagesN/sclimb-map.png" priority alt="sclimb map" />
      </div>
      
    </section>
  );
});

interface GeneralNoteSectionProps {
  className?: string;
}

export default GeneralNoteSection;
