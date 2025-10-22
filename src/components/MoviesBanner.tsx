'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/custom.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';


export default function MoviesBanner() {

  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      } as React.CSSProperties}
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return '<img alt="Xem Phim Trò Chơi Ảo Giác: Ares Vietsub HD Online - Rophim" loading="lazy" src="https://static.nutscdn.com/vimg/150-0/3ae2a6a609817b5561e3585a5f9db0e0.webp" class="' + className + '">';
        },
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg"
        style={{
          backgroundImage:
            'url(https://static.nutscdn.com/vimg/1920-0/87be50dfeaea826bd1c9f2a0811adff0.webp)',
        }}
        data-swiper-parallax="-23%"
      ></div>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          Slide 1
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          Slide 2
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          Slide 3
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
