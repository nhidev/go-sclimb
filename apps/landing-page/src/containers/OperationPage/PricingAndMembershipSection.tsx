import { memo } from 'react';

import {
  CheckingBlock,
  SavingBlock,
  TimeSpentBlock,
} from '@/components';
import styles from './pricingAndMembershipSection.module.scss';

const PricingAndMembershipSection = memo(() => {
  return (
    <section className={styles.PricingAndMembershipSection} id="MRO-supplies-management">
      <div className={styles.PricingAndMembershipSectionTop}>
        <div className="pricingAndMembershipSectionTop_container">
          <div className="pricingAndMembershipSectionTop_b-body">
            <TimeSpentBlock className="fade-up-element" />
          </div>
        </div>
      </div>
      <div className={styles.Line}>
        <i />
      </div>
      <div className={styles.PricingAndMembershipSectionMiddle}>
        <div className="pricingAndMembershipSectionMiddle_container">
          <div className="pricingAndMembershipSectionMiddle_b-left">
            <SavingBlock className="pricingBlock fade-up-element" isPricingOptions={true} />
          </div>
          <div className="pricingAndMembershipSectionMiddle_b-right">
            <SavingBlock className="classBlock fade-up-element" />
          </div>
        </div>
      </div>
      <div className={styles.PricingAndMembershipSectionhFoot}>
        <CheckingBlock className="fade-up-element" />
      </div>
    </section>
  );
});

export default PricingAndMembershipSection;
