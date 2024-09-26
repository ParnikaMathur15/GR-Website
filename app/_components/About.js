import React from 'react'

function About() {
  return (
    <div className='py-10 sm:py-20 flex sm:flex-row flex-col justify-between gap-2 sm:gap-16'>
        <div className='relative p-5 sm:p-8 sm:rounded-r-2xl shadow-[0px_0px_400px_0px_#3182ce] bg-secondary bg-opacity-90'>
            <p className="font-extrabold text-white text-3xl sm:text-7xl sm:ml-10 sm:mr-5 text-center sm:text-left">About Us</p>
            
        </div>
        <div className='sm:p-10 p-5 m-5 sm:m-0 rounded-2xl sm:rounded-none sm:rounded-l-2xl shadow-[0px_0px_400px_0px_#3182ce]  flex justify-center items-center'>
            <p className="font-light text-white text-xl sm:text-2xl  text-center sm:text-left">
            A hub for college students passionate about coding. It connects you with other coders, providing a platform to share knowledge and collaborate. The community also organizes exciting events like hackathons to hone your coding skills and creativity.
            </p>
        </div>
    </div>
  )
}

export default About