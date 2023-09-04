import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import owl from 'public/asset/landing/owl.svg'
const Hero = () => {
  gsap.registerPlugin(ScrollTrigger)
  const parentHeroRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    gsap.to('.parallaxdiv', {
      scrollTrigger: {
        trigger: '.parallaxdiv',
        start: 'clamp(top top)',
        end: 'clamp(bottom)',
        scrub: 0.5,
      },
      y: -200,
    })

    gsap.to('.parallaximg2', {
      scrollTrigger: {
        trigger: '.parallaxdiv',
        start: 'clamp(top top)',
        end: 'clamp(bottom)',
        scrub: 0.5,
      },
      y: -250,
    })
  }, [])

  return (
    <div
      ref={parentHeroRef}
      className={`w-full min-h-screen flex flex-col items-center justify-center bg-[#001219] relative `}
    >
      <div
        className={`font-kabl md:text-9xl text-6xl absolute md:top-[40%] top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 tracking-widest font-bold flex flex-col items-center justify-center text-center  bg-black/40 md:bg-transparent py-2 px-4 rounded-xl md:rounded-none backdrop-blur-md md:backdrop-blur-none text-[#fcfbf8]`}
      >
        Owlearn
        <p
          className={`md:text-2xl text-lg md:mt-4 mt-2 font-reeni  tracking-wide text-white/70 `}
        >
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
            className={` parallaximg  ml-[15%]  h-[12rem] w-[8rem] md:h-[16rem] md:w-[12rem]  transition-transform duration-500 ease-linear `}
          />
          <img
            src="asset/landing/eth.png"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` parallaximg2  ml-auto md:mr-[30%]  mr-[20%] md:h-[10rem] h-[7rem] w-[6rem]  md:w-[8rem]  transition-transform duration-500 ease-linear `}
          />
        </div>

        <div className={`flex w-full justify-between items-center`}>
          <img
            src="asset/landing/cod.jpeg"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` parallaximg2 rounded-3xl ml-[2%]   md:h-[10rem] h-[6rem] w-[8rem] md:w-[17rem] -rotate-12  transition-transform duration-500 ease-linear `}
          />
          <video
            className={` w-[12rem] h-[15rem] md:mr-[10%] mr-[2%] rounded-3xl `}
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
            className={` parallaximg  md:ml-[28%] ml-[6%]   md:h-[19rem] h-[12rem] md:w-[15rem] w-[10rem]  transition-transform duration-500 ease-linear `}
          />
          <img
            src="asset/landing/h7.jpeg"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` parallaximg2  ml-auto md:mr-[18%] mr-[5%]  mt-[5%] md:h-[22rem] h-[16rem] md:w-[15rem] w-[8rem] transition-transform duration-500 ease-linear `}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
