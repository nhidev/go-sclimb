'use client';

import { memo } from 'react';
import { NavLink } from '@/components';
import styles from './introductionSection.module.scss';
import stylesBtn from '../../components/Button/Button.module.scss';
import { ROUTE } from '@/utils/constants';
const IntroductionSection = memo(({ className = '' }: IntroductionSectionProps) => (
  <section className={`${styles.IntroductionSection} ${className}`}>
    <div className="introduction-container">
      <div className="introduction_b-content">
      <div className="introduction-top">
          <h1>
            WELCOME TO <br/>SCLIMB
          </h1>
          <p>A space for all to challenge themselves.</p>
        </div>
        <div className="introduction-bottom">
           <>
              <NavLink className={`${stylesBtn?.Button} ${stylesBtn?.ButtonOrange} ${stylesBtn?.ButtonSquare}`} href={ROUTE.INTERIOR} exact scroll={true}>
                FIRST VISIT
              </NavLink>

              <NavLink className={`${stylesBtn?.Button} ${stylesBtn?.ButtonWhite} ${styles?.noMarginRight} ${stylesBtn?.ButtonSquare}`} href={ROUTE.OPERATION} exact scroll={true}>
                EXPLORE MEMBERSHIP
              </NavLink >
            </>
        </div>
      </div>
    </div>
  </section >
));

interface IntroductionSectionProps {
  className?: string;
}

export default IntroductionSection;
