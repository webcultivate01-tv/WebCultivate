import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { BsCart3 } from "react-icons/bs";
import { IoMdGitCompare } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation/index.jsx';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Header = () => {
    return (
      <header>
           <div className="top-strip py-[10px] border-t-[1px] border-b-1 border-[rgba(0,0,0,0.1)]">
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
         <div className="header py-[10px] border-b-[1px] border-[rgba(0,0,0,0.1)]">
            <div className="container flex items-center justify-between">

                <div className="col1 w-[25%]">
                     <Link to={"/"}><img src='/logo.jpg'/></Link>
                </div>

                <div className="col2 w-[45%] ">
                  <Search/>
                </div>

                <div className="col3  w-[30%]  flex items-center p-[20px] ">
                     <ul className='flex items-center gap-[5px] w-full justify-end'>
                        <li className='list-none'>
                           <Link to={"/login"}  className='link transition text-[14px]' >Login</Link>&nbsp; | &nbsp;
                            <Link to={"/register"} className='link transition text-[14px]' >Register</Link>
                        </li> 
                       
                        <li>
                             <Tooltip title="Caompare" >
                            <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} color="secondary">
                            <IoMdGitCompare/>
                            </StyledBadge>
                            </IconButton>
                            </Tooltip>
                        </li>
                         <li>
                            <Tooltip title="Wishlist">
                            <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} color="secondary">
                            <IoMdHeartEmpty/>
                            </StyledBadge>
                            </IconButton>
                            </Tooltip>
                        </li>
                         <li>
                            <Tooltip title="Cart">
                            <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} color="secondary">
                            <BsCart3/>
                            </StyledBadge>
                            </IconButton>
                            </Tooltip>
                        </li>
                     </ul>
                </div>
            </div>
         </div>
           
           <Navigation/>
      </header>
    )
}

export default Header;