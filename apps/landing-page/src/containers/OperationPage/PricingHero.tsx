'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './pricingHero.module.scss';


const PricingHero = memo(({ className = '' }: PricingHeroProps) => (
  <section className={`${styles.PricingHero} ${className}`}>
    <div className="hero-container">
      <div className="hero_b-left">
        <div className="hero-top">
          <h1>PRICING OPTIONS</h1>
          <p>We’re excited to introduce rock climbing to first-timers and welcome veteran rock-jocks. Life’s too short not to come and climb.</p>
        </div>
      </div>
    </div>
  </section>
));

interface PricingHeroProps {
  className?: string;
}

export default PricingHero;
