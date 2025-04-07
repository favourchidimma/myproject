import React from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import footer from '../components/footer'
import EventSection from '@/components/upcomingevent'


const home = () => {
  return (
    <div>
      <Hero/>
      <EventSection/>
    </div>    
  )
}

export default home
