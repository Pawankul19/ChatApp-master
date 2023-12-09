import React from 'react'
import ListItems from './ListItems'
import { GoPaperclip } from "react-icons/go";
import { FaPaperPlane } from "react-icons/fa6";


export const Chat = () => {
  return (
    <div className='ChatArea'>
          <ListItems username={"Kayla"} image={"https://api.slingacademy.com/public/sample-users/1.png"} last_message={"offline"}  time={"Tap to open"} />
          <div className='chatList'></div>
          <div className='is-flex messageInputArea'>
            <div className='messageInput'>
              <GoPaperclip size={20} className='mx-3' />
              <input placeholder='Message' className='' />
            </div>
            <button className='mr-3'><FaPaperPlane size={20} color='white' /></button>
          </div>

    </div>
  )
}
