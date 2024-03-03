import React from 'react';
import Image from 'next/image';
import styles from './schechuleBlock.module.scss';


const timeData = [
  {
    title: '월',
    from: {
      h: '07',
      m: '30',
      tail: 'AM',
    },
    to: {
      h: '08',
      m: '30',
      tail: 'PM',
    },
  },
  {
    title: '화',
    from: {
      h: '09',
      m: '30',
      tail: 'PM',
    },
    to: {
      h: '11',
      m: '30',
      tail: 'PM',
    },
  },
  {
    title: '수',
    from: {
      h: '09',
      m: '30',
      tail: 'AM',
    },
    to: {
      h: '08',
      m: '30',
      tail: 'PM',
    },
  },
  {
    title: '목',
    from: {
      h: '09',
      m: '30',
      tail: 'AM',
    },
    to: {
      h: '11',
      m: '30',
      tail: 'PM',
    },
  },
];

export default function SchechuleBlock({className = ''}: SchechuleBlockProps) {
  return (
    <div className={`${styles.SchechuleBlock} ${className}`}>
      <div className="schechuleBlock_b-head">
        <h3>Host a Party or Group Event</h3>
        <p>Our parties include everything you need to throw the party of a lifetime, at a price that you will love.</p>
      </div>
      <Image width={700} height={400} quality={100} src="/imagesN/event.jpg" alt="table" />
    </div>
  );
}

interface SchechuleBlockProps {
  className?: string;
}
