'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './interiorConstruction.module.scss';

const InteriorConstruction = memo(() => (
  <section className={styles.InteriorConstruction}>
    <div className="interiorConstruction_b-container">
      <div className="interiorConstruction_b-body">
        <div className="interiorConstruction-title">
          <h3>{`Join the Community`}</h3>
          <h4>{`Want to climb more often? You won't want to keep paying for Day Passes - consider a Membership or Punch Card and learn which is right for you.`}</h4>
        </div>
        <div className="interiorConstruction-content fade-up-element">
          <Image width={700} height={400} quality={100} src="/imagesN/community.jpg" alt="table" />
        </div>
      </div>
      <div className="interiorConstruction_b-foot">
        <div className="interiorConstruction-title">
          <h3>
            <span>{`Host a Party or Group Event`}</span>
          </h3>
          <h4>
            <span>{`Over the years our facility has become  a favorite place  to enjoy memorable birthday party, field trip, and team building experiences. Some come back every year!`}</span>
          </h4>
        </div>
        <div className="interiorConstruction-content fade-up-element">
          <p>{`Let's climb and play, Happy birthday Sclimb`}</p>
          <div className="interiorConstruction-block">
            <Image width={574} height={472} quality={100} src="/imagesN/event.jpg" alt="table" />
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default InteriorConstruction;
