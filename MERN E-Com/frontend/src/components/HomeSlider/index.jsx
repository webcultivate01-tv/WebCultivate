
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation,Autoplay} from 'swiper/modules';


const HomeSlider = ()=> {
  return (
     <>

     <div className="homeSlider py-[12px]">
        <div className="container">
        <Swiper spaceBetween={10} navigation={true}
          autoplay={
            {delay:1500,disableOnInteraction:false,}
        }
        modules={[Navigation,Autoplay]} className="sliderHome">
        <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img src="https://serviceapi.spicezgold.com/download/1759938751802_30744.jpg" alt="slider img" className='w-full' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg" alt="slider img" className='w-full' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img src="https://serviceapi.spicezgold.com/download/1763812170460_homeslides2.jpg" alt="slider img" className='w-full' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg" alt="slider img" className='w-full' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
            <img src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg" alt="slider img" className='w-full' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
            <img src="https://serviceapi.spicezgold.com/download/1759938751802_30744.jpg" alt="slider img" className='w-full' />
            </div>
        </SwiperSlide>
        </Swiper>
        </div>
     </div>
     </>
  )
}


export default HomeSlider;