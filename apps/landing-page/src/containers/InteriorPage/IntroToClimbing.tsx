'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './introToClimbing.module.scss';

const IntroToClimbing = memo(({ className = '' }: IntroToClimbingProps) => (
  <section className={`${styles.IntroToClimbing} ${className}`}>
    <div className="introToClimbing_b-container">
      <div className="introToClimbing_b-body">
        <div className="introToClimbing-title">
          <h3>
            <span>{`There’s a First Time for Everything!`}</span>
          </h3>
          <h4>
            <span>{`So, this is your first-time venturing into the world of indoor rock climbing? Don’t worry we’ll be gentle. It’s not hard to learn to climb, but it’s important that you learn from an experienced instructor all of the necessary information.`}</span>
          </h4>
        </div>
        <div className="introToClimbing-content fade-up-element">
          <div className="introToClimbing-block">
            <Image width={660} height={540} quality={100} src="/imagesN/first-time.jpg" alt="document" />
          </div>
        </div>
      </div>
    </div>
  </section>
));

interface IntroToClimbingProps {
  className?: string;
}

export default IntroToClimbing;
