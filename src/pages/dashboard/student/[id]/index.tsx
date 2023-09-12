import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'

const Student = () => {
  const router = useRouter()
  // {router?.query?.id}
  // const slides = useRef<html>
  const studentData = {
    name: 'Marry Marlow',
    email: 'merini@gmail.com',
    pfp: 'https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg',
    boughtCourses: [
      {
        id: 'djklj', // ormaybe only id and rest of the thing we can fetch from the db
        name: 'The Blockchain Course ',
        img: '',
        progress: '90%',
      },
      {
        id: 'AGFd',
        name: 'The python Course ',
        img: '',
        progress: '10%',
      },
      {
        id: 'ndai',
        name: 'The foundry Course ',
        img: '',
        progress: '40%',
      },
      {
        id: 'gdiia',
        name: 'The Chainlink Course ',
        img: '',
        progress: '80%',
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
        <div className=" flex  flex-col items-center justify-start bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 gap-2  w-full  py-4 lg:px-8 px-4 rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200 ease-linear cursor-pointer ">
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
            <img
              src={`/asset/manageCourse/chart.png`}
              alt="chart"
              className={` invert  lg:h-20 h-12   p-2.5   rounded-md`}
            />
          </div>
        </div>

        <div className=" flex  flex-col items-center justify-start bg-gradient-to-r from-rose-400 to-orange-300 gap-2 w-full py-4 lg:px-8 px-4 rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200 ease-linear cursor-pointer ">
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
            <img
              src={`/asset/manageCourse/chart.png`}
              alt="chart"
              className={` invert  lg:h-20 h-12   p-2.5   rounded-md`}
            />
          </div>
        </div>

        <div className=" flex  flex-col items-center justify-start bg-gradient-to-r from-teal-500 to-lime-500 gap-2 w-full py-4 lg:px-8 px-4 rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200 ease-linear cursor-pointer">
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
            <img
              src={`/asset/manageCourse/chart.png`}
              alt="chart"
              className={` invert  lg:h-20 h-12   p-2.5   rounded-md`}
            />
          </div>
        </div>
      </div>

      <div
        className={`w-[100vw] overflow flex items-center min-h-max bg-blue-500  `}
      >
        <div className={`min-w-[100vw] min-h-[50vh] bg-red-500 `}></div>
        <div className={`min-w-[100vw] min-h-[50vh] bg-amber-500`}></div>
        <div className={`min-w-[100vw] min-h-[50vh] bg-purple-500`}></div>
      </div>
    </div>
  )
}

export default Student
