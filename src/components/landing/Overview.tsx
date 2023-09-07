import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Overview = () => {
  gsap.registerPlugin(ScrollTrigger)
  const heading = useRef<HTMLSpanElement>(null!)
  const paragaph = useRef<HTMLParagraphElement>(null!)
  const intervalRef = useRef<any>()
  const intervalfunc = useRef<any>()
  const slidenum = useRef<number>(0)
  const inputRefs = useRef<HTMLImageElement[]>([])

  const rawData = [
    {
      h: 'The Great Educators',
      p: 'Where Inspiration Meets Excellence in Every Lesson, Every Day, Everywhere',
    },
    {
      h: 'Recorded Lectures',
      p: 'Access Knowledge Anytime, Anywhere, at Your Own Pace. Empower Your Mind, Unlock Possibilities!',
    },
    {
      h: 'NFT Certificates & Badges',
      p: 'Elevate Your Achievements to Digital Art. Own, Showcase, and Trade Your Educational Milestones with Uniqueness and Value',
    },
    {
      h: 'Large Community Support',
      p: 'Together, We Thrive - Join Our Growing Network for Help, Inspiration, and a Sense of Belonging.',
    },
  ]

  const addInputRef = (ref: HTMLImageElement) => {
    if (ref && !inputRefs.current?.includes(ref)) {
      inputRefs.current?.push(ref)
    }
  }
  useEffect(() => {
    intervalfunc.current = () => {
      slidenum.current = slidenum.current + 1

      if (slidenum.current > rawData.length - 1) {
        slidenum.current = 0
      }
      const num = slidenum.current

      inputRefs.current?.forEach((img, idx) => {
        if (num === idx) {
          img.style.transform = `translateY(0%)`
          heading.current.textContent = rawData[num].h
          paragaph.current.textContent = rawData[num].p
        } else {
          img.style.transform = `translateY(200%)`
        }
      })
    }

    intervalRef.current = setInterval(() => intervalfunc.current(), 4000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div
      className={`flex  flex-col items-center w-full  text-white min-h-screen    `}
    >
      <div className={` font-kabl w-full ml-[20%] flex text-4xl pt-48`}>
        <img
          src={'/asset/landing/curl.png'}
          alt="icon"
          className={`  invert mix-blend-screen  rotate-180 transition-all duration-300 ease-linear w-20   `}
        />
        <span
          className={` bg-[#ffd60a] p-5 border-4 text-center border-dashed border-black rounded-full text-black tracking-wider`}
        >
          Expect
        </span>
      </div>
      <div
        className={`min-h-screen flex items-center  overflow-hidden relative bg-black bg-cover bg-absolute w-full md:px-24 px-5 pb-20 bgimg`}
      >
        <div
          className={`text-3xl absolute md:top-1/2 top-[70%] z-20 -translate-y-1/2 left-[50%] sm:left-[15%] -translate-x-1/2  bg-black/20 px-10 pb-10  sm:text-center rounded-2xl sm:w-[25vw] backdrop-blur-md text-center`}
        >
          <span ref={heading} className={`font-shadow mx-auto`}>
            {rawData[slidenum.current].h}
          </span>
          <p
            ref={paragaph}
            className={`text-sm font-sans text-white/70 pt-1.5`}
          >
            {rawData[slidenum.current].p}
          </p>
        </div>

        <div
          // ref={vidpannel}
          className={` w-[100vw] md:pb-36   min-h-screen flex flex-col justify-between  items-end overflow-hidden scrollbar-hide md:pannel select-none relative transition-transform duration-500 `}
        >
          <img
            ref={(ref: HTMLImageElement) => addInputRef(ref)}
            id="0xxx"
            src="asset/landing/1.png"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` translate-y-[0%]  absolute h-[50vh] mt-10 md:h-[62vh] w-[100vw] md:w-[75vw]  mx-auto md:mr-20 md:mt-40  rounded-3xl transition-transform duration-500 ease-linear `}
          />
          <img
            ref={(ref: HTMLImageElement) => addInputRef(ref)}
            id="1xxx"
            src="asset/landing/2.png"
            alt="landingimg"
            loading="lazy"
            className={`  md:translate-y-[150%] absolute  h-[50vh] mt-10 md:h-[62vh] w-full md:w-[75vw]  mx-auto md:mr-20 md:mt-40   rounded-3xl transition-transform duration-500 ease`}
          />
          <img
            ref={(ref: HTMLImageElement) => addInputRef(ref)}
            id="2xxx"
            src="asset/landing/3.png"
            alt="landingimg"
            loading="lazy"
            className={`  md:translate-y-[150%] absolute h-[50vh] mt-10 md:h-[62vh] w-full md:w-[75vw]  mx-auto md:mr-20 md:mt-40  rounded-3xl transition-transform duration-500 ease`}
          />
          <img
            ref={(ref: HTMLImageElement) => addInputRef(ref)}
            id="3xxx"
            src="asset/landing/4.png"
            alt="landingimg"
            loading="lazy"
            className={`  md:translate-y-[150%] absolute h-[50vh] mt-10 md:h-[62vh] w-full md:w-[75vw]  mx-auto md:mr-20 md:mt-40   rounded-3xl transition-transform duration-500 ease`}
          />
        </div>
      </div>
    </div>
  )
}

export default Overview
