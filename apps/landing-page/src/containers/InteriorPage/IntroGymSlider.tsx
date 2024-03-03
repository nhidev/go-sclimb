'use client';

import Image from 'next/image';
import { memo } from 'react';
import { Autoplay, Keyboard, Navigation, Pagination, Scrollbar, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/scrollbar';

import { Default, Mobile } from '@/components';
import styles from './introGymSlider.module.scss';

const data = [
  {
    id: 1,
    image: '/imagesN/slide-01.jpg',
  },
  {
    id: 2,
    image: '/imagesN/slide-02.jpg',
  },
  {
    id: 3,
    image: '/imagesN/slide-03.jpg',
  },
  {
    id: 4,
    image: '/imagesN/slide-04.jpg',
  }
];

const IntroGymSlider = memo(() => {
  return (
    <section className={styles.IntroGymSlider}>
      <div className="introGymSlider_b-container">
        <div className="introGymSlider_b-head">
        <h2>OUR COMMUNITY</h2>
          <p>Whether you are an experienced climber or brand-new to Sclimb Gym,
there’s never been a better time to pay us a visit.
It seriously might change your life, It has for many people!</p>
        </div>

        <Default>
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={20000}
            loop={true}
            modules={[Virtual, Autoplay]}
            className={styles.IntroGymSliderSliderBg}
          >
            {data.map(item => (
              <SwiperSlide key={item.id}>
                <Image width={660} height={540} quality={100} src={item.image} alt="office" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Default>

        <div className="introGymSlider_b-body">
          <div className="introGymSlider_b-left">
            <Default>
              <div className="introGymSlider-desc">
                <h4>Our Address</h4>
                <p>Floor 2 - 110 Tran Nao, An Khanh, Thu Đuc, HCM</p>
                <h4>Hours of Operation</h4>
                <p>Monday to Sunday 10apm - 10pm</p>
                <h4>Any Questions?</h4>
                <p><a href="mailto:gosclimb@gmail.com">gosclimb@gmail.com</a></p>
                <p>0335.13.23.03 (Vũ)</p>
                <h4>Visit us on</h4>
                <div>
                  <a href="https://www.instagram.com/gosclimb/" target="_blank"><Image width={40} height={40} quality={100} src='./iconsN/icon-instagram.svg' alt="instagram" /></a>
                  <a href="https://www.facebook.com/gosclimb" target="_blank"><Image width={40} height={40} quality={100} src='./iconsN/icon-facebook.svg' alt="instagram" /></a>
                  <a href="https://www.tiktok.com/@gosclimb" target="_blank"><Image width={40} height={40} quality={100} src='./iconsN/icon-tiktok.svg' alt="instagram" /></a>
                </div>
              </div>
            </Default>
          </div>

          <div className="introGymSlider_b-right">
            <div className="introGymSlider-slider-wrapper">
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                centeredSlides={false}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  769: {
                    spaceBetween: 0,
                    slidesPerView: 1,
                  },
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                scrollbar={true}
                navigation={true}
                pagination={{
                  clickable: true,
                  type: 'fraction',
                }}
                loop
                modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                className="introGymSlider-slider"
              >
                {data.map(item => (
                  <SwiperSlide key={item.id}>
                    <Image width={660} height={540} quality={100} src={item.image} alt="office" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <Mobile>
            <div className="introGymSlider-desc">
              <h4>Our Address</h4>
              <p>Floor 2 - 110 Tran Nao, An Khanh, Thu Đuc, HCM</p>
              <h4>Hours of Operation</h4>
              <p>Monday to Sunday 10apm - 10pm</p>
              <h4>Any Questions?</h4>
              <p><a href="mailto:gosclimb@gmail.com">gosclimb@gmail.com</a></p>
              <p>0335.13.23.03 (Vũ)</p>
              <h4>Visit us on</h4>
              <div>
                <a href="https://www.instagram.com/gosclimb/" target="_blank"><Image width={40} height={40} quality={100} src='./iconsN/icon-instagram.svg' alt="instagram" /></a>
                <a href="https://www.facebook.com/gosclimb" target="_blank"><Image width={40} height={40} quality={100} src='./iconsN/icon-facebook.svg' alt="instagram" /></a>
                <a href="https://www.tiktok.com/@gosclimb" target="_blank"><Image width={40} height={40} quality={100} src='./iconsN/icon-tiktok.svg' alt="instagram" /></a>
              </div>
            </div>
          </Mobile>
        </div>
      </div>
    </section>
  );
});

export default IntroGymSlider;
