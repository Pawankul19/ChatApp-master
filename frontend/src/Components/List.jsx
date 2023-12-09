import React from 'react'
import { CiSearch } from "react-icons/ci";
import { profile1 } from "./images/profile1.png";

export const List = () => {
  return (
    <div className='ListArea'>
      <h2 className='ml-6 headingfont'>Message</h2>
      <div className='searchbar is-flex is-align-items-center'>
        <CiSearch color='black' size={20} />
        <input placeholder='Search' />
      </div>
      <div className='profile'>
        <div className='ProfileItems'><img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="image1" /></div>
      </div>
    </div>
  );c
}
