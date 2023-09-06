import React, { useEffect, useRef } from 'react'
import Card, { Icard } from './Card'

const CoursesOffer = () => {
  const fakeCourseData: Icard[] = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E4uV4XLjClPiysUJ9IKbM5xf-zPfjlM7ew&usqp=CAU',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      author: 'By Arnold Swachger',
      rating: 4.7,
      price: 10,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
    officia accusantium recusandae aspernatur provident minus
    temporibus excepturi, labore, quaerat alias nam sint! Omnis
    eum consectetur deleniti? Quaerat dolorem, aperiam optio
    explicabo illo autem debitis accusamus quibusdam quod nesciunt
    odio ea nobis atque consequatur saepe nostrum! Adipisci saepe
    perferendis corporis porro.`,
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiP7puMad5vLzDeLx2OtB1V93rqQC293tRQ&usqp=CAU',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      author: 'By Arnold Swachger',
      rating: 4.7,
      price: 400,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
    officia accusantium recusandae aspernatur provident minus
    temporibus excepturi, labore, quaerat alias nam sint! Omnis
    eum consectetur deleniti? Quaerat dolorem, aperiam optio
    explicabo illo autem debitis accusamus quibusdam quod nesciunt
    odio ea nobis atque consequatur saepe nostrum! Adipisci saepe
    perferendis corporis porro.`,
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiP7puMad5vLzDeLx2OtB1V93rqQC293tRQ&usqp=CAU',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      author: 'By Arnold Swachger',
      rating: 4.7,
      price: 7890,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
    officia accusantium recusandae aspernatur provident minus
    temporibus excepturi, labore, quaerat alias nam sint! Omnis
    eum consectetur deleniti? Quaerat dolorem, aperiam optio
    explicabo illo autem debitis accusamus quibusdam quod nesciunt
    odio ea nobis atque consequatur saepe nostrum! Adipisci saepe
    perferendis corporis porro.`,
    },
  ]

  return (
    <div className=" containerizer rounded-b-3xl overflow-hidden">
      <div className={` min-h-screen flex w-[400vw]   bg-[#252525] `}>
        <section
          className={` w-[100vw]   flex flex-col items-start justify-start pb-10 pt-16 bg-[#252525]`}
        >
          <h1
            className={` pinnedContainer  w-[90%] mb-3 font-kabl text-3xl text-start mx-auto  `}
          >
            Courses we offer
          </h1>
          <div
            className={`flex  items-start justify-start w-[90%] mx-auto bg-stone-700 rounded-2xl overflow-hidden  `}
          >
            <img
              src="asset/landing/search.png"
              alt="searchimg"
              loading="lazy"
              draggable="false"
              className={`   h-[3rem] w-[3rem]  p-2  opacity-40`}
            />
            <input
              type="text"
              name="search"
              id=""
              placeholder="Patrik Collins Blockchain Course"
              className={` w-full bg-stone-700 placeholder:text-white/70 text-xl font-thin py-2 px-4 rounded-md   focus:outline-none focus:border-none active:outline-none active:border-none `}
            />
          </div>
          <div className={`  w-[90%] md:h-[70vh] h-max  mt-auto mx-auto `}>
            <div className=" w-full h-max md:h-full  p-4 flex  flex-wrap md:flex-nowrap gap-3 ">
              <div
                className={`bg-[#ff70a6] w-full h-full flex items-center justify-center px-10 py-10 rounded-xl `}
              >
                <Card {...fakeCourseData[0]} />
              </div>
              <div
                className={`bg-[#ffd670] w-full h-full flex items-center justify-center px-10 py-10 rounded-xl `}
              >
                <Card {...fakeCourseData[1]} />
              </div>
              <div
                className={`bg-[#5EF8BF] w-full h-full flex items-center justify-center px-10 py-10 rounded-xl `}
              >
                <Card {...fakeCourseData[2]} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CoursesOffer
