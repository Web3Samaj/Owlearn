import React from 'react'
import Overview from './Overview'
import CoursesOffer from './CoursesOffer'
import Hero from './Hero'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import FAQSection from './Faq'
import Footer from './Footer'
import Marque from './Marque'
import Testimonial from './Testimonial'
const Landing = () => {
  return (
    <div
      className={`w-full min-h-screen items-center overflow-hidden bg-black`}
    >
      <Hero />
      <Marque />
      <Overview />
      <Testimonial />
      <CoursesOffer />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default Landing
