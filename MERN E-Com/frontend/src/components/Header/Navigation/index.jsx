import React from 'react'
import Button from '@mui/material/Button';
import { CgMenu } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";


const Navigation = () => {
  return (
      <nav className='py-[5px]'>
        <div className="container flex items-center justify-end gap-[32px] ">
             <div className="col1 w-[20%]">
              <Button sx={{ color: "black" }} className=" gap-[10px] w-full">
                 <CgMenu className='text-[18px]'/>
                  SHOP BY CATEGORIEY
                  <FaAngleDown className='text-[13px] ml-auto font-bold'/>
                  </Button>
             </div> 

             
             <div className="col2 w-[65%]">
                 <ul className='flex items-center gap-[20px] font-[500]'>
                     <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">Home</Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">Fashion</Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">Electronics</Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">Bags</Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">Footwear</Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">Groceries</Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">Beauty</Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">Wellness</Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">Jewellery</Link>
                     </li>
                 </ul>
             </div>

              <div className="col3 w-[15%]"> 
                <p className='text-[15px]'><GoRocket className='text-[18px]'/> Free All India Delivery</p>
              </div>
        </div>
      </nav>
  )
}

export default Navigation ;
