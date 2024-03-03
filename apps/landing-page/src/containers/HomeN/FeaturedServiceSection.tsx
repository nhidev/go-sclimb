'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './featuredServiceSection.module.scss';

const data = [
  {
    id: 1,
    title: 'BOULDERING',
    icon: '/imagesN/climbing-gym.jpeg',
    description: 'Discover our climbing routes for all levels! All you need is a can-do attitude and comfortable clothing; we’ve got the rest!',
  },
  {
    id: 2,
    title: 'CLASSES/WORKSHOP',
    icon: '/imagesN/classes-workshop.jpeg',
    description: 'Our instructors know their stuff and care deeply about your experience. We do our best to ensure that you have an intense, fun and challenging workout every time.',
  },
  {
    id: 3,
    title: 'COFFEE/BEER',
    icon: '/imagesN/drink.png',
    description: 'Only the finest blend of coffee and the sweetest drops. Climbing isn’t our only passion',
  }
];
const FeaturedServiceSection = memo(({ className = '' }: FeaturedServiceSectionProps) => (
  <section className={`${styles.GridCardSection} ${className}`}>
    <div className="gridCardSection_b-container">
      <div className="gridCardSection_b-head">
        {/* <h2>FEATURED SERVICES</h2> */}
        <h2>WHAT'S ON OFFER</h2>
      </div>
      <div className="gridCardSection_b-body">
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <div className="gridCardSection-title">
                <Image width={300} height={300} src={item.icon} priority alt={item.title} />
                <h4>{item.title}</h4>
              </div>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
));

interface FeaturedServiceSectionProps {
  className?: string;
}


export default FeaturedServiceSection;
