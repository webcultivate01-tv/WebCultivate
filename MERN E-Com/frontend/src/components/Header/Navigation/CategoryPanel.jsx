import React,{useState} from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';  
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

import "../Navigation/style.css";

// Optional icons
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {

  const [submenuIndex, setSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => {
    setIsOpenCatPanel(newOpen);
  };


    const openSubmenu = (index) => { 
          setSubmenuIndex(index);
    }

  const DrawerList = (

    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
      className="categorypanel" >

     <h3 className="p-[12px] text-[15px] flex items-center justify-between">Shop By Category <IoMdClose className="text-[18px] cursor-pointer" onClick={() => toggleDrawer(false)} /> </h3>
      <Divider />
    
     <div className="scroll">
        <ul>
            <li className="list-none w-full flex items-center relative">

                <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start !px-[12px] !text-[rgba(0,0,0.8)]">Fashion</Button>
                </Link>
                <FaPlus className=" absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openSubmenu(0)}/>
               
                 {/* subMenu */}
                 {submenuIndex === 0 &&
                                 <ul className="submenu absolute top-[100%] left-[0] w-full  pl-[12px]">
                    <li className="list-none relative">
                        <Link to="/" className="w-full">
                     <Button className="w-full !text-left !justify-start !px-[12px] !text-[rgba(0,0,0.8)]">Apperial</Button>
                         </Link>
                     <FaPlus className=" absolute top-[10px] right-[15px] cursor-pointer"/>
                    </li>     
                         {/* sub-subMenu */}
                    <ul className="inner-submenu absolute top-[100%] left-[0] w-full  pl-[12px] ">
                         <li className="list-none relative">
                              <Link  to="/" className=" link w-full !text-left !justify-start !px-[12px] !ml-[10px] transition text-[14px] leading-[30px] ">Smart Tablet</Link>
                         </li>    
                         <li className="list-none relative">
                              <Link  to="/" className=" link w-full !text-left !justify-start !px-[12px] !ml-[10px] transition text-[14px] leading-[30px]">Crepe T-Shirt</Link>
                         </li>   
                         <li className="list-none relative">
                              <Link  to="/" className=" link w-full !text-left !justify-start !px-[12px] !ml-[10px] transition text-[14px] leading-[30px]">Leather Watch</Link>
                         </li>  
                         <li className="list-none relative">
                              <Link  to="/" className=" link w-full !text-left !justify-start !px-[12px] !ml-[10px] transition text-[14px] leading-[30px]">Rolling Diamond</Link>
                         </li>    
                     </ul>
                            
                </ul>
                 }

                

            </li>
        </ul>
     </div>
     

    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={isOpenCatPanel}
      onClose={() => toggleDrawer(false)}
    >
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
