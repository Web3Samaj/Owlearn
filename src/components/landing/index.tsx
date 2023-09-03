import React from 'react'
import Overview from './Overview'
import CoursesOffer from './CoursesOffer'
import Hero from './Hero'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Landing = () => {
  return (
    <div className={`w-full min-h-screen overflow-hidden`}>
      <Hero />
      <Overview />
      <CoursesOffer />
    </div>
  )
}

export default Landing
