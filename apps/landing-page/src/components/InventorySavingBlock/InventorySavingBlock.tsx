import React from 'react';

import styles from './inventorySavingBlock.module.scss';

export default function InventorySavingBlock({
  className = '',
  items,
  subTitle
}: InventorySavingBlockProps) {
  return (
    <div className={`${styles.InventorySavingBlock} ${className}`}>
      <div className="inventorySavingBlock_b-body">
        {subTitle && <h4>{subTitle}</h4>}
        <ul>
          {items.map(item => (
            <li key={item.name}>
              <p>
                {item.name}
                <span>{item.price} VND</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface ItemProps {
  name: string;
  price: string;
}

interface InventorySavingBlockProps {
  className?: string;
  subTitle?: string;
  items: Array<ItemProps>;
}
