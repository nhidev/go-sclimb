'use client';

import Image from 'next/image';
import { memo } from 'react';

import styles from './operationsManagementSection.module.scss';

const data = [
  {
    id: 1,
    title: 'CLIMBING GYM',
    icon: '/iconsN/check-in.webp',
    description: 'All climbers and observers must check in at the desk before proceeding into the climbing area.',
  },
  {
    id: 2,
    title: 'CLASSES & PRIVATE COACHING',
    icon: '/iconsN/climbing-shoes.webp',
    description: 'Our instructors know their stuff and care deeply about your experience. We do our best to ensure that you have an intense, fun and challenging workout every time.',
  },
  {
    id: 3,
    title: 'BE PARTIES & GROUP',
    icon: '/iconsN/be-aware.webp',
    description: 'Our parties include everything you need to throw the party of a lifetime, at a price that you will love.',
  },
  // {
  //   id: 4,
  //   title: 'RESPECT',
  //   icon: '/iconsN/respect.webp',
  //   description: 'All OTR participants are expected to respect other individuals and conduct themselves in good order. \n  Persons deemed by OTR staff to be behaving in an unsafe or disorderly manner will be asked to leave the facility',
  // },
];
const OperationsManagementSection = memo(({ className = '' }: OperationsManagementSectionProps) => (
  <section className={`${styles.Interior2ndSection} ${className}`}>
    <div className="interior2ndSection_b-container">
      <div className="interior2ndSection_b-head">
        <h2>FEATURED SERVICES</h2>
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

interface OperationsManagementSectionProps {
  className?: string;
}


export default OperationsManagementSection;
