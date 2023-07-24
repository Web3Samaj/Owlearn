import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const navArgs = [
    { to: 'Home', img: '/asset/nav/home.png', byPath: '/' },
    { to: 'Course', img: '/asset/nav/course.png', byPath: '/Course' },
    { to: 'Publish', img: '/asset/nav/publish.png', byPath: '/Publish' },
    { to: 'Setting', img: '/asset/nav/setting2.png', byPath: '/Setting' },
    { to: 'Contact Us', img: '/asset/nav/contact.png', byPath: '/ContactUs' },
  ]

  return (
    <nav
      className={`z-50 flex flex-col  fixed top-0 items-start justify-start w-full  overflow-hidden transition-all duration-500 ease-linear  `}
    >
      <div
        className={` flex flex-col items-center justify-between  h-[90vh]   w-[4rem]  rounded-r-md bg-black/90 backdrop-blur-sm`}
      >
        <div
          className={`select-none flex flex-col px-4 items-center w-full h-full  group`}
        >
          {navArgs &&
            navArgs.map((nav, idx) => {
              return (
                <Link
                  scroll={false}
                  className={` w-full my-4 transition hover:font-orbitron hover:delay-none  `}
                  href={nav.byPath}
                  key={idx}
                >
                  <img src={nav.img} alt="icon" />
                </Link>
              )
            })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
