import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../HERO/Hero'
import Work from '../WORK/Work'
import InfiniteSlider from '../ui/InfiniteSlider'

export default function HomePage() {
  return (
    <div className='w-screen'>
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
      <Work></Work>
      <InfiniteSlider title="AI TECH" bg_text_style="bg-color-1 text-white"></InfiniteSlider>
    </div>
  )
}
