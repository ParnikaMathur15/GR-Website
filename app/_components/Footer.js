import { Instagram, Linkedin } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className=' flex gap-5 justify-between sm:p-8 p-5 sm:h-[200px] bg-black mt-32 sm:mt-52'>
        <div> 
            <p className='text-white sm:text-6xl text-2xl font-bold sm:mb-5 mb-3'>Geek Room IITM</p>
            <p className='text-gray-300 text-xs sm:text-sm font-normal w-[250px] sm:w-[400px]'>Institute of Information Technology & Management
            D-29, Institutional Area, Janakpuri, New Delhi-110058</p>
        </div>
        <div >
            <h1 className='text-white text-xl sm:text-3xl font-semibold whitespace-nowrap'>Social Links</h1>
            <div className='flex flex-row sm:flex-col justify-end gap-5 sm:gap-0 mt-2 sm:mt-0'>
            <div className='flex gap-2 mt-1 sm:mt-3 justify-end'>
                <Instagram className='text-white' size={25}/>
                <p className='text-white text-sm sm:text-lg hidden sm:flex'>Instagram</p>
            </div>
            <div className='flex gap-2 mt-1 sm:mt-3 justify-end'>
                <Linkedin className='text-white' size={25}/>
                <p className='text-white text-sm sm:text-lg hidden sm:flex'>LinkedIn</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer