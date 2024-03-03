import Image from 'next/image';
import React from 'react';

import styles from './savingBlock.module.scss';

const data = [
  {
    title: 'DAY PASS',
    adult: '165.000',
    young: '110.000',
    note: '1 day of unlimited access.'
  },
  {
    title: '10 PUNCH PASSES',
    adult: '145.000',
    young: '165.000',
    note: '10 entries for the price of 9. Valid for 12 months.',
    note2: 'Punch passes can be shared between guests.',
  }
];

export default function SavingBlock({ className = '', subTitle }: SavingBlockProps) {
  return (
    <div className={`${styles.SavingBlock} ${className}`}>
      <div className="savingBlock_b-head">
        <h3>
        Casual Entry
        </h3>
        {/* <p>Enjoy full access to our facility for the day. Need gear? We’ve got you covered.</p> */}
      </div>
      <div className="savingBlock_b-body">
        <ul>
          {data.map(item => (
            <li key={item.title}>
              <div>
                <p>{item.title}</p>
                <p>ADULT <span>{item.adult} VND</span></p>
                <p>KID/YOUNG <span>{item.young} VND</span></p>
                <div className="savingBlock-sub">* {item.note}</div>
                {item.note2 && <div className="savingBlock-sub">* {item.note2}</div>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface SavingBlockProps {
  className?: string;
  subTitle?: string;
}
