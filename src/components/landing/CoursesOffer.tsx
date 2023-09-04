import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const CoursesOffer = () => {
  const fakeCourseData = [{}]

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    function getScrollAmount() {
      const conatainerWidth =
        document.querySelector('.containerizer')?.scrollWidth
      if (!conatainerWidth) return
      return -(conatainerWidth - window.innerWidth)
    }
    const sections = gsap.utils.toArray('.horizon')
    const pin = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.containerizer',
        pin: true,
        start: 'top top',
        end: () => `+=${(getScrollAmount() as number) * -1}`,
        scrub: 1,
      },
    })
    return () => {
      pin.kill()
    }
  }, [])

  return (
    <div className="overflow-hidden">
      <div className={`containerizer min-h-screen flex w-max   bg-[#252525] `}>
        <section
          className={`horizon w-[100vw] flex flex-col items-start justify-start py-10 bg-[#252525]`}
        >
          <h1 className={` font-shadow text-7xl text-center w-full `}>
            Courses
          </h1>

          <div className={` w-[50vw] py-8  px-20 `}>
            <div
              className={` bg-white min-h-max text-black backdrop-blur-sm rounded-md overflow-hidden  flex flex-col`}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E4uV4XLjClPiysUJ9IKbM5xf-zPfjlM7ew&usqp=CAU"
                alt="courseimg"
                loading="lazy"
                draggable="false"
              />
              <div className={`w-full px-4 `}>
                <h1
                  className={`w-full flex-wrap text-3xl py-2 tracking-tight font-mono leading-8 `}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </h1>
                <p className={`text-sm text-black/80 font-reeni pt-1`}>
                  By Arnold Swachger
                </p>
                <p className={`text-sm font-bold py-1 mb-1`}>
                  4.7 🌟🌟🌟🌟🌟 (2,000+)
                </p>

                <span className="text-red-950 font-bold text-xl mr-3 pt-1 ">
                  $40{' '}
                </span>

                <span
                  className={`bg-red-500 text-white py-1 px-3 text-xs rounded   `}
                >
                  Bestseller
                </span>
                <p className={`text-sm text-black/60 font-sans py-3`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  officia accusantium recusandae aspernatur provident minus
                  temporibus excepturi, labore, quaerat alias nam sint! Omnis
                  eum consectetur deleniti? Quaerat dolorem, aperiam optio
                  explicabo illo autem debitis accusamus quibusdam quod nesciunt
                  odio ea nobis atque consequatur saepe nostrum! Adipisci saepe
                  perferendis corporis porro.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`horizon w-[100vw] bg-blue-500`}>
          this is the section 2
        </section>
        <section className={`horizon w-[100vw] bg-green-500`}>
          this is the section 3
        </section>
      </div>
    </div>
  )
}

export default CoursesOffer
