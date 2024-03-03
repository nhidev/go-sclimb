import { memo } from 'react';

import {
  CheckingBlock,
  Default,
  InventorySavingBlock,
  MembershipOptiosBlock,
  Mobile,
  SavingBlock,
  TimeSpentBlock,
} from '@/components';
import { MEMBERSHIP_OPTIONS, DATA_MEMBERSHIP } from '@/utils/constants';
import styles from './pricingAndMembershipSection.module.scss';

const rentailsData = [
  {
    name: 'SHOES',
    price: '25.000',
  },
  {
    name: 'CHALK BAG',
    price: '30.000',
  },
];
const climbingStuffsData= [
  {
    name: 'SCLIMB T-shirt (Adult)',
    price: '250.000',
  },
  {
    name: 'SCLIMB T-shirt (Kid)',
    price: '210.000',
  },
  {
    name: 'Loose Chalk Small',
    price: '80.000',
  },
  {
    name: 'Bolt Chalk Bag',
    price: '415.000',
  },
  {
    name: 'Hanger Chalk Pot',
    price: '862.000',
  },
];

const PricingAndMembershipSection = memo(() => {
  return (
      <section className={styles.PricingAndMembershipSection} id="MRO-supplies-management">
        <div className={styles.PricingAndMembershipSectionTop}>
          <div className="pricingAndMembershipSectionTop_container">
            <div className="pricingAndMembershipSectionTop_b-body">
              <TimeSpentBlock className="fade-up-element"/>
            </div>
          </div>
        </div>
        <div className={styles.Line}>
          <i />
        </div>
        <div className={styles.PricingAndMembershipSectionMiddle}>
          <div className="pricingAndMembershipSectionMiddle_container">
            <div className="pricingAndMembershipSectionMiddle_b-left">
              <SavingBlock className="pricingAndMembershipSectionhMiddle-savingBlock fade-up-element" />
              {/* <InventorySavingBlock
                  title={`RENTALS & CLIMBING STUFFS`}
                  firstItems={rentailsData}
                  secondItems={climbingStuffsData}
                  className="fade-up-element show-desktop"
                /> */}
            </div>
            <div className="pricingAndMembershipSectionMiddle_b-right">
              <MembershipOptiosBlock
                title={`Membership Options`}
                subTitle={'Climbing more regularly? Memberships are a great way to save! '}
                subTitleMobile={'Climbing more regularly? Memberships are a great way to save! '}
                columns={MEMBERSHIP_OPTIONS}
                data={DATA_MEMBERSHIP}
                className="pricingAndMembershipSectionMiddle fade-up-element"
              />
              
              {/* <InventorySavingBlock
                  title={`재고 관리 시간 \n80% 절감`}
                  firstItems={rentailsData}
                  secondItems={climbingStuffsData}
                  className="fade-up-element show-mobile"
                /> */}
            </div>
          </div>
        </div>
        <div className={styles.PricingAndMembershipSectionhFoot}>
          <CheckingBlock className="fade-up-element"/>
        </div>
      </section>
  );
});

export default PricingAndMembershipSection;
