import React from 'react'
import Overview from './Overview'
import FeaturedMentors from './FearuredMentors'
import Hero from './Hero'
const Landing = () => {
  return (
    <div className={`w-full min-h-screen `}>
      {/* <FeaturedMentors/> */}
      <Hero />
      <Overview />
    </div>
  )
}

export default Landing
