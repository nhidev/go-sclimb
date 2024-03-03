'use client';

import Image from 'next/image';
import { memo } from 'react';

import { Default } from '@/components';
import styles from './climbingGrades.module.scss';

const ClimbingGrades = memo(() => (
  <section className={styles.ClimbingGrades}>
    <div className="climbingGrades_b-container">
      <div className="climbingGrades_b-body">
        <div className="climbingGrades-title">
          <h3>
            <span>{`Boulder Grading Scale`}</span>
          </h3>
          <h4>
            <Default>
              <span>{`Boulders are set with color-coded tags that represent the difficulty of the grade ranging from green to black.\nGrades form easiest to challengling are green, blue, yellow, red, purple, and black.`}</span>
              {/* <span>{`Classes are the best way to jump-start your progress.`}</span> */}
            </Default>

          </h4>
        </div>
        <div className="climbingGrades-content fade-up-element">
          <Image width={600} height={400} src="/imagesN/grading-scale.png" priority alt="Boulder grading scale" />

        </div>
      </div>
    </div>
  </section>
));

export default ClimbingGrades;
