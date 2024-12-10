import Image from 'next/image';
import React from 'react';

import styles from './educationBlock.module.scss';

export default function EducationBlock({className = ''}: EducationBlockProps) {
  return (
    <div className={`${styles.EducationBlock} ${className}`}>
     <Image width={677} height={677} quality={100} src="/imagesN/poster-1.png" alt="table" />
    </div>
  );
}

interface EducationBlockProps {
  className?: string;
}
