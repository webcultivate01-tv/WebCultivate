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
    <div className="homeCatSlider pt-[16px] py-[40px]">
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
             <img src="https://serviceapi.spicezgold.com/download/1761905929738_file_1734525218436_ele.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Electronics</h3>
          </div>
        </SwiperSlide>


         <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1761905971086_file_1734525231018_bag.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Bags</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1761905982766_file_1734525239704_foot.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Footwear</h3>
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1761905996339_file_1734525248057_gro.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Groceries</h3>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1761906005923_file_1734525255799_beauty(1).png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Beauty</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1761906015678_file_1734525275367_well.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Wellness</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item py-[28px] px-[12px] bg-white rounded-sm text-center flex items-center justify-center flex-col">
             <img src="https://serviceapi.spicezgold.com/download/1761906025549_file_1734525286186_jw.png" alt="homeCatSlider" className='w-[60px]' />
             <h3 className='text-[15px] font-[500] mt-[12px]'>Jewellary</h3>
          </div>
        </SwiperSlide>
      </Swiper>
       </div>
    </div>
    </>
  )
}

export default HomeCatSlider;
