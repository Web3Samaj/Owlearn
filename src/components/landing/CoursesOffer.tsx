import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const CoursesOffer = () => {
  const a = useRef<HTMLDivElement>(null!)
  const b = useRef<HTMLDivElement>(null!)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const sections = gsap.utils.toArray('.horizon')
    const pin = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.containerizer',
        pin: true, // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: '+=3000', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true,
        // snap : 1/ (sections.length-1)
        // endTrigger : b.current
      },
    })
    return () => {
      pin.kill()
    }
  }, [])

  return (
    <div className="overflow-hidden">
      <div
        className={`containerizer min-h-screen flex w-[300vw]   bg-rose-400 `}
      >
        <section className={`horizon w-[10vw] bg-green-500`}>
          kjhakfljhkdsjflkjhdflkdf
        </section>
      </div>
    </div>
  )
}

export default CoursesOffer
