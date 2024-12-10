import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ROUTE } from '@/utils/constants';
import styles from './footer.module.scss';

const footerData = [

  {
    label: 'Address:',
    value: '86C, Song Hanh Street, An Phu Ward, Thu Duc City, Ho Chi Minh',
  },
  {
    label: 'Email:',
    value: 'gosclimb@gmail.com',
  },
  {
    label: 'Hotline: ',
    value: '0335.13.23.03 (Vũ)',
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="footer_container">
        <div className="footer_logo">
          <Link href={ROUTE.HOME}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '45rem', height: 'auto' }}
              src="/iconsN/logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <ul>
          {footerData.map(item => (
            <li key={item.label}>
              {item.label} <b>{item.value}</b>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
