import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Testimonial from './Testimonial'
import Footer from './Footer'
import FlipCard from './FlipCard'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <FlipCard/>
    <Services/>
    <Testimonial/>
    <Footer/>
    </>
  )
}
