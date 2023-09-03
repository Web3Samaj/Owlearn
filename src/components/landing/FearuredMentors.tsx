import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const FeaturedMentors = () => {
  const a = useRef<HTMLDivElement>(null!)
  const b = useRef<HTMLDivElement>(null!)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const pin = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: b.current,
        pin: a.current, // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: 'bottom bottom', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true,
        // endTrigger : b.current
      },
    })
    return () => {
      pin.kill()
    }
  }, [])

  return (
    <>
      <div
        ref={b}
        className={`min-h-screen w-full flex  bg-rose-400 justify-center`}
      >
        <div ref={a} className={`w-[50vw] bg-green-500 h-[50vh]`}>
          {' '}
          jehjkshdk
        </div>
        <div className={`w-[50vw] bg-blue-500 h-[400vh]`}> i am blue</div>
      </div>
      <div className={`w-[100vw] bg-purple-500 h-[400vh]`}> i am blue</div>
    </>
  )
}

export default FeaturedMentors
