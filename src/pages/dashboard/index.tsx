import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Educator = () => {
  const data = {
    id: 'abc',
    name: 'Patrik Collins',
    totalCourses: 5,
    totalStudents: 8998,
    walletAddr: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',

    courses: [
      {
        id: 7863,
        name: 'Blockchain 32hr Course',
        courseid: 9543849,

        earned: 8000,
        rating: 4.8,
        previewimg:
          'https://assets-global.website-files.com/5f75fe1dce99248be5a892db/643fca2691c09c6e05c64a03_Understanding-Blockchain-Scalability-Banner_V1.png',
      },
      {
        id: 5726,
        name: 'Auditing Course',
        courseid: 923474,
        earned: 4000,
        rating: 4.2,
        previewimg:
          'https://d.line-scdn.net/stf/linecorp/ja/pr/LINEBlockchain_main.png',
      },
      {
        id: 3874,
        name: 'Foundry Course',
        courseid: 3894765,
        earned: 5600,
        rating: 3.8,
        previewimg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E4uV4XLjClPiysUJ9IKbM5xf-zPfjlM7ew&usqp=CAU',
      },
      {
        id: 9844,
        name: 'Python Course',
        courseid: 740938,
        earned: 5800,
        rating: 4.4,
        previewimg:
          'https://academy-public.coinmarketcap.com/optimized-uploads/2b6ccf98473b4996b7317829328f112c.png',
      },
      {
        id: 3984,
        name: 'Chainlink Course',
        courseid: 64378,
        earned: 4600,
        rating: 4.1,
        previewimg: 'https://i.ytimg.com/vi/Zw3O_QEVOKg/maxresdefault.jpg',
      },
    ],
  }
  const router = useRouter()

  function getEarnings() {
    // WILL have to make this a async function and will update later
    const earnArr = data.courses.map((val) => val.earned)
    return earnArr.reduce((acc, val) => acc + val, 0)
  }
  //have to make a useeffect to route to a 404 page if someone else other than xtry to access the page

  return (
    <div className=" flex flex-col bg-[#252525] text-white items-center font-jakarta justify-center w-full min-h-screen py-20 relative overflow-hidden">
      <h1 className={`w-full pl-[10%] text-xl `}>Hii,</h1>
      <h1 className={`w-full pl-[10%] text-4xl `}>{data?.name}</h1>
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
          <p>{data.totalCourses} 📖</p>
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
          <p>{data.totalStudents} 👩🏻‍🎓</p>
        </div>
      </div>

      <div className={`flex w-full flex-col items-center`}>
        {data.courses.map((val) => {
          return (
            <Link
              href={`/dashboard/educator/${router.query?.id}/${val.courseid}`}
              key={val.id}
              className={`md:w-[70%] w-[90%] px-4 md:px-0 group rounded-md mt-3 overflow-hidden bg-stone-700 flex items-center flex-wrap hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200 ease-linear justify-between text-xl`}
            >
              <div
                className={`flex md:w-[30%] w-full justify-center md:justify-start mb-3 md:mb-0 mt-2 md:mt-0 items-center gap-5 `}
              >
                <img
                  src={val.previewimg}
                  alt="courseimg"
                  loading="lazy"
                  draggable="false"
                  className={` md:rounded-md rounded-xl px-2 w-[5rem]`}
                />
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
