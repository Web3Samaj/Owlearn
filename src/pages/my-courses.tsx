import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getEnrolledCourses } from '@/src/services/graph/graph'
import { useAccount } from 'wagmi'
import { fetchCourseData } from '../utils'

type Course = {
  id: `0x${string}`
  title: string
  uri: string
  progress: number
  certificateURI: string
}

// TODO: This page should be gated
// TODO: These temp value are for temporary use until we resolved the way to get these datas
const TEMP_EMAIL = 'merini@gmail.com'
const TEMP_PFP =
  'https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg'
const TEMP_ASSIGNMENTS = [
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
]

const MyCourses = () => {
  const { address } = useAccount()
  const [name, setName] = useState<string>('')
  const [courses, setCourses] = useState<Course[]>([])
  useEffect(() => {
    if (!address) return
    getEnrolledCourses(address).then((res) => {
      if (!res.data.user) return
      setName(res.data.user.username)
      const data = res.data.user.enrolledCourses.map((course) => {
        return {
          id: course.id,
          title: course.name,
          uri: course.courseURI,
          progress: 0,
          certificateURI: course.certificate.certificateBaseURI,
        } as Course
      })
      if (data && data.length > 0) {
        setCourses(data)
      }
    })
  }, [address])
  const slides = useRef<HTMLDivElement>(null!)

  function manageSlides(val: number) {
    if (!slides.current) return
    slides.current.style.transform = `translateX(${val * -100}%)`
  }
  return (
    <div className=" flex flex-col items-center justify-start w-full font-jakarta min-h-screen md:py-20 py-16 md:px-10 px-5  bg-[#252525]">
      <div className=" flex flex-wrap items-center justify-center w-full gap-5  ">
        <img
          src={TEMP_PFP}
          alt="pfp"
          className={` transition-all duration-300 ease-linear  h-16 w-16  rounded-full  `}
        />
        <div>
          <h1 className=" md:text-3xl text-2xl  "> Hello!, {name}</h1>
          <h1 className=" md:text-sm text-xs text-white/60  ">{TEMP_EMAIL}</h1>
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
              {courses.length} Courses
            </p>
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
              {courses.length} NFTs & Certificates
            </p>
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
            {courses.map((val) => {
              return (
                <Link
                  href={`/watch-course/${val.id}`}
                  key={val.id}
                  className={`md:w-[70%] w-[90%] px-4 md:px-0 group rounded-md mt-3 overflow-hidden bg-stone-700 flex items-center flex-wrap hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200 ease-linear justify-between text-xl`}
                >
                  <div
                    className={`flex md:w-[30%] w-full justify-center md:justify-start mb-3 md:mb-0 mt-2 md:mt-0 items-center gap-5 `}
                  >
                    <CourseThumbnail uri={val.uri} />
                    <p className="truncate text-base ">{val.title}</p>
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
            {courses.map((data) => {
              return (
                <div key={data.id} className={`w-full py-2   `}>
                  <img
                    src={data.certificateURI}
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
            {TEMP_ASSIGNMENTS.map((data) => {
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

function CourseThumbnail({ uri }: { uri: string }) {
  const [src, setSrc] = useState<string>('')
  useEffect(() => {
    fetchCourseData(uri).then((res) => {
      setSrc(res.thumbnailURI)
    })
  }, [uri])
  return (
    <img
      src={src}
      alt="courseimg"
      loading="lazy"
      draggable="false"
      className={` md:rounded-md rounded-xl px-2 w-[5rem]`}
    />
  )
}

export default MyCourses
