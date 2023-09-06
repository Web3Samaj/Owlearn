import React from 'react'
import Overview from './Overview'
import CoursesOffer from './CoursesOffer'
import Hero from './Hero'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import FAQSection from './Faq'
import Footer from './Footer'
const Landing = () => {
  return (
    <div className={`w-full min-h-screen overflow-hidden`}>
      <Hero />
      <Overview />
      <CoursesOffer />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default Landing
