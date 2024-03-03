'use client'
import { Table } from 'antd';
import React from 'react';

import type { ColumnsType } from 'antd/es/table';
import { Default, Mobile } from '@/components';

import styles from './membershipOptiosBlock.module.scss';

export default function MembershipOptiosBlock({ className = '', title, subTitle, columns, data, subTitleMobile, hasNote }: MembershipOptiosBlockProps) {
  return (
    <div className={`${styles.MembershipOptiosBlock} ${className}`}>
      <div className="membershipOptiosBlock_b-head">
        <h3>{title}</h3>
        <Default>
          <p>{subTitle} </p>
        </Default>
        <Mobile>
          <p>{subTitleMobile} </p>
        </Mobile>
      </div>
      <div className="membershipOptiosBlock_b-body">
        <Table columns={columns} dataSource={data} pagination={false} />   
        <div className="membershipOptiosBlock_b-sub">* Unlimited climbing access.</div>
        <div className="membershipOptiosBlock_b-sub">* All rentals free for members!</div>
        <div className="membershipOptiosBlock_b-sub">* Prepaid memberships are valid from the day purchased and have no initiation fee. All members are entitled to freeze their membership for up to two months during a 12-month period</div>
      </div> 
    </div>
  );
}

interface MembershipOptiosBlockProps {
  className?: string;
  title: string;
  subTitle: string;
  columns: ColumnsType<DataType>;
  data: DataType[];
  subTitleMobile?: string;
  hasNote?: boolean;
}

interface DataType {
  key: string;
  type: string;
  adult: string;
  young: string;
}
