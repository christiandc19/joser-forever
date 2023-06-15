import React from 'react'
import './Topbar.css'

import { MdLocationPin } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';


const Topbar = () => {
  return (
    <div className='topbar' name='top'>
            <div className='topbar-content container'>
                <div className='address bar-box1 topbar-hide'>
                    <p><span><MdLocationPin /></span> 1435 S La Cienega BlvdLos Angeles, CA 90035</p>
                </div>

                <div className='email bar-box2 topbar-hide'>
                    <p><span><FiMail /></span> info@joserforever.biz</p>
                </div>

                <div className='number bar-box3'>
                    <p><span><AiOutlinePhone /></span> +1 (323) 801-8511</p>
                </div>

            </div>
      
    </div>
  )
}

export default Topbar
