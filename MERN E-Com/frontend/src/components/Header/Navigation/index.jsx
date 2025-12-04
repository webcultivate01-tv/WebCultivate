import React, {useState} from 'react'
import Button from '@mui/material/Button';
import { CgMenu } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';


const Navigation = () => {

const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
}

  return (
    <>
      <nav className='py-[5px]'>
        <div className="container flex items-center justify-end gap-[32px] ">
             <div className="col1 w-[20%]">
              <Button sx={{ color: "black" }} className=" gap-[10px] w-full" onClick={openCategoryPanel}>
                 <CgMenu className='text-[18px]'/>
                  SHOP BY CATEGORIEY
                  <FaAngleDown className='text-[13px] ml-auto font-bold'/>
                  </Button>
             </div> 

             
             <div className="col2 w-[65%]">
                 <ul className='flex items-center gap-[20px] font-[500]  nav'>
                     <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">
                      <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                         Home
                      </Button>
                     
                      </Link>
                     </li>

                      <li className='list-none relative'>
                      <Link to={"/"} className="link text-[14px] font-[500]">
                      <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                         Fashion
                      </Button>
                     </Link>

                       <div className='submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all '>
                               <ul >
                                     <li className='list-none w-full'>
                                        <Link to="/" className='w-full link'>
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                                        </Link>
                            <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all '>
                               <ul >
                                     <li className='list-none w-full relative'>
                                        <Link to="/" className='w-full link'>
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>T-Shirt</Button>
                                        </Link>
                                     </li>
                                     <li className='list-none w-full'>
                                       <Link to="/" className='w-full link'>
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jeans</Button>
                                       </Link>
                                     </li>
                                     <li className='list-none w-full'>
                                       <Link to="/" className='w-full link'>
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Footwear</Button>
                                        </Link>
                                     </li>
                                      <li className='list-none w-full'>
                                         <Link to="/" className='w-full link'>
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Watch</Button>
                                         </Link>
                                     </li>
                                      <li className='list-none w-full'>
                                         <Link to="/" className='w-full link'>
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Pents</Button>
                                      </Link>
                                     </li>                                                                                                                                                
                               </ul>
                       </div>
                                     </li>
                                     <li className='list-none w-full'>
                                       <Link to="/" className='w-full link'>
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women</Button>
                                       </Link>
                                     </li>
                                     <li className='list-none w-full'>
                                       <Link to="/" className='w-full link'>
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                                        </Link>
                                     </li>
                                      <li className='list-none w-full'>
                                         <Link to="/" className='w-full link'>
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls</Button>
                                         </Link>
                                     </li>
                                      <li className='list-none w-full'>
                                         <Link to="/" className='w-full link'>
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Boys</Button>
                                      </Link>
                                     </li>                                                                                                                                                
                               </ul>
                       </div>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">
                      <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                        Electronics
                      </Button>
                      </Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">
                     <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                        Bags
                      </Button>
                      </Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">
                       <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                         Footwear
                      </Button>
                     </Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">
                       <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                         Groceries
                      </Button>
                     </Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">
                       <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                         Beauty
                      </Button>
                     </Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">
                      <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                       Wellness 
                      </Button>
                      </Link>
                     </li>

                      <li className='list-none'>
                      <Link to={"/"} className="link text-[14px] font-[500]">
                       <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252]'>
                        Jewellery
                      </Button>
                      </Link>
                     </li>
                 </ul>
             </div>

              <div className="col3 w-[15%]"> 
                <p className='text-[15px]'><GoRocket className='text-[18px]'/> Free All India Delivery</p>
              </div>
        </div>
      </nav>

      {/* Category pannel Component */}
      <CategoryPanel isOpenCatPanel={isOpenCatPanel}
      setIsOpenCatPanel={setIsOpenCatPanel} />
    </>  
  )
}

export default Navigation ;
