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
  // const vidpannel = useRef<HTMLDivElement>(null!)

  const addInputRef = (ref: HTMLImageElement) => {
    if (ref && !inputRefs.current.includes(ref)) {
      inputRefs.current.push(ref)
    }
  }
  // console.log(inputRefs);
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
  // useEffect(() => {

  //   const pin = gsap.timeline({
  //     // yes, we can add it to an entire timeline!
  //     scrollTrigger: {
  //       trigger: vidpannel.current,
  //       pin: vidpannel.current,   // pin the trigger element while active
  //       start: "top top", // when the top of the trigger hits the top of the viewport
  //       end: "bottom bottom", // end after scrolling 500px beyond the start
  //       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //       markers: true,
  //       // endTrigger : b.current
  //     }
  //   });

  //   return ()=> {
  //     pin.kill()
  //   }

  // }, []);

  useEffect(() => {
    intervalfunc.current = () => {
      slidenum.current = slidenum.current + 1

      if (slidenum.current > rawData.length - 1) {
        slidenum.current = 0
      }
      const num = slidenum.current

      // document
      //   .getElementById(`${num}xxx`)
      //   .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })

      console.log(num)
      inputRefs.current.forEach((img, idx) => {
        if (num === idx) {
          img.style.transform = `translateY(0%)`
          heading.current.textContent = rawData[num].h
          paragaph.current.textContent = rawData[num].p
        } else {
          img.style.transform = `translateY(150%)`
        }
      })

      // document.getElementById(`${slidenum.current}xxx`).scrollIntoView({behavior : "smooth"})
    }

    intervalRef.current = setInterval(() => intervalfunc.current(), 4000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  // function nextslide() {
  //   slidenum.current = slidenum.current + 1

  //   if (slidenum.current > rawData.length - 1) {
  //     slidenum.current = 0
  //   }
  //   const num = slidenum.current

  //   document
  //     .getElementById(`${num}xxx`)
  //     .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
  //   heading.current.textContent = rawData[num].h
  //   paragaph.current.textContent = rawData[num].p
  // }
  // console.log(vidpannel.current.children.length);
  return (
    <div
      className={`flex  flex-col items-center w-full max-h-screen text-white min-h-screen  `}
    >
      <div
        className={`max-h-screen flex items-center  overflow-hidden relative bg-[#001219] bg-cover bg-absolute w-full bgimg px-24`}
      >
        <div
          className={`text-3xl absolute top-1/2 z-20 -translate-y-1/2 left-[50%] sm:left-[15%] -translate-x-1/2  bg-black/20 p-10 sm:pt-5 sm:text-center rounded-2xl sm:w-[25vw] backdrop-blur-md text-center`}
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
        {/* <button
          className={`z-10 hidden md:block absolute bottom-12 py-4 px-8 left-[50%] -translate-x-1/2 bg-purple-500 rounded-full`}
          onClick={() => nextslide()}
        >
          See More
        </button> */}
        <div
          // ref={vidpannel}
          className={` w-[100vw] pb-36   min-h-screen flex flex-col justify-between  items-end overflow-y-hidden scrollbar-hide md:pannel select-none relative transition-transform duration-500 `}
        >
          <img
            ref={(ref) => addInputRef(ref)}
            id="0xxx"
            src="asset/landing/1.png"
            alt="landingimg"
            loading="lazy"
            draggable="false"
            className={` translate-y-[0%]  absolute h-[70vh] mt-10 md:h-[62vh] w-full md:w-[75vw]  mx-auto md:mr-20 md:mt-40  rounded-3xl transition-transform duration-500 ease-linear `}
          />
          <img
            ref={(ref) => addInputRef(ref)}
            id="1xxx"
            src="asset/landing/2.png"
            alt="landingimg"
            loading="lazy"
            className={` translate-y-[150%] absolute  h-[70vh] mt-10 md:h-[62vh] w-full md:w-[75vw]  mx-auto md:mr-20 md:mt-40   rounded-3xl transition-transform duration-500 ease`}
          />
          <img
            ref={(ref) => addInputRef(ref)}
            id="2xxx"
            src="asset/landing/3.png"
            alt="landingimg"
            loading="lazy"
            className={` translate-y-[150%] absolute h-[70vh] mt-10 md:h-[62vh] w-full md:w-[75vw]  mx-auto md:mr-20 md:mt-40  rounded-3xl transition-transform duration-500 ease`}
          />
          <img
            ref={(ref) => addInputRef(ref)}
            id="3xxx"
            src="asset/landing/4.png"
            alt="landingimg"
            loading="lazy"
            className={` translate-y-[150%] absolute h-[70vh] mt-10 md:h-[62vh] w-full md:w-[75vw]  mx-auto md:mr-20 md:mt-40   rounded-3xl transition-transform duration-500 ease`}
          />
        </div>
      </div>
    </div>
  )
}

export default Overview
