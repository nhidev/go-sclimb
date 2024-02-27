'use client';

import Image from 'next/image';
import React from 'react';

import styles from './pieChartBlock.module.scss';

const PieChartBlock = ({ title, content, className = '', image }: PieChartBlockProps, key: any) => (
  <div className={`${styles.PieChartBlockWrapper}  ${className}`} key={key}>
    <p className="pie_chart-title">{title}</p>
    <div className={`${image ? 'has-chart-image' : ''} pie_chart`}>
      {image && (
        <Image
          className="pie-chart-img"
          quality={100}
          width={92}
          height={92}
          src={`/imagesN/${image}`}
          alt="pie chart"
        />
      )}
      <p>{content}</p>
    </div>

  </div>
);



interface PieChartBlockProps {
  title: string;
  content: string;
  className?: string;
  image?: string;
}

export default PieChartBlock;
