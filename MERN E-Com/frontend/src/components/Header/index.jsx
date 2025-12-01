import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search';


const Header = () => {
    return (
      <header>
           <div className="top-strip py-[10px] border-t-1 border-b-1 border-[rgba(0,0,0,0.1)]">
            <div className="container">

                {/* left side  */}
                <div className='flex items-center justify-between' >
                    <div className="col1 w-[50%]">
                       <p className='text-[14px] font-[500]'>Get Up to 50% off new session, limited time only</p>
                    </div>

                     {/* right side  */}
                <div className='flex items-center justify-end' >
                     <ul className='flex items-center gap-4'>
                        <li className='list-none'>
                            <Link to="/help-center" className='text-[14px] text-black no-underline link font-[500] transition'>Help Center</Link>
                        </li>
                        &nbsp;&nbsp;
                        <li className='list-none'>
                            <Link to="/order-tracking" className='text-[14px] text-black no-underline link font-[500] transition'>Order Tracking</Link>
                        </li>
                     </ul>
                </div>

                </div>
            </div>
           </div>
        
        {/* header */}
         <div className="header py-[15px]">
            <div className="container flex items-center justify-between">

                <div className="col1 w-[25%]">
                     <Link to={"/"}><img src='/logo.jpg'/></Link>
                </div>

                <div className="col2 w-[45%] ">
                  <Search/>
                </div>

                <div className="col3  w-[30%]  flex items-center p-[20px] ">
                     <ul className='flex items-center gap-[3px]'>
                        <li className='list-none'>
                           <Link to={"/login"}  className='link transition text-[14px]' >Login</Link> | &nbsp;
                            <Link to={"/register"} className='link transition text-[14px]' >Register</Link>
                        </li> 
                     </ul>
                </div>
            </div>
         </div>
           
      </header>
    )
}

export default Header;