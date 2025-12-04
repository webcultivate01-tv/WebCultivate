import React from 'react'
import Home from '../../pages/Home'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const HomeCatSlider = () => {
  return (
    <>
    <div className="homeCatSlider">
       <div className="container">
            <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}   
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px] transition-all'>Fashion</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Fashion</h3>
          </div>
        </SwiperSlide>


         <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Fashion</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Fashion</h3>
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Fashion</h3>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Fashion</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Fashion</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Fashion</h3>
          </div>
        </SwiperSlide>
      </Swiper>
       </div>
    </div>
    </>
  )
}

export default HomeCatSlider;
