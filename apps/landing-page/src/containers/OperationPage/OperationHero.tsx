'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './operationHero.module.scss';


const OperationHero = memo(({ className = '' }: OperationHeroProps) => (
  <section className={`${styles.OperationHero} ${className}`}>
    <div className="hero-container">
      <div className="hero_b-left">
        <div className="hero-top">
          <h1>
            Pricing Options</h1>
          <p>We’re excited to introduce rock climbing to first-timers and welcome veteran rock-jocks. Life’s too short not to come and climb.


          </p>
        </div>
      </div>
      <div className="hero_b-right">
        <div className="hero-bottom">
          <Image width={335} height={240} src="/imagesN/introduction-img.png" alt="introduction banner" />
        </div>
      </div>
    </div>
  </section>
));

interface OperationHeroProps {
  className?: string;
}

export default OperationHero;
