import React,{useState} from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';  
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


import "../Navigation/style.css";

// Optional icons
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {

  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => {
    setIsOpenCatPanel(newOpen);
  };


    const openSubmenu = (index) => { 
        if(submenuIndex ===index){
            setSubmenuIndex (null);
        }else{
            setSubmenuIndex (index);
        }
    }

    const openInnerSubmenu = (index) => { 
        if(innerSubmenuIndex ===index){
            setInnerSubmenuIndex (null);
        }else{
            setInnerSubmenuIndex (index);
        }
    }

  const DrawerList = (

    <Box
      sx={{ width: 250 }}
      role="presentation"
      className="categorypanel" >

     <h3 className="p-[12px] text-[15px] flex items-center justify-between">Shop By Category <IoMdClose className="text-[18px] cursor-pointer" onClick={() => toggleDrawer(false)} /> </h3>
      <Divider />
    
     <div className="scroll">
        <ul>
 <li className="list-none w-full flex flex-col relative">
  <div className="flex items-center justify-between w-full">
    <Link to="/" className="w-full">
      <Button className="w-full !text-left !justify-start !px-[12px] !text-[rgba(0,0,0.8)]">
        Fashion
      </Button>
    </Link>

    {submenuIndex === 0 ? (
      <FaMinus className="cursor-pointer mr-[15px]" onClick={() => openSubmenu(0)} />
    ) : (
      <FaPlus className="cursor-pointer mr-[15px]" onClick={() => openSubmenu(0)} />
    )}
  </div>

  {/* subMenu */}
  {submenuIndex === 0 && (
    <ul className="submenu w-full pl-[12px] flex flex-col">
      <li className="list-none relative">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="w-full">
            <Button className="w-full !text-left !justify-start !px-[12px] !text-[rgba(0,0,0.8)]">
              Apperial
            </Button>
          </Link>
          {innerSubmenuIndex === 0 ? (
            <FaMinus className="cursor-pointer mr-[15px]" onClick={() => openInnerSubmenu(0)} />
          ) : (
            <FaPlus className="cursor-pointer mr-[15px] " onClick={() => openInnerSubmenu(0)} />
          )}
        </div>

        {innerSubmenuIndex === 0 && (
          <ul className="inner-submenu w-full pl-[12px] flex flex-col">
            <li className="list-none relative">
              <Link to="/" className="link w-full !text-left !justify-start !px-[12px] !ml-[10px] transition text-[14px] leading-[30px]">
                Smart Tablet
              </Link>
            </li>
            <li className="list-none relative">
              <Link to="/" className="link w-full !text-left !justify-start !px-[12px] !ml-[10px] transition text-[14px] leading-[30px]">
                Crepe T-Shirt
              </Link>
            </li>
            <li className="list-none relative">
              <Link to="/" className="link w-full !text-left !justify-start !px-[12px] !ml-[10px] transition text-[14px] leading-[30px]">
                Leather Watch
              </Link>
            </li>
            <li className="list-none relative">
              <Link to="/" className="link w-full !text-left !justify-start !px-[12px] !ml-[10px] transition text-[14px] leading-[30px]">
                Rolling Diamond
              </Link>
            </li>
          </ul>
        )}
      </li>
    </ul>
  )}
</li>



<li className="list-none w-full flex flex-col relative">
  <div className="flex items-center justify-between w-full">
    <Link to="/" className="w-full">
      <Button className="w-full !text-left !justify-start !px-[12px] !text-[rgba(0,0,0.8)]">
        OuterWear
      </Button>
    </Link>

    {submenuIndex === 1 ? (
      <FaMinus className="cursor-pointer mr-[15px]" onClick={() => openSubmenu(1)} />
    ) : (
      <FaPlus className="cursor-pointer mr-[15px]" onClick={() => openSubmenu(1)} />
    )}
  </div>

  {/* subMenu */}
  {submenuIndex === 1 && (
    <ul className="submenu w-full pl-[12px] flex flex-col">
      <li className="list-none relative">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="w-full">
            <Button className="w-full !text-left !justify-start !px-[12px] !text-[rgba(0,0,0.8)]">
              Apperial
            </Button>
          </Link>

          {innerSubmenuIndex === 1 ? (
            <FaMinus className="cursor-pointer mr-[15px]" onClick={() => openInnerSubmenu(1)} />
          ) : (
            <FaPlus className="cursor-pointer mr-[15px]" onClick={() => openInnerSubmenu(1)} />
          )}
        </div>

        {/* sub-subMenu */}
        {innerSubmenuIndex === 1 && (
          <ul className="inner-submenu w-full pl-[12px] flex flex-col">
            <li className="list-none relative">
              <Link
                to="/"
                className="link w-full !text-left !justify-start !px-[12px] !ml-[10px] transition text-[14px] leading-[30px]"
              >
                Smart Tablet
              </Link>
            </li>
            <li className="list-none relative">
              <Link
                to="/"
                className="link w-full !text-left !justify-start !px-[12px] !ml-[10px] transition text-[14px] leading-[30px]"
              >
                Crepe T-Shirt
              </Link>
            </li>
            <li className="list-none relative">
              <Link
                to="/"
                className="link w-full !text-left !justify-start !px-[12px] !ml-[10px] transition text-[14px] leading-[30px]"
              >
                Leather Watch
              </Link>
            </li>
            <li className="list-none relative">
              <Link
                to="/"
                className="link w-full !text-left !justify-start !px-[12px] !ml-[10px] transition text-[14px] leading-[30px]"
              >
                Rolling Diamond
              </Link>
            </li>
          </ul>
        )}
      </li>
    </ul>
  )}
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
