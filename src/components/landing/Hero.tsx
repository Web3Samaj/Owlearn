import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import owl from 'public/asset/landing/owl.svg'
const Hero = () => {
  gsap.registerPlugin(ScrollTrigger)
  const parentHeroRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    gsap.to('.parallaxdiv', {
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: '.parallaxdiv',
        //pin: vidpannel.current,   // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: 'bottom', // end after scrolling 500px beyond the start
        scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

        // endTrigger : b.current
      },
      y: -200,
      // rotation : 360,
    })

    gsap.to('.parallaximg2', {
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: '.parallaxdiv',
        //pin: vidpannel.current,   // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: 'bottom', // end after scrolling 500px beyond the start
        scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

        // endTrigger : b.current
      },
      y: -250,
      // rotation : 360,
    })
  }, [])

  return (
    <div
      ref={parentHeroRef}
      className={`w-full min-h-screen flex flex-col items-center justify-center bg-[#001219] relative `}
    >
      <div
        className={`font-shadow text-9xl absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 tracking-widest font-bold flex flex-col items-center justify-center text-center`}
      >
        Owlearn
        <p className={`text-2xl mt-4 font-meri tracking-wide text-white/70 `}>
          {' '}
          A Decentralized EdTech That Ignites Your Curiosity and Fuels Your
          Educational Journey to New Heights
        </p>
      </div>

      <div className={`parallaxdiv w-full  flex py-20 flex-col relative `}>
        <div className={`flex`}>
          <img
            src="asset/landing/h1.avif"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` parallaximg  ml-[15%]   h-[16rem] w-[12rem]  transition-transform duration-500 ease-linear `}
          />
          <img
            src="asset/landing/eth.png"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` parallaximg2  ml-auto mr-[30%] h-[10rem] w-[8rem]  transition-transform duration-500 ease-linear `}
          />
        </div>

        <div className={`flex w-full justify-between items-center`}>
          <img
            src="asset/landing/cod.jpeg"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` parallaximg2 rounded-3xl ml-[5%]   h-[10rem] w-[17rem] -rotate-12  transition-transform duration-500 ease-linear `}
          />
          <video
            className={` w-[12rem] h-[15rem] mr-[10%] rounded-3xl `}
            autoPlay
            loop
            muted
          >
            <source
              src={'/asset/landing/vid.mp4'}
              type="video/mp4"
              className={``}
              height={100}
            />
          </video>
        </div>
        <div className={`flex`}>
          <img
            src="asset/landing/h3.avif"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` parallaximg  ml-[28%]   h-[19rem] w-[15rem]  transition-transform duration-500 ease-linear `}
          />
          <img
            src="asset/landing/h7.jpeg"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` parallaximg2  ml-auto mr-[18%]  mt-[5%] h-[22rem] w-[15rem]  transition-transform duration-500 ease-linear `}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
