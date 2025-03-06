import Contact from '@/components/Contact/Contact'
import Connect from '@/components/Connect/Connect'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const page = () => {
  return (

    
    <div  className="relative w-full min-h-screen flex flex-col">
        <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/thunder.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <Navbar/>
        <div className='mt-12 mb-24'> <Contact/>
        <Connect/></div>
       
        <Footer/>
    </div>
  )
}

export default page