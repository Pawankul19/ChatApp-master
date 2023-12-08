import React from 'react'
import { LuHome } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { TbDoorExit } from "react-icons/tb";

export const Navbar = () => {
  return (
    <nav>
        <div className='Upper'>
            <li><LuHome/></li>
            <li><FaRegCircleUser/></li>
            <li><BsChatDots/></li>
            <li><CiSettings/></li>
        </div>
        <div className='Lower'>
            <li><TbDoorExit/></li>
        </div>
    </nav>
  )
}
