import React from 'react'
import { LuHome } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { TbDoorExit } from "react-icons/tb";

export const Navbar = () => {
  return (
    <nav>
        <div className='Upper'>
            <li className='listItems'><LuHome size={20}/></li>
            <li className='listItems'><FaRegCircleUser size={20}/></li>
            <li className='listItems'><BsChatDots size={20}/></li>
            <li className='listItems'><GoGear size={20}/></li>
        </div>
        <div className='Lower'>
            <li className='listItems'><TbDoorExit size={20}/></li>
        </div>
    </nav>
  )
}
