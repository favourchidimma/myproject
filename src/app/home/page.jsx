import React from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Footer from '@/components/footer'

const home = () => {
  return (
    <div>

      <div>
        <Navbar/>  
      </div> 

      <div className="flex justify-center bg-[url('/backgroundvideo.gif')] bg-cover bg-center items-center min-h-screen min-w-screen">      
      <div>
        <Hero />
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    
  )
}

export default home
