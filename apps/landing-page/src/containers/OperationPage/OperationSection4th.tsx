'use client';

import { memo } from 'react';

import { CleanBlock, EducationBlock, MessageTooltip, RequestBlock, SchechuleBlock } from '@/components';
import styles from './operationSection4th.module.scss';

const messages = [
  {
    placement: 'right',
    content: 'Cố lên, allez! 👏',
  },
  {
    placement: 'left',
    content: 'がんば (Ganba)! 🥰',
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
    content: 'Cha cha cha! Vũ💪',
  },
  {
    placement: 'right',
    content: 'Yep, yep, yep, nice, nice, yep ...🤜🤛',
  },
];

const block1Data: any = {
  title: '메세지 보내기',
  subTitle: '리퀘스트 타입을 선택한 후 요청 내용을 작성해주세요 \n작성이 완료된 메세지는 어드민에게 전송됩니다',
  detailTitle: '내용',
  detailDescription: '요청사항을 입력해주세요',
  dropdownTitle: '리퀘스트 타입',
  dropdownText: '오피스 클리닝',
  sub: '요청 사항 메시지 발송',
};
const block2Data: any = {
  title: '처리 중인 요청사항',
  subTitle: 'Request in Progress',
  items: [
    {
      title: '오피스 클리닝',
      value: 1,
    },
    {
      title: 'Q&A',
      value: 8,
    },
    {
      title: '긴급',
      value: 5,
      highlight: true,
    },
    {
      title: '불만사항',
      value: 0,
    },
  ],
  sub: '작업 과정은 대시보드에서 확인',
};

const OperationSection4th = memo(() => (
  <section className={styles.OperationSection4th} id="office-cleaning">
    <div className={styles.OperationSection4thTop}>
      <div className="operationSection4thTop_container">
        <div className="operationSection4thTop_b-head">
          <h2>CLIMBING, MOVEMENT, AND COMMUNITY</h2>
          <h2>Drop by, have fun and join the SCLIMB climbing community.</h2>
        </div>
        <div className="operationSection4thTop_b-body">
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
    <div className={styles.OperationSection4thMiddle}>
      <div className="operationSection4thMiddle_container">
        <div className="operationSection4thMiddle_b-left">
          <SchechuleBlock className="fade-up-element" />
        </div>
        <div className="operationSection4thMiddle_b-right">
          <CleanBlock className="operationSection4thMiddle-cleanBlock fade-up-element" />
          <EducationBlock className="fade-up-element" />
        </div>
      </div>
    </div>
    <div className={`${styles.OperationSection4thFoot} fade-up-element`}>
      <RequestBlock
        title={`담당자 부재, 연락 두절, 늦은 피드백 등으로 \n마음고생하던 추가 요청도 정말 쉬워집니다.`}
        titleMobile={`담당자 부재, 연락 두절, \n늦은 피드백 등으로 \n마음고생하던 추가 요청도 \n정말 쉬워집니다.`}
        block1={block1Data}
        block2={block2Data}
      />
    </div>
  </section>
));

export default OperationSection4th;
