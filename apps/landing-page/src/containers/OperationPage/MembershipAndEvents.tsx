'use client';

import { memo } from 'react';

import { CleanBlock, EducationBlock, MessageTooltip, RequestBlock, SchechuleBlock } from '@/components';
import styles from './membershipAndEvents.module.scss';

const messages = [
  {
    placement: 'right',
    content: 'Cố lên, allez! 👏',
  },
  {
    placement: 'left',
    content: 'がんばって (Ganbatte)  🥰',
  },
  {
    placement: 'left',
    content: 'Venga, VENNGAAAAAAA! 😍',
  },
  {
    placement: 'right',
    content: 'Kom, KOM !🫰',
  },
  {
    placement: 'right',
    content: 'Su su!!! 💪',
  },
  {
    placement: 'right',
    content: 'Yep, yep, yep, nice, yep ...🤜🤛',
  },
];

const MembershipAndEvents = memo(() => (
  <section className={styles.MembershipAndEvents} id="office-cleaning">
    <div className={styles.MembershipAndEventsTop}>
      <div className="membershipAndEventsTop_container">
        <div className="membershipAndEventsTop_b-head">
          <h2>CLIMBING, MOVEMENT, AND COMMUNITY</h2>
          <h2>Drop by, have fun and join the SCLIMB climbing community.</h2>
        </div>
        <div className="membershipAndEventsTop_b-body">
          {messages.map((item: any, index) => (
            <MessageTooltip placement={item.placement} key={item.content + index} className="tooltip-item">
              {item.content}
            </MessageTooltip>
          ))}
        </div>
      </div>
    </div>

    <div className={styles.Line}>
      <i />
    </div>
    <div className={styles.MembershipAndEventsMiddle}>
      <div className="membershipAndEventsMiddle_container">
        <div className="membershipAndEventsMiddle_b-left">
          <SchechuleBlock className="fade-up-element" />
        </div>
        <div className="membershipAndEventsMiddle_b-right">
          <CleanBlock className="membershipAndEventsMiddle-cleanBlock fade-up-element" />
          <EducationBlock className="fade-up-element" />
        </div>
      </div>
    </div>

  </section>
));

export default MembershipAndEvents;
