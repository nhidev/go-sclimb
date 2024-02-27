'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './interiorHero.module.scss';

const InteriorHero = memo(({ className = '' }: InteriorHeroProps) => (
  <section className={`${styles.InteriorHero} ${className}`}>
    <div className="hero-container">
      <div className="hero_b-left">
        <div className="hero-top">
          <h1>{`First Time Climbers`}</h1>
          <p>{`We’re here to help you along. No previous climbing experience is necessary.`}</p>
        </div>

      </div>
      <div className="hero_b-right">
        <div className="hero-bottom">
          <Image width={335} height={240} src="/imagesN/introduction-img.png" alt="introduction banner" />
          {/* <Image width={400} height={394} src="/imagesN/hero-banner-i.svg" priority alt="hero banner" /> */}
        </div>
      </div>
    </div>
  </section>
));

interface InteriorHeroProps {
  className?: string;
}

export default InteriorHero;
