'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './firstVisitHero.module.scss';

const FirstVisitHero = memo(({ className = '' }: FirstVisitHeroProps) => (
  <section className={`${styles.FirstVisitHero} ${className}`}>
    <div className="hero-container">
      <div className="hero_b-left">
        <div className="hero-top">
          <h1>FIRST TIME CLIMBERS</h1>
          <p>{`We’re here to help you along. No previous climbing experience is necessary.`}</p>
        </div>

      </div>
    </div>
  </section>
));

interface FirstVisitHeroProps {
  className?: string;
}

export default FirstVisitHero;
