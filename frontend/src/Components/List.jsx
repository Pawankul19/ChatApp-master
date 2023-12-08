import React from 'react'
import { CiSearch } from "react-icons/ci";



export const List = () => {
  return (
    <div className='ListArea'>
      <h2 className='ml-6 headingfont'>Message</h2>
      <div className='searchbar is-flex is-align-items-center'>
        <CiSearch color='black' size={20} />
        <input placeholder='Search' />
      </div>
    </div>
  )
}
