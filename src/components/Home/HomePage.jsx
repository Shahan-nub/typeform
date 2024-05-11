import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../HERO/Hero'
import Work from '../WORK/Work'

export default function HomePage() {
  return (
    <div className='w-screen'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Work></Work>
    </div>
  )
}
