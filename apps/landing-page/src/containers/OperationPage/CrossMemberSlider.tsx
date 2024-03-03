'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { memo, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { MEDIA_SIZE } from '@/utils/constants';
import styles from './crossMemberSlider.module.scss';

const slider1Data = [
  {
    title: '',
    bgImage: '/imagesN/cross-sclimb.png',
    items: [],
  },
  {
    title: 'Unlimited access both gyms',
    bgImage: '',
    items: [
      {
        text: 'More routes',
        bgColor: 'var(--ffddc-7)',
      },
      {
        text: 'More mates',
        bgColor: 'var(--ffc-98-d)',
      },
      {
        text: 'More fun',
        bgColor: 'var(--ffe-8-ce)',
      }
    ]
  },
  {
    title: '',
    bgImage: '/imagesN/cross-boulderbox.png',
    items: [],
  },
];

const CrossMemberSlider = memo(() => {
  const isMobile = useMediaQuery({ maxWidth: MEDIA_SIZE.tablet - 1 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let xBox1To = 340;
    let xBox3To = -340;
    let yBox1To = 0;
    let yBox3To = 0;

    if (isMobile) {
      xBox1To = 0;
      xBox3To = 0;
      yBox1To = 153;
      yBox3To = -153;
    }

    const tl = gsap
      .timeline()
      .fromTo(
        '.box-1',
        {
          ease: 'power1.inOut',
          scale: 1,
          opacity: 1,
        },
        {
          scale: 0.6,
          opacity: 0,
          x: xBox1To,
          y: yBox1To,
          force3D: true,
          stagger: { amount: 1 },
          ease: 'power1.inOut',
        },
        0
      )
      .fromTo(
        '.box-3',
        {
          ease: 'power1.inOut',
          scale: 1,
          opacity: 1,
        },
        {
          scale: 0.6,
          opacity: 0,
          x: xBox3To,
          y: yBox3To,
          force3D: true,
          stagger: { amount: 1 },
          ease: 'power1.inOut',
        },
        0
      )
      .fromTo(
        '.box',
        {
          ease: 'power1.inOut',
          scale: 1,
          opacity: 1,
        },
        { scale: 0.6, opacity: 0, force3D: true, stagger: { amount: 1 }, ease: 'power1.inOut' },
        0
      )

      .fromTo(
        '.book',
        { scale: 0.6, opacity: 0, ease: 'power1.inOut' },
        { scale: 1, opacity: 1, force3D: true, stagger: { amount: 1 }, ease: 'power1.inOut' },
        0
      );

    let container: Element | null = document.querySelector('.slider-container');
    if (container) {
      ScrollTrigger.create({
        trigger: '.slider-container',
        animation: tl,
        pin: true,
        start: '60% center',
        end: 'bottom bottom',
        scrub: 1, // I like the 3 sec delay, set to true for exact anime on scroll
        // markers: true, // anable this to debug start/end/scroller-start/scroller-end
      });
    }
  }, []);

  return (
    <section className={`${styles.CrossMemberSlider} slider-container`}>
      <div className="swiper-container">
        <div className="swiper_b-head">
          <h2>CROSS MEMBER</h2>
          <h2>Be a part of Sclimb and Boulder Box</h2>
        </div>
        <div className="swiper_b-body">
          <div className={`${styles.SingleBlockWrapper} o-slide threeBLock `}>
            {slider1Data.map((slideItem, index) => (
              <div
                className={`${styles.SingleBlock} ${index === 1 ? 'box' : `box-${index + 1}`}`}
                key={index}
              >
                <div className="block_b-container">
                  <p className="block_b-head">{slideItem.title}</p>
                  <div className="block_b-content">
                    <ul>
                      {slideItem.items.map((labelItem, index) => (
                        <li key={index}>
                          <p style={{ backgroundColor: labelItem.bgColor }}>{labelItem.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {slideItem?.bgImage && <Image width={280} height={280} quality={100} src={slideItem?.bgImage} alt="cross member" />}
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.SingleImage} o-slide book `}>
            <Image width={200} height={200} quality={100} src="/imagesN/cross-member.svg" alt="cross member" />
        
          </div>
        </div>
      </div>
    </section>
  );
});

export default CrossMemberSlider;
