import React from 'react'

function About() {
  return (
    <div className='py-20 flex justify-between  gap-16'>
        <div className='relative p-8 rounded-r-2xl shadow-[0px_0px_400px_0px_#3182ce] bg-secondary bg-opacity-90'>
            <p className="font-extrabold text-white text-7xl ml-10 mr-5">About Us</p>
            
        </div>
        <div className='p-10 rounded-l-2xl shadow-[0px_0px_400px_0px_#3182ce]  flex justify-center items-center'>
            <p className="font-light text-white text-2xl text-pretty ">
            A hub for college students passionate about coding. It connects you with other coders, providing a platform to share knowledge and collaborate. The community also organizes exciting events like hackathons to hone your coding skills and creativity.
            </p>
        </div>
    </div>
  )
}

export default About