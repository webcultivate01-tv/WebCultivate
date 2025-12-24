import React from 'react'
import HomeSlider from '../../components/HomeSlider/index.jsx'
import HomeCatSlider from '../../components/HomeCatSlider/index.jsx';
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider/index.jsx';


const Home = () => {
    return (
       <div className='homeBody'>
       <HomeSlider/>
       <HomeCatSlider/>

       <section className='freeShipingBody py-[30px] mt-[20px] bg-white'>
           <div className="container">
               <div className="freeShiping w-full p-[10px] border-2 border-[#ff5250] flex items-center justify-between rounded-md mb-[28px]">
                    <div className="col1 flex items-center gap-[16px]">
                        <LiaShippingFastSolid className='text-[50px]' />
                        <span className='text-30px] font-[600]'>Free Shipping</span>
                    </div> 
                    <div className="col2">
                        <p className='md-0 font-[500]'>Free Delivery Now On Your First Order and over 399RS</p>
                    </div>
                   <p className='font-[800] text-[20px]'>- Only RS399*</p>
               </div>
               <AdsBannerSlider items={4} />
           </div>
       </section>

       <br /><br /><br /><br /><br /><br /><br /><br /><br />
       </div>
    )
}

export default Home;