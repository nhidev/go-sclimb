import React from 'react';

import Image from 'next/image';
import styles from './cleanBlock.module.scss';

export default function CleanBlock({ className = '' }: CleanBlockProps) {
  return (
    <div className={`${styles.CleanBlock} ${className}`}>
      <div className="cleanBlock_b-head">
        <h3>Join the Community</h3>
        <p>Want to climb more often? You won't want to keep paying for Day Passes - consider a Membership or Punch Card and learn which is right for you.</p>
      </div>
      <Image width={667} height={500} quality={100} src="/imagesN/community.jpg" alt="table" />
    </div>
  );
}

interface CleanBlockProps {
  className?: string;
}
