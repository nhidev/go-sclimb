import Image from 'next/image';
import React from 'react';
import {
  SavingBlock
} from '@/components';
import styles from './timeSpentBlock.module.scss';
import { Default, Mobile } from '../MediaQuery';

export default function TimeSpentBlock({ className = '' }: TimeSpentBlockProps) {
  return (
    <div className={`${styles.TimeSpentBlock} ${className}`}>
      <div className="timeSpentBlock_b-head">
        <h3>SO… WHAT’S IN A MEMBERSHIP?</h3>
      </div>
      <div className="timeSpentBlock_b-body">
        <div className="timeSpentBlock_b-top">
          <Image src='/iconsN/infinity.svg' alt="quote icon" height={100} width={100} />
          <p>Unlimited Climbing</p>
        </div>
        <div className="timeSpentBlock_b-top">
          <Image src='/iconsN/climbing-shoe.svg' alt="quote icon" height={100} width={100} />
          <p>Exclusive Gear Discount</p>
        </div>
          <div className="timeSpentBlock_b-top">
          <Image src='/iconsN/group-people.svg' alt="quote icon" height={100} width={100} />
          <p>Free Guest Passes</p>
        </div> 
        <div className="timeSpentBlock_b-top">
          <Image src='/iconsN/calendar.svg' alt="quote icon" height={100} width={100} />
          <p>Free & Discounted Classes & Events</p>
        </div>
      </div>
      <div className="timeSpentBlock_b-bot">
      <p>Membership offers the best value and most perks, but we also offer day passes so you can come see our gyms and get to know us before joining.</p>
    </div>
    </div>
  );
}

interface TimeSpentBlockProps {
  className?: string;
}
