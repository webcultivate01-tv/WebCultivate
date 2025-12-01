import React from 'react'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";


import "../Search/style.css"


const Search = () => {
  return (
    <div className="searchBox w-full h-[50px] bg-[#e5e5e5] rounded-[5px] 
      p-[2px] flex items-center">
      
      <input 
        type="text" 
        placeholder="Search for Products..."
        className="w-full h-[35px] bg-transparent focus:outline-none border-none p-[10px] text-[16px]"
      />
    <Button variant="outline" className='!rounded-full w-10 h-10 text-black '><IoSearch size={20} className='text-black'/></Button>

    </div>
  )
}

export default Search;
