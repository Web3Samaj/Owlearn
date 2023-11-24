import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getAllEducators, getEducator } from '@/src/services/graph/graph'
import { CourseThumbnail } from '@/src/modules/course/CourseThumbnail'

type Course = {
  address: string
  name: string
  earned: number
  rating: number
  courseUri: string
}

// TODO: This page should be gated
// TODO: These temp value are for temporary use until we resolved the way to get these datas
const TEMP_EARNED = 7500
const TEMP_RATING = 4.8
const TEMP_TOTAL_STUDENTS = 9000

const Educator = () => {
  const [loading, setLoading] = React.useState(true)
  const [educatorName, setEducatorName] = React.useState('')
  const [educatorWalletAddr, setEducatorWalletAddr] = React.useState('')
  const [educatorCourses, setEducatorCourses] = React.useState<Course[]>([])
  const totalCourses = educatorCourses.length
  const router = useRouter()

  useEffect(() => {
    if (!router.query?.id) {
      return
    }
    getEducator(router.query.id as `0x${string}`).then((res) => {
      if (!res.data.educator) {
        router.push('/404')
        setLoading(false)
        return
      }
      setEducatorName(res.data.educator.username as string)
      setEducatorWalletAddr(res.data.educator.address as `0x${string}`)
      setEducatorCourses(
        res.data.educator.courses.map((val) => {
          return {
            address: val.address,
            name: val.name,
            earned: TEMP_EARNED,
            rating: TEMP_RATING,
            courseUri: val.courseURI,
          }
        })
      )
      setLoading(false)
    })
  }, [router.query?.id])

  function getEarnings() {
    // WILL have to make this a async function and will update later
    const earnArr = educatorCourses.map((val) => val.earned)
    return earnArr.reduce((acc, val) => acc + val, 0)
  }
  //have to make a useeffect to route to a 404 page if someone else other than xtry to access the page

  return (
    <div className=" flex flex-col bg-[#252525] text-white items-center font-jakarta justify-center w-full min-h-screen py-20 relative overflow-hidden">
      <h1 className={`w-full pl-[10%] text-xl `}>Hii,</h1>
      <h1 className={`w-full pl-[10%] text-4xl `}>{educatorName}</h1>
      <div className={`   w-full pl-[10%] mt-5 `}>
        <Link
          className={`  w-max cursor-pointer flex items-center justify-center gap-3 bg-lime-900 py-2 px-4 rounded-lg hover:bg-lime-800 hover:-translate-y-0.5 transition-all duration-200 ease-linear hover:shadow-md hover:shadow-black `}
          href={'/Publish'}
        >
          <img
            src={'/asset/manageCourse/add.png'}
            alt="icon"
            className={`  w-8 z-20 `}
          />
          <span className={`  cursor-pointer `}>Publish New Course</span>
        </Link>
      </div>

      <div
        className={`flex mt-8 mb-10 w-full justify-between px-[5%] md:px-[10%] `}
      >
        <div className={` flex flex-col items-center`}>
          <p className="truncate md:text-lg te  text-white/50">Your Courses</p>
          <p>{totalCourses} 📖</p>
        </div>
        <div className={` flex flex-col items-center`}>
          <p className="truncate md:text-lg te  text-white/50">
            Total Earnings
          </p>
          <p>${getEarnings()} 💶</p>
        </div>
        <div className={` flex flex-col items-center`}>
          <p className="truncate md:text-lg te  text-white/50">
            Total Students{' '}
          </p>
          <p>{TEMP_TOTAL_STUDENTS} 👩🏻‍🎓</p>
        </div>
      </div>

      <div className={`flex w-full flex-col items-center`}>
        {educatorCourses.map((val) => {
          return (
            <Link
              href={`/dashboard/${router.query?.id}/${val.address}`}
              key={val.address}
              className={`md:w-[70%] w-[90%] px-4 md:px-0 group rounded-md mt-3 overflow-hidden bg-stone-700 flex items-center flex-wrap hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200 ease-linear justify-between text-xl`}
            >
              <div
                className={`flex md:w-[30%] w-full justify-center md:justify-start mb-3 md:mb-0 mt-2 md:mt-0 items-center gap-5 `}
              >
                <CourseThumbnail uri={val.courseUri} />
                <p className="truncate text-base ">{val.name}</p>
              </div>
              <div className="flex items-center justify-between w-full md:w-[70%]">
                <div
                  className={`  w-full  md:truncate flex flex-col items-center`}
                >
                  <p className="truncate md:text-sm text-xs text-white/50">
                    Earned{' '}
                  </p>
                  <p className="truncate text-lg ">${val.earned}</p>
                </div>
                <div
                  className={`  w-full  md:truncate flex flex-col items-center`}
                >
                  <p className="truncate md:text-sm text-xs text-white/50">
                    Rated{' '}
                  </p>
                  <p className="truncate text-lg font-bold">{val.rating}</p>
                </div>
                <div
                  className={`flex  w-full  h-[4rem]  gap-5 items-center group-hover:bg-[#7209b7]  transition-all duration-300 ease-linear justify-center`}
                >
                  <p className=" md:text-sm text-xs font-bold">Manage Course</p>
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
  )
}

export default Educator
