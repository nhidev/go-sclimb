'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './interiorConstruction.module.scss';

const InteriorConstruction = memo(() => (
  <section className={styles.InteriorConstruction}>
    <div className="interiorConstruction_b-container">
      <div className="interiorConstruction_b-body">
        <div className="interiorConstruction-title">
          <h3>Get Ready for your climb</h3>
          <h4>Here are some pointers to make your first visit a little smoother. Have fun, and climb safe!</h4>
        </div>
        <div className="interiorConstruction-content fade-up-element">
          <div>
            <h2>WHAT IS BOULDERING?</h2>
            <p>It’s kinda like solving a mini climbing puzzle, usually about 5 meters tall. If you fall, you'll land on a big foam mattress. No ropes, harnesses, or partner needed!</p>
            <h2>SAFETY TIPS</h2>
            <ul>
              <li> Look out for other climbers!</li>
              <li> Before jumping off, make sure your landing zone is clear.</li>
              <li>Land on your feet, bend your knees and roll onto your back to disperse the impact safely</li>
            </ul>
            <h2>WHAT TO BRING</h2>
            <p>Comfortable sports attire</p>
            <p>Socks, if you're renting shoes</p>
            <p>Water bottle (we have a water dispenser)</p>
        </div>
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
