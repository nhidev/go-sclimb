'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './interiorDocument.module.scss';

const InteriorDocument = memo(({ className = '' }: InteriorDocumentProps) => (
  <section className={`${styles.InteriorDocument} ${className}`}>
    <div className="interiorDocument_b-container">


      <div className="interiorDocument_b-body">
        <div className="interiorDocument-title">
          <h3>
            <span>{`There’s a First Time for Everything!`}</span>
          </h3>
          <h4>
            <span>{`So, this is your first-time venturing into the world of indoor rock climbing? Don’t worry we’ll be gentle. It’s not hard to learn to climb, but it’s important that you learn from an experienced instructor all of the necessary information.`}</span>
          </h4>
        </div>
        <div className="interiorDocument-content fade-up-element">
          <div className="interiorDocument-block">
            <Image width={600} height={500} quality={100} src="/imagesN/first-time.jpg" alt="document" />

          </div>
        </div>
      </div>
    </div>
  </section>
));

interface InteriorDocumentProps {
  className?: string;
}

export default InteriorDocument;
