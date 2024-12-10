'use client'
import { Table } from 'antd';
import React from 'react';

import type { ColumnsType } from 'antd/es/table';
import styles from './membershipOptiosBlock.module.scss';

export default function MembershipOptiosBlock({ className = '', columns, data, subTitleMobile, hasNote }: MembershipOptiosBlockProps) {
  return (
    <div className={`${styles.MembershipOptiosBlock} ${className}`}>
      <div className="membershipOptiosBlock_b-body">
        <Table columns={columns} dataSource={data} pagination={false} />

      </div>
    </div>
  );
}

interface MembershipOptiosBlockProps {
  className?: string;
  columns: ColumnsType<DataType>;
  data: DataType[];
  subTitleMobile?: string;
  hasNote?: boolean;
}

interface DataType {
  key: string;
  type: string;
  adult: string;
  student?: string;
  kid: string;
}
