import React, { useEffect, useRef } from 'react'
import Card, { Icard } from './Card'

const CoursesOffer = () => {
  const fakeCourseData: Icard[] = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E4uV4XLjClPiysUJ9IKbM5xf-zPfjlM7ew&usqp=CAU',
      title: 'Lorem ipsum dolor sit amet',
      author: 'By Arnold Swachger',
      rating: 4.7,
      price: 10,
    },
    {
      src: 'https://assets-global.website-files.com/5f75fe1dce99248be5a892db/643fca2691c09c6e05c64a03_Understanding-Blockchain-Scalability-Banner_V1.png',
      title: 'Another Book Title',
      author: 'By John Doe',
      rating: 3.5,
      price: 15,
    },
    {
      src: 'https://d.line-scdn.net/stf/linecorp/ja/pr/LINEBlockchain_main.png',
      title: 'A Third Book Title',
      author: 'By Jane Doe',
      rating: 4.2,
      price: 20,
    },
    {
      src: 'https://cdn.consensys.net/uploads/2022/05/31145801/blockchain-bridges-feature.png',
      title: 'Fourth Book Title',
      author: 'By Michael Johnson',
      rating: 4.0,
      price: 18,
    },
    {
      src: 'https://www.demandsage.com/wp-content/uploads/2022/07/Blockchain-Statistics-DemandSage-1024x576.png',
      title: 'Fifth Book Title',
      author: 'By Emily Williams',
      rating: 4.8,
      price: 12,
    },
    {
      src: 'https://assets-global.website-files.com/60f93c8e038fc32afa829f7d/64941694c32a3c2b9fe36a84_Enjin%20Blockchain%20-%20Press%20release%20header.png',
      title: 'Sixth Book Title',
      author: 'By Andrew Davis',
      rating: 4.5,
      price: 22,
    },
    {
      src: 'https://authena.io/wp-content/uploads/2020/12/2.jpg',
      title: 'Seventh Book Title',
      author: 'By Sarah Johnson',
      rating: 3.9,
      price: 16,
    },
    {
      src: 'https://dynamicmedia.accenture.com/is/image/accenture/accenture-hyperledger-blockchain-660x330?qlt=85&wid=1024&ts=1675236845354&$auto-png-alpha$&fit=constrain&dpr=off',
      title: 'Eighth Book Title',
      author: 'By James Smith',
      rating: 4.2,
      price: 19,
    },
    {
      src: 'https://i.ytimg.com/vi/Zw3O_QEVOKg/maxresdefault.jpg',
      title: 'Ninth Book Title',
      author: 'By Olivia Brown',
      rating: 4.6,
      price: 14,
    },
    {
      src: 'https://academy-public.coinmarketcap.com/optimized-uploads/2b6ccf98473b4996b7317829328f112c.png',
      title: 'Tenth Book Title',
      author: 'By Sam Smith',
      rating: 4.9,
      price: 25,
    },
  ]

  return (
    <div className=" containerizer rounded-b-3xl overflow-hidden">
      <div className={` min-h-screen flex w-full  bg-[#252525] `}>
        <section
          className={` w-[100vw]  relative  flex flex-col items-start justify-start md:pb-10 pb-20  pt-32 bg-[#252525]`}
        >
          <h1
            className={` pinnedContainer  w-[90%] mb-4 font-bold font-jakarta text-3xl text-start mx-auto  `}
          >
            Courses we offer
          </h1>
          <div
            className={`flex  items-center justify-start w-[90%] mx-auto bg-stone-700 rounded-2xl overflow-hidden  `}
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
              className={` w-full bg-stone-700 placeholder:text-white/70 text-lg font-thin py-1 px-2 rounded-md   focus:outline-none focus:border-none active:outline-none active:border-none `}
            />
          </div>

          {/* <div className={`  w-[90%] md:h-[70vh] h-max  mt-auto mx-auto `}>
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
          </div> */}

          <div className="md:w-[80%] w-full mx-auto md:px-20 px-10 grid md:grid-cols-5 grid-cols-2 my-[10%] items-center gap-y-10  ">
            {fakeCourseData?.map((data, idx) => {
              return <Card key={idx} {...data} />
            })}
          </div>
        </section>
      </div>
      <div className="bookk w-full h-40">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default CoursesOffer
