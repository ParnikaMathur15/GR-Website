import { Button } from '@/components/ui/button'
import { MailPlus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Contact() {
  return (
    <div className=' flex justify-center items-center mt-32'>
        <div className='shadow-[0px_0px_50px_0px_#3182ce] flex rounded-3xl justify-between items-center  w-[80%]'>
            <form className='rounded-3xl shadow-[0px_0px_400px_0px_#3182ce] p-16 w-full flex gap-5  flex-col justify-center items-start'>
                <div className='flex flex-col gap-2'>
                <label className='text-white text-3xl font-semibold'>Chat to our team</label>
                <label className='text-gray-400 text-sm'>Need help with something..? Get in touch with our friendly team.</label>
                </div>
                <input className='bg-transparent border-b-2 border-gray-500 w-full text-white' type='text' placeholder='First Name' required/>
                <input className='bg-transparent border-b-2 border-gray-500 w-full text-white' type='text' placeholder='Last Name' required/>
                <input className='bg-transparent border-b-2 border-gray-500 w-full text-white' type='email' placeholder='Email' required/>
                <textarea className='bg-transparent border-b-2 border-gray-500 w-full text-white' placeholder='Message' required/>
                <Button variant="outline" className="w-[50%]">Submit</Button>
            </form>
        <div className=' w-full h-full flex justify-center items-center rounded-3xl'>
             <Image src={'/contact.png'} height={60} width={450}/>
            {/* <MailPlus className='text-secondary p-0' size={390}/> */}
        </div>
        </div>
    </div>
  )
}

export default Contact