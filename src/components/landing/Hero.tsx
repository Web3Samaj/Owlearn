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
        scrub: 0.05,
      },
      y: -250,
    })
  }, [])

  return (
    <div
      ref={parentHeroRef}
      className={`w-full min-h-screen flex flex-col items-center justify-center bg-black relative `}
    >
      <div
        className={`font-kabl md:text-9xl text-6xl absolute md:top-[40%] top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 tracking-widest font-bold flex flex-col items-center justify-center text-center  bg-black/40 md:bg-transparent py-2 px-4 rounded-xl md:rounded-none backdrop-blur-md md:backdrop-blur-none text-white `}
      >
        <div className={` mr-auto ml-[20%] w-[90%]  flex`}>
          <img
            src={'/asset/landing/pointer.png'}
            alt="icon"
            className={` hidden md:block invert mix-blend-screen  rotate-180 transition-all duration-300 ease-linear w-20   `}
          />
          <span
            className={` md:text-2xl text-base font-reeni tracking-tight mr-auto`}
          >
            Step 1 : Be an
          </span>

          <span
            className={` p-3 flex items-center gap-5 justify-center ml-[10%] mt-auto `}
          >
            <span
              className={` md:text-xl text-sm tracking-tighter flex font-reeni `}
            >
              Step 3 : 👇 Apply those skills in job and
            </span>
            <img
              src="/asset/landing/coin.png"
              alt="circle"
              className="md:w-10 w-6  "
            />
          </span>
        </div>

        <div className={`flex items-center justify-center `}>
          <span
            className={`bg-[#5EF8BF] p-3 border-4 border-dashed border-black rounded-full text-black`}
          >
            Owl
          </span>
          <span className={`  flex  `}>earn</span>
        </div>

        <div className={` w-full flex flex-col`}>
          <img
            src={'/asset/landing/underline.png'}
            alt="icon"
            className={` hidden md:block invert mix-blend-screen rotate-180 transition-all ml-auto duration-300 ease-linear w-[70%]  z-10`}
          />
          <span
            className={` ml-auto md:text-3xl text-base font-reeni tracking-tight mr-auto`}
          >
            Step 2 : 👆
          </span>
        </div>
        <p
          className={`md:text-xl  text-sm  md:mt-8 mt-4 font-mono font-thin  tracking-wider text-white/70 `}
        >
          {' '}
          A Decentralized EdTech That Ignites Your Curiosity and Fuels Your
          Educational Journey to New Heights
        </p>
      </div>

      <div
        className={`parallaxdiv w-full md:z-20  flex py-20 flex-col relative `}
      >
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

        <div className={`flex w-full z-20 justify-between items-center`}>
          <img
            src="asset/landing/cod.jpeg"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` parallaximg2 rounded-3xl ml-[2%]   md:h-[10rem] h-[6rem] w-[8rem] md:w-[17rem] -rotate-12  transition-transform duration-500 ease-linear `}
          />
          <img
            src="asset/landing/profits.png"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` parallaximg rounded-3xl ml-[2%]   md:h-[19rem] h-[6rem] w-[8rem] md:w-[15rem] -rotate-12  transition-transform duration-500 ease-linear `}
          />
          {/* <video
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
          </video> */}
        </div>
        <div className={`flex z-20`}>
          <img
            src="asset/landing/cap.png"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` parallaximg md:ml-[5%] ml-[2%] mt-[5%]  h-[7rem]  md:w-[10rem] w-[5rem]  transition-transform duration-500 ease-linear `}
          />
          <img
            src="asset/landing/h3.avif"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` parallaximg md:ml-[7%] ml-[6%] mt-[10%]  md:h-[19rem] h-[12rem] md:w-[15rem] w-[10rem]  transition-transform duration-500 ease-linear `}
          />
          <img
            src="asset/landing/bag.png"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={`  parallaximg2  ml-auto md:mr-[18%] mr-[5%]  mt-[5%] md:h-[10rem] h-[10rem] md:w-[10rem] w-[8rem] transition-transform duration-500 ease-linear `}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
