import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import About1 from '../../components/About/About1';
import About2 from '../../components/About/About2';
import About3 from '../../components/About/About3';
import About4 from '../../components/About/About4';
import About5 from '../../components/About/About5';

import { Pagination, Navigation } from 'swiper/modules';
const Explore = () => {
  return (
    <div className="bg-green-50 p-8">
      <h1 className="text-4xl font-semibold text-center mb-8">EXPLORE <span className="italic">Plants</span></h1>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       <SwiperSlide className='mb-10'>{About5}</SwiperSlide>
        <SwiperSlide>{About2}</SwiperSlide>
        <SwiperSlide>{About3}</SwiperSlide>
        <SwiperSlide>{About4}</SwiperSlide>
        
        <SwiperSlide className='mb-10'>{About1}</SwiperSlide>
      </Swiper>

      {/* {plants.map((plant, index) => (
        <About key={index} plant={plant} />
      ))} */}
    </div>
  );
};

export default Explore;
