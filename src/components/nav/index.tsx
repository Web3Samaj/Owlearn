import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import AuthButton from '@/modules/auth/components/AuthButton'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div
      className={`z-50 flex fixed flex-col items-center   transition-all duration-500 ease-linear  min-h-screen w-max `}
    >
      <div
        className={`  flex flex-col items-center justify-between  min-h-screen  rounded-r-md bg-black/90 backdrop-blur-sm transition-all duration-100 ease-linear relative ${
          open ? 'w-[12rem]' : 'w-[0rem]'
        } `}
      >
        <div
          onClick={() => setOpen((prev) => !prev)}
          className={`bg-stone-800 w-max rounded-full absolute  cursor-pointer top-5 transition-all duration-150 ease-linear ${
            open ? 'left-[14rem]' : 'left-20'
          }`}
        >
          {open ? (
            <img src="/asset/nav/left.png" alt="icon" className={` w-8 p-2 `} />
          ) : (
            <img
              src="/asset/nav/right.png"
              alt="icon"
              className={` w-8 p-2 `}
            />
          )}
        </div>

        <div
          onClick={() => setOpen((prev) => !prev)}
          className={`bg-stone-700 gap-3 py-5    flex ${
            open
              ? 'flex-row-reverse w-[100%]'
              : 'flex-col absolute  w-[4.5rem] md:w-22 h-20 top-0 left-0 pr-2  z-20 rounded-r-full '
          } items-center justify-center cursor-pointer   `}
        >
          <span
            className={`text-semibold transition-all duration-300 ease-linear px-2.5 ${
              open ? 'text-xl' : 'text-xs md:px-1  '
            }`}
          >
            Owlearn
          </span>
          <img src="/asset/nav/owl.png" alt="img" className={`w-8`} />
        </div>

        <div className={` flex flex-col w-full px-4`}>
          <Link
            onClick={() => setOpen(false)}
            className={`  cursor-pointer w-full my-7 flex items-center justify-center  group `}
            href={'/'}
          >
            <img
              src={'/asset/nav/home.png'}
              alt="icon"
              className={` group-hover:scale-110  transition-all duration-300 ease-linear w-8 z-20 `}
            />
            <span
              className={` bg-black w-full text-center z-10 mt-1 group-hover:bg-white group-hover:text-black rounded-md mx-2 transition-all duration-300 ease-linear ${
                open ? 'block' : 'scale-0 hidden'
              }`}
            >
              Home
            </span>
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className={`  cursor-pointer w-full my-7 flex items-center justify-center  group `}
            href={'/dashboard'}
          >
            <img
              src={'/asset/nav/dash.png'}
              alt="icon"
              className={` group-hover:scale-110  transition-all duration-300 ease-linear w-8 z-20 `}
            />
            <span
              className={` bg-black w-full text-center z-10 mt-1 group-hover:bg-white group-hover:text-black rounded-md mx-2 transition-all duration-300 ease-linear ${
                open ? 'block' : 'scale-0 hidden'
              }`}
            >
              Dashboard
            </span>
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className={`  cursor-pointer w-full my-7 flex items-center justify-center  group `}
            href={'/Publish'}
          >
            <img
              src={'/asset/nav/publish.png'}
              alt="icon"
              className={` group-hover:scale-110  transition-all duration-300 ease-linear w-8 z-20 `}
            />
            <span
              className={` bg-black w-full text-center z-10 mt-1 group-hover:bg-white group-hover:text-black rounded-md mx-2 transition-all duration-300 ease-linear ${
                open ? 'block' : 'scale-0 hidden'
              }`}
            >
              Publish
            </span>
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className={`  cursor-pointer w-full my-7 flex items-center justify-center  group `}
            href={'/MyCourses'}
          >
            <img
              src={'/asset/nav/book.png'}
              alt="icon"
              className={` group-hover:scale-110  transition-all duration-300 ease-linear w-8 z-20 `}
            />
            <span
              className={` bg-black w-full text-center z-10 mt-1 group-hover:bg-white group-hover:text-black rounded-md mx-2 transition-all duration-300 ease-linear ${
                open ? 'block' : 'scale-0 hidden'
              }`}
            >
              My Courses
            </span>
          </Link>
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className={`bg-stone-700   cursor-pointer gap-3 py-5 flex text-black  w-full items-center justify-center ${
            open ? 'flex-row-reverse' : 'flex-col'
          }`}
        >
          {open && <AuthButton />}
          <img src="/asset/nav/log.png" alt="img" className={`w-8`} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
