'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './interior2ndSection.module.scss';

const data = [
  {
    id: 1,
    title: 'CHECK-IN',
    icon: '/iconsN/check-in.webp',
    description: 'All climbers and observers must check in at the desk before proceeding into the climbing area.',
  },
  {
    id: 2,
    title: 'CLIMBING SHOES REQUIRED',
    icon: '/iconsN/climbing-shoes.webp',
    description: 'Climbing shoes are required when climbing, \n  no street shoes or bare feet.\nShoe rentals are available, we recommend bringing a thin pair of socks if renting. \n Do not wear climbing shoes in the washroom.',
  },
  {
    id: 3,
    title: 'BE AWARE',
    icon: '/iconsN/be-aware.webp',
    description: 'Do no sit, stand, walk or climb below another climber. \n Do not climb over or stand on top of the wall.',
  },
  {
    id: 4,
    title: 'RESPECT',
    icon: '/iconsN/respect.webp',
    description: 'All OTR participants are expected to respect other individuals and conduct themselves in good order. \n  Persons deemed by OTR staff to be behaving in an unsafe or disorderly manner will be asked to leave the facility',
  },
];

const Interior2ndSection = memo(({ className = '' }: Interior2ndSectionProps) => (
  <section className={`${styles.Interior2ndSection} ${className}`}>
    <div className="interior2ndSection_b-container">
      <div className="interior2ndSection_b-head">
        <h2>GYM ETIQUETTE </h2>
      </div>
      <div className="interior2ndSection_b-body">
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <div className="interior2ndSection-title">
                <Image width={200} height={200} src={item.icon} priority alt={item.title} />
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

interface Interior2ndSectionProps {
  className?: string;
}

export default Interior2ndSection;
