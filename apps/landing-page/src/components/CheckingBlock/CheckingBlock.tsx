import React from 'react';
import {InventorySavingBlock} from '@/components';
import { GraphBlock } from '../GraphBlock';
import styles from './checkingBlock.module.scss';

const pieData: any = [
  {
    key: 1,
    type: '22%',
    value: 22,
    color: '#f6871f',
  },
  {
    key: 2,
    type: '20%',
    value: 20,
    color: '#FFB25C',
  },
  {
    key: 3,
    type: '20% ',
    value: 20,
    color: '#FFE8CE',
  },
  {
    key: 4,

    type: '13%',
    value: 13,
    color: '#FFF7EF',
  },
  {
    key: 5,
    type: '13% ',
    value: 13,
    color: '#FFF',
  },
  {
    key: 6,
    type: '12%',
    value: 12,
    color: '#DAB49D',
  },
];

const rentailsData = [
  {
    name: 'SHOES',
    price: '30.000',
  },
  {
    name: 'HARNESS',
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
export default function CheckingBlock({ className = '' }: CheckingBlockProps) {
  return (
    <div className={`${styles.CheckingBlock} ${className}`}>
      <div className="checkingBlock_b-head">
        <h3>{`RENTAILS & CLIMBING STUFFS`}</h3>
      </div>
      <div className="checkingBlock_b-body">
      <InventorySavingBlock
      subTitle="RENTAILS"
        items={rentailsData}
        className="fade-up-element show-desktop"
        /> 
         <InventorySavingBlock
         subTitle="CLIMBING STUFFS"
        items={climbingStuffsData}
        className="fade-up-element show-desktop"
        />  
      </div>
   
    </div>
  );
}

interface CheckingBlockProps {
  className?: string;
}
