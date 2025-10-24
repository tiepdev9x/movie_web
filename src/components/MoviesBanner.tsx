'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '../styles/custom.css'

// import required modules
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Autoplay, EffectCube, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'

config.autoAddCss = false

const sliderFakeData = [
  {
    title: 'Hoa hồng có gai',
    subtitle: 'The Roses',
    rating: 7.0,
    age_limit: 'T16',
    year: 2025,
    duration: '1h 45m',
    genres: [
      {
        name: 'Chính Kịch',
        url: '/the-loai/chinh-kich.1gOywM',
      },
      {
        name: 'Chiếu Rạp',
        url: '/the-loai/chieu-rap.3679nF',
      },
      {
        name: 'Tình Cảm',
        url: '/the-loai/tinh-cam.4RxsoY',
      },
      {
        name: 'Gia Đình',
        url: '/the-loai/gia-dinh.8VSWst',
      },
      {
        name: 'Hài',
        url: '/the-loai/hai.W8Dn2a',
      },
      {
        name: 'Lãng Mạn',
        url: '/the-loai/lang-man.tvr5v7',
      },
    ],
    description:
      'Cuộc sống của Ivy và Theo tưởng chừng hoàn hảo: sự nghiệp thành công, hôn nhân hạnh phúc, con cái ngoan ngoãn. Nhưng đằng sau lớp vỏ của một gia đình lý tưởng ấy là cơn bão ngầm đang dần hình thành — khi sự nghiệp của Theo tuột dốc trong khi tham vọng của Ivy thăng hoa, thổi bùng lên ngọn lửa ganh đua và oán giận âm ỉ có thể thiêu rụi tất cả.',
    images: {
      poster: 'https://static.nutscdn.com/vimg/1920-0/0df1796bdad62348364c2f40e94c4ccc.webp',
      background: 'https://static.nutscdn.com/vimg/1920-0/0df1796bdad62348364c2f40e94c4ccc.webp',
      thumbnail: 'https://static.nutscdn.com/vimg/1920-0/0df1796bdad62348364c2f40e94c4ccc.webp',
    },
    links: {
      watch: '/xem-phim/hoa-hong-co-gai.WWGq5zxI',
      details: '/phim/hoa-hong-co-gai.WWGq5zxI',
    },
  },
  {
    title: 'Hoa gai có hong',
    subtitle: 'The Roses',
    rating: 7.0,
    age_limit: 'T16',
    year: 2025,
    duration: '1h 45m',
    genres: [
      {
        name: 'Chính Kịch',
        url: '/the-loai/chinh-kich.1gOywM',
      },
      {
        name: 'Chiếu Rạp',
        url: '/the-loai/chieu-rap.3679nF',
      },
      {
        name: 'Tình Cảm',
        url: '/the-loai/tinh-cam.4RxsoY',
      },
      {
        name: 'Gia Đình',
        url: '/the-loai/gia-dinh.8VSWst',
      },
      {
        name: 'Hài',
        url: '/the-loai/hai.W8Dn2a',
      },
      {
        name: 'Lãng Mạn',
        url: '/the-loai/lang-man.tvr5v7',
      },
    ],
    description:
      'Cuộc sống của Ivy và Theo tưởng chừng hoàn hảo: sự nghiệp thành công, hôn nhân hạnh phúc, con cái ngoan ngoãn. Nhưng đằng sau lớp vỏ của một gia đình lý tưởng ấy là cơn bão ngầm đang dần hình thành — khi sự nghiệp của Theo tuột dốc trong khi tham vọng của Ivy thăng hoa, thổi bùng lên ngọn lửa ganh đua và oán giận âm ỉ có thể thiêu rụi tất cả.',
    images: {
      poster: 'https://static.nutscdn.com/vimg/1920-0/0df1796bdad62348364c2f40e94c4ccc.webp',
      background: 'https://static.nutscdn.com/vimg/1920-0/0df1796bdad62348364c2f40e94c4ccc.webp',
      thumbnail: 'https://static.nutscdn.com/vimg/1920-0/0df1796bdad62348364c2f40e94c4ccc.webp',
    },
    links: {
      watch: '/xem-phim/hoa-hong-co-gai.WWGq5zxI',
      details: '/phim/hoa-hong-co-gai.WWGq5zxI',
    },
  },
  {
    title: 'Hoa hồng có gai',
    subtitle: 'The Roses',
    rating: 7.0,
    age_limit: 'T16',
    year: 2025,
    duration: '1h 45m',
    genres: [
      {
        name: 'Chính Kịch',
        url: '/the-loai/chinh-kich.1gOywM',
      },
      {
        name: 'Chiếu Rạp',
        url: '/the-loai/chieu-rap.3679nF',
      },
      {
        name: 'Tình Cảm',
        url: '/the-loai/tinh-cam.4RxsoY',
      },
      {
        name: 'Gia Đình',
        url: '/the-loai/gia-dinh.8VSWst',
      },
      {
        name: 'Hài',
        url: '/the-loai/hai.W8Dn2a',
      },
      {
        name: 'Lãng Mạn',
        url: '/the-loai/lang-man.tvr5v7',
      },
    ],
    description:
      'Cuộc sống của Ivy và Theo tưởng chừng hoàn hảo: sự nghiệp thành công, hôn nhân hạnh phúc, con cái ngoan ngoãn. Nhưng đằng sau lớp vỏ của một gia đình lý tưởng ấy là cơn bão ngầm đang dần hình thành — khi sự nghiệp của Theo tuột dốc trong khi tham vọng của Ivy thăng hoa, thổi bùng lên ngọn lửa ganh đua và oán giận âm ỉ có thể thiêu rụi tất cả.',
    images: {
      poster: 'https://static.nutscdn.com/vimg/1920-0/0df1796bdad62348364c2f40e94c4ccc.webp',
      background: 'https://static.nutscdn.com/vimg/1920-0/0df1796bdad62348364c2f40e94c4ccc.webp',
      thumbnail: 'https://static.nutscdn.com/vimg/1920-0/0df1796bdad62348364c2f40e94c4ccc.webp',
    },
    links: {
      watch: '/xem-phim/hoa-hong-co-gai.WWGq5zxI',
      details: '/phim/hoa-hong-co-gai.WWGq5zxI',
    },
  },
]
export default function MoviesBanner() {
  return (
    <Swiper
      loop={true}
      style={
        {
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties
      }
      speed={600}
      effect="cube"
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<img alt="Xem Phim Trò Chơi Ảo Giác: Ares Vietsub HD Online - Rophim" loading="lazy" src="https://static.nutscdn.com/vimg/150-0/3ae2a6a609817b5561e3585a5f9db0e0.webp" class="' + className + '">';
        // },
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay, EffectCube]}
      className="mySwiper"
    >
      {sliderFakeData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="background-fade"
                 style={{
                   backgroundImage: 'url(' + item.images.background + ')',
                 }}></div>
            <div className="cover-fade absolute top-0 left-0 w-full h-[70vh]">
              <div className="cover-image">
                <Image
                  alt={item.title}
                  width={1920}
                  height={1080}
                  className="visible w-full opacity-[0.4] fade-in h-[70vh]"
                  title={item.title}
                  loading="lazy"
                  src={item.images.background}
                />
              </div>
            </div>
            <div className="safe-area">
              <div className="title">
                {item.title}
              </div>
              <div className="subtitle pt-2 pb-2 text-[var(--primary-text)]" >
                {item.subtitle}
              </div>
              <div className="hl-tags pt-2 pb-2">
                <div className="tag-imdb">
                  <span>{item.rating}</span>
                </div>
                <div className="tag-model">
                  <span className="last">
                    <strong>{item.age_limit}</strong>
                  </span>
                </div>
                <div className="tag-classic">
                  <span>{item.year}</span>
                </div>
                <div className="tag-classic">
                  <span>{item.duration}</span>
                </div>
              </div>
              <div className="hl-tags pt-2 pb-2">
                {item.genres.map((genre, index) => {
                  return (
                    <Link className="tag-topic" href={genre.url} key={index}>
                      {genre.name}
                    </Link>
                  )
                })}
              </div>
              <div className="text pt-2 pb-2" data-swiper-parallax="-100">
                {item.description}
              </div>
              <div className="touch pt-2 pb-2">
                <Link className="button-play" href={item.links.watch}>
                  <FontAwesomeIcon icon={faCirclePlay} size="lg" />
                </Link>
                <div className="touch-group">
                  <a className="item">
                    <div className="inc-icon icon-20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath={`url(#clip0_49_76)`}>
                          <path
                            d="M10 18.1432L1.55692 9.82794C0.689275 8.97929 0.147406 7.85276 0.0259811 6.64517C-0.0954433 5.43759 0.211298 4.22573 0.892612 3.22133C4.99987 -2.24739 10 4.10278 10 4.10278C10 4.10278 15.0001 -2.24739 19.1074 3.22133C19.7887 4.22573 20.0954 5.43759 19.974 6.64517C19.8526 7.85276 19.3107 8.97929 18.4431 9.82794L10 18.1432Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a className="item" href="/phim/hoa-hong-co-gai.WWGq5zxI">
                    <div className="inc-icon icon-20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clipPath={'url(#clip0_37_55)'}>
                          <path
                            d="M10 0.75C4.47734 0.75 0 5.22734 0 10.75C0 16.2727 4.47734 20.75 10 20.75C15.5227 20.75 20 16.2727 20 10.75C20 5.22734 15.5227 0.75 10 0.75ZM11.2664 14.9523C11.2664 15.1187 11.2337 15.2833 11.17 15.437C11.1064 15.5906 11.0131 15.7302 10.8955 15.8478C10.7779 15.9654 10.6383 16.0587 10.4846 16.1224C10.331 16.186 10.1663 16.2188 10 16.2188C9.83369 16.2188 9.66901 16.186 9.51537 16.1224C9.36172 16.0587 9.22211 15.9654 9.10452 15.8478C8.98692 15.7302 8.89364 15.5906 8.82999 15.437C8.76635 15.2833 8.73359 15.1187 8.73359 14.9523V9.88633C8.73359 9.72002 8.76635 9.55534 8.82999 9.4017C8.89364 9.24805 8.98692 9.10844 9.10452 8.99084C9.22211 8.87325 9.36172 8.77996 9.51537 8.71632C9.66901 8.65268 9.83369 8.61992 10 8.61992C10.1663 8.61992 10.331 8.65268 10.4846 8.71632C10.6383 8.77996 10.7779 8.87325 10.8955 8.99084C11.0131 9.10844 11.1064 9.24805 11.17 9.4017C11.2337 9.55534 11.2664 9.72002 11.2664 9.88633V14.9523ZM10 7.81406C9.74953 7.81406 9.50468 7.73979 9.29642 7.60063C9.08816 7.46148 8.92584 7.26369 8.82999 7.03229C8.73414 6.80088 8.70906 6.54625 8.75793 6.30059C8.80679 6.05493 8.92741 5.82928 9.10452 5.65217C9.28163 5.47506 9.50728 5.35445 9.75294 5.30558C9.9986 5.25672 10.2532 5.2818 10.4846 5.37765C10.716 5.4735 10.9138 5.63582 11.053 5.84408C11.1921 6.05234 11.2664 6.29718 11.2664 6.54766C11.2665 6.71398 11.2337 6.87868 11.1701 7.03235C11.1065 7.18602 11.0132 7.32565 10.8956 7.44326C10.778 7.56086 10.6384 7.65414 10.4847 7.71777C10.331 7.78139 10.1663 7.81411 10 7.81406Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
