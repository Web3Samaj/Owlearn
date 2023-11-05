import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const MyCourses = () => {
  const router = useRouter()
  // {router?.query?.id}
  const slides = useRef<HTMLDivElement>(null!)
  const studentData = {
    name: 'Marry Marlow',
    email: 'merini@gmail.com',
    pfp: 'https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg',
    boughtCourses: [
      {
        id: 'djklj', // ormaybe only id and rest of the thing we can fetch from the db
        name: 'The Blockchain Course ',
        img: 'https://assets-global.website-files.com/5f75fe1dce99248be5a892db/643fca2691c09c6e05c64a03_Understanding-Blockchain-Scalability-Banner_V1.png',
        progress: 90,
      },
      {
        id: 'aljh',
        name: 'The python Course ',
        img: 'https://d.line-scdn.net/stf/linecorp/ja/pr/LINEBlockchain_main.png',
        progress: 19,
      },
      {
        id: 'ndai',
        name: 'The foundry Course ',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E4uV4XLjClPiysUJ9IKbM5xf-zPfjlM7ew&usqp=CAU',
        progress: 40,
      },
      {
        id: 'gdiia',
        name: 'The Chainlink Course ',
        img: 'https://academy-public.coinmarketcap.com/optimized-uploads/2b6ccf98473b4996b7317829328f112c.png',
        progress: 80,
      },
    ],

    nfts: [
      {
        id: 'dsjkhf',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7788HkJ6QXoBor0X_1Ec5-jP5XIOsa_XbBZN_TEMSrdJFqERToeh_QIvJaK8WmENaWc&usqp=CAU',
      },
      {
        id: 'iygd9',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_CrApoIREnsaRDYP08wm5uUccAAFi_pi6w&usqp=CAU',
      },
      {
        id: 'ia8b',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Bc7yghhkM_ktrSmjdu5FRlB0uG5xLN4inw&usqp=CAU',
      },
      {
        id: 'dsjdakhf',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1F_9vEZt_WKNQNDYaF28G7dNjazLK-0pHsw&usqp=CAU',
      },
      {
        id: '8dys',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Yaqd33gypx-saKrKnml_numj3bE6MBgUxBbEJ_yFggA-ibc8wA7kQaJCcY_7W2dKdBs&usqp=CAU',
      },
      {
        id: 'jaks',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xTSC6LxkBGTT-nosr6sb_MekBIBbN4GxJg&usqp=CAU',
      },
    ],

    assignments: [
      {
        id: 'mhiv',
        pdf: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xTSC6LxkBGTT-nosr6sb_MekBIBbN4GxJg&usqp=CAUhnks',
      },
      {
        id: 'adkbjc',
        pdf: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xTSC6LxkBGTT-nosr6sb_MekBIBbN4GxJg&usqp=CAUskjhd',
      },
      {
        id: 'dsgan',
        pdf: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xTSC6LxkBGTT-nosr6sb_MekBIBbN4GxJg&usqp=CAUsdkh',
      },
    ],
  }

  function manageSlides(val: number) {
    if (!slides.current) return
    slides.current.style.transform = `translateX(${val * -100}%)`
  }
  return (
    <div className=" flex flex-col items-center justify-start w-full font-jakarta min-h-screen md:py-20 py-16 md:px-10 px-5  bg-[#252525]">
      <div className=" flex flex-wrap items-center justify-center w-full gap-5  ">
        <img
          src={studentData.pfp}
          alt="pfp"
          className={` transition-all duration-300 ease-linear  h-16 w-16  rounded-full  `}
        />
        <div>
          <h1 className=" md:text-3xl text-2xl  ">
            {' '}
            Hello!, {studentData.name}
          </h1>
          <h1 className=" md:text-sm text-xs text-white/60  ">
            {studentData.email}
          </h1>
        </div>

        <div
          className={`flex md:w-[50%] w-[70%]  items-center justify-start  md:ml-auto mx-auto bg-stone-700 rounded-2xl overflow-hidden  `}
        >
          <img
            src="/asset/landing/search.png"
            alt="searchimg"
            loading="lazy"
            draggable="false"
            className={`   h-[3rem] w-[3rem]  p-2  opacity-40`}
          />
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search Your Courses"
            className={` w-full bg-stone-700 placeholder:text-white/70 text-base font-thin py-1 px-2 rounded-md   focus:outline-none focus:border-none active:outline-none active:border-none `}
          />
        </div>

        <div className=" hidden flex-row lg:flex items-center justify-center  gap-2  ">
          <img
            src="/asset/manageCourse/bell.png"
            alt="searchimg"
            loading="lazy"
            draggable="false"
            className={`  h-10 cursor-pointer  p-2.5 rounded-full border-dashed border border-white  `}
          />
          <img
            src="/asset/manageCourse/edit.png"
            alt="searchimg"
            loading="lazy"
            draggable="false"
            className={`  invert  h-10 cursor-pointer  p-2.5 rounded-full border-dashed border border-black  `}
          />
        </div>
      </div>

      <div className=" grid md:grid-cols-3 grid-cols-1 gap-5  items-center justify-between   w-full px-10 pt-10 pb-7 ">
        <div
          onClick={() => manageSlides(0)}
          className=" flex  flex-col items-center justify-start bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 gap-2  w-full  py-4 lg:px-8 px-4 rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200 ease-linear cursor-pointer "
        >
          <div className=" flex items-center justify-start gap-2 md:gap-5  w-full ">
            <img
              src={`/asset/manageCourse/book.png`}
              alt="book"
              className={` border-dashed border-2 border-white  lg:h-16 h-12  p-2.5   rounded-xl`}
            />
            <div className="truncate flex flex-col items-start justify-center  ">
              <p className="  md:text-xl text-lg  text-white/90 ">Courses</p>
              <p className=" text-xs text-white/50 py-1  ">View ✧</p>
            </div>
          </div>

          <div className=" flex  items-center md:justify-around justify-between  mt-2 w-full ">
            <p className=" truncate md:text-4xl text-4xl  font-bold ">
              {studentData.boughtCourses.length} Courses
            </p>
            {/* <img
              src={`/asset/manageCourse/chart.png`}
              alt="chart"
              className={` invert  lg:h-20 h-12   p-2.5   rounded-md`}
            /> */}
          </div>
        </div>

        <div
          onClick={() => manageSlides(1)}
          className=" flex  flex-col items-center justify-start bg-gradient-to-r from-rose-400 to-orange-300 gap-2 w-full py-4 lg:px-8 px-4 rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200 ease-linear cursor-pointer "
        >
          <div className=" flex items-center justify-start gap-2 md:gap-5  w-full ">
            <img
              src={`/asset/manageCourse/nft.png`}
              alt="book"
              className={` border-dashed border-2 border-white lg:h-16 h-12   p-2.5   rounded-xl`}
            />
            <div className=" truncate flex flex-col items-start justify-center  ">
              <p className="  md:text-xl text-lg  text-white/90 ">Total NFTs</p>
              <p className=" text-xs text-white/50 py-1  ">View ✧</p>
            </div>
          </div>

          <div className=" flex  items-center md:justify-around justify-between  mt-2 w-full ">
            <p className=" truncate md:text-3xl text-xl  font-bold ">
              {studentData.nfts.length} NFTs & Certificates
            </p>
            {/* <img
              src={`/asset/manageCourse/chart.png`}
              alt="chart"
              className={` invert  lg:h-20 h-12   p-2.5   rounded-md`}
            /> */}
          </div>
        </div>

        <div
          onClick={() => manageSlides(2)}
          className=" flex  flex-col items-center justify-start bg-gradient-to-r from-teal-500 to-lime-500 gap-2 w-full py-4 lg:px-8 px-4 rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200 ease-linear cursor-pointer"
        >
          <div className=" flex items-center justify-start gap-1 md:gap-5  w-full ">
            <img
              src={`/asset/manageCourse/hw.png`}
              alt="book"
              className={` border-dashed border-2 border-white  lg:h-16 h-12   p-2.5   rounded-xl`}
            />
            <div className=" flex flex-col items-start justify-center truncate  ">
              <p className="  md:text-xl text-lg  text-white/90 ">
                Assignments
              </p>
              <p className=" text-xs text-white/50 py-1  ">View ✧</p>
            </div>
          </div>

          <div className=" flex  items-center md:justify-around justify-between  mt-2 w-full ">
            <p className=" truncate md:text-4xl text-4xl  font-bold ">8 PDFs</p>
            {/* <img
              src={`/asset/manageCourse/chart.png`}
              alt="chart"
              className={` invert  lg:h-20 h-12   p-2.5   rounded-md`}
            /> */}
          </div>
        </div>
      </div>

      <div
        ref={slides}
        className={`w-[100vw]  flex items-start min-h-maxtransition-transform duration-200 ease-linear  `}
      >
        <div className={`min-w-[100vw] min-h-[50vh]   `}>
          <p className="truncate md:text-3xl text-xl pt-10 pb-5 md:px-20 px-10 text-white/50">
            Your Courses
          </p>
          <div className={`flex w-full flex-col items-center`}>
            {studentData.boughtCourses.map((val) => {
              return (
                <Link
                  href={`/watch-course/${val.id}`}
                  key={val.id}
                  className={`md:w-[70%] w-[90%] px-4 md:px-0 group rounded-md mt-3 overflow-hidden bg-stone-700 flex items-center flex-wrap hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200 ease-linear justify-between text-xl`}
                >
                  <div
                    className={`flex md:w-[30%] w-full justify-center md:justify-start mb-3 md:mb-0 mt-2 md:mt-0 items-center gap-5 `}
                  >
                    <img
                      src={val.img}
                      alt="courseimg"
                      loading="lazy"
                      draggable="false"
                      className={` md:rounded-md rounded-xl px-2 w-[5rem]`}
                    />
                    <p className="truncate text-base ">{val.name}</p>
                  </div>
                  <div className="flex items-center justify-between w-full md:w-[70%]">
                    <div
                      className={`  w-full  md:truncate flex flex-col items-start md:px-10 px-2 `}
                    >
                      <p className="truncate md:text-sm text-xs pb-2 text-white/50">
                        Progress
                      </p>
                      <p className="truncate w-[100%] h-[0.3rem] bg-stone-600  ">
                        <div
                          style={{ width: val.progress + '%' }}
                          className={` m-0 p-0 min-h-[0.5rem] bg-[#5EF8BF]   `}
                        ></div>
                      </p>
                    </div>

                    <div
                      className={`flex  w-full  h-[4rem]  gap-5 items-center group-hover:bg-[#5EF8BF]   transition-all duration-300 ease-linear justify-center`}
                    >
                      <p className=" md:text-sm text-xs font-bold group-hover:text-black">
                        Watch Course
                      </p>
                      <img
                        src={'/asset/landing/next.png'}
                        alt="icon"
                        className={` hidden md:block transition-all duration-300 ease-linear w-8 rounded-full cursor-pointer `}
                        draggable="false"
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <div className={`min-w-[100vw] min-h-[50vh] `}>
          <p className="truncate md:text-3xl text-xl pt-10 pb-5 md:px-20 px-10 text-white/50">
            Your NFTs
          </p>
          <div
            className={`w-full grid overflow-y-scroll md:grid-cols-4 auto-rows-max  md:px-20 px-10  grid-cols-2`}
          >
            {studentData.nfts.map((data) => {
              return (
                <div key={data.id} className={`w-full py-2   `}>
                  <img
                    src={data.url}
                    alt="icon"
                    className={` w-[90%] mx-auto cursor-pointer transition-all duration-200 ease-linear hover:-translate-y-1 hover:shadow-lg hover:shadow-black `}
                    draggable="false"
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className={`min-w-[100vw] min-h-[50vh] `}>
          <p className="truncate md:text-3xl text-xl pt-10 pb-5 md:px-20 px-10 text-white/50">
            Saved Assignments
          </p>
          <div className={`w-full flex flex-col md:px-20 px-10  grid-cols-2`}>
            {studentData.assignments.map((data) => {
              return (
                <div key={data.id} className={`w-full py-2  `}>
                  <p className={`text-xs text-white     `}>{data.pdf}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCourses
