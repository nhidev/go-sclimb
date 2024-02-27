'use client';

import Image from 'next/image';
import { memo } from 'react';
import { NavLink } from '@/components';
import withTheme from '@/theme';
import styles from './introductionSection.module.scss';
import { ROUTE } from '@/utils/constants';
const IntroductionSection = memo(({ className = '' }: IntroductionSectionProps) => (
  <section className={`${styles.IntroductionSection} ${className}`}>
    <div className="introduction-container">
      <div className="introduction_b-left">
        <div className="introduction-top">
          <h1>
            WELCOME TO SCLIMB
          </h1>
          <p>A space for all to challenge themselves.</p>
        </div>
        <div className="introduction-bottom">
          {withTheme(
            <>
              <NavLink className="ant-btn css-dev-only-do-not-override-1vorn5g ant-btn-primary g-cta-button" href={ROUTE.INTERIOR} exact scroll={true}>
                FIRST VISIT
              </NavLink>

              <NavLink className="ant-btn css-dev-only-do-not-override-1vorn5g ant-btn-default g-cta-button" href={ROUTE.OPERATION} exact scroll={true}>
                EXPLORE MEMBERSHIP
              </NavLink >
            </>
          )}
        </div>
      </div>
      <div className="introduction_b-right">
        <Image width={335} height={240} src="/imagesN/introduction-img.png" alt="introduction banner" />
        {/* <Image priority width={335} height={240} src="/imagesN/introduction-img.png" alt="introduction banner" /> */}

      </div>
    </div>
  </section >
));

interface IntroductionSectionProps {
  className?: string;
}

export default IntroductionSection;
