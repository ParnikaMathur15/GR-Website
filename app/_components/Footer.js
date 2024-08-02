import { Instagram, Linkedin } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className=' flex gap-5 justify-between p-8 h-[200px] bg-black mt-52'>
        <div > 
            <p className='text-white text-6xl font-bold mb-5'>Geek Room IITM</p>
            <p className='text-gray-300 text-sm font-normal  w-[400px]'>Institute of Information Technology & Management
            D-29, Institutional Area, Janakpuri, New Delhi-110058</p>
        </div>
        <div>
            <h1 className='text-white text-3xl font-semibold'>Social Links</h1>
            <div className='flex gap-2 mt-3'>
                <Instagram className='text-white'/>
                <p className='text-white'>Instagram</p>
            </div>
            <div className='flex gap-2 mt-3'>
                <Linkedin className='text-white'/>
                <p className='text-white'>LinkedIn</p>
            </div>
        </div>
    </div>
  )
}

export default Footer