
import React from 'react';

import { MembershipOptiosBlock } from '@/components';
import { MEMBERSHIP_OPTIONS, DATA_MEMBERSHIP, CLASSES_OPTIONS, DATA_CLASSES } from '@/utils/constants';
import styles from './savingBlock.module.scss';


export default function SavingBlock({ className = '', isPricingOptions = false }: SavingBlockProps) {
  return (
    <div className={`${styles.SavingBlock} ${className}`}>
      <div className="savingBlock_b-head">
        <h3>{isPricingOptions ? 'Pricing options' : 'Class options'} </h3>
      </div>
      <div className="savingBlock_b-body">
        <MembershipOptiosBlock
          columns={isPricingOptions ? MEMBERSHIP_OPTIONS : CLASSES_OPTIONS}
          data={isPricingOptions ? DATA_MEMBERSHIP : DATA_CLASSES}
          className="pricingAndMembershipSectionMiddle"
          hasNote={isPricingOptions ? true : false}
        />
         {isPricingOptions ? <>
          <div className="membershipOptiosBlock_b-sub">* Punch passes can be shared between guests.</div>
          <div className="membershipOptiosBlock_b-sub">* Unlimited climbing access.</div>
        </> : <>
          <div className="membershipOptiosBlock_b-sub">* Unlimited climbing access.</div>
          <div className="membershipOptiosBlock_b-sub">* All rentals free.</div>
        </>}
      </div>
    </div>
  );
}

interface SavingBlockProps {
  className?: string;
  isPricingOptions?: boolean;
  title?: string;
  subTitle?: string;
}
