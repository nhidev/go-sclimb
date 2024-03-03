import Image from 'next/image';
import React from 'react';

import styles from './educationBlock.module.scss';

export default function EducationBlock({className = ''}: EducationBlockProps) {
  return (
    <div className={`${styles.EducationBlock} ${className}`}>
     <Image width={700} height={400} quality={100} src="/imagesN/poster-1.jpg" alt="table" />
    </div>
  );
}

interface EducationBlockProps {
  className?: string;
}
