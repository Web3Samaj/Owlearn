import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const navArgs = [
    { to: 'Home', img: '/asset/nav/home.png', byPath: '/' },
    { to: 'Dashboard', img: '/asset/nav/dash.png', byPath: '/Dashboasrd' },
    { to: 'Publish', img: '/asset/nav/publish.png', byPath: '/Publish' },
    { to: 'Course', img: '/asset/nav/book.png', byPath: '/Course' },
    // { to: 'Contact Us', img: '/asset/nav/contact.png', byPath: '/ContactUs' },
  ]

  return (
    <div
      className={`z-50 flex flex-col absolute  items-center   transition-all duration-500 ease-linear  min-h-screen `}
    >
      <div
        className={`  flex flex-col items-center justify-between  h-full  rounded-r-md bg-black/90 backdrop-blur-sm py-10`}
      >
        <div className={``}>
          <span>Owlearn</span>
          <img src="/asset/nav/owl.png" alt="img" className={`w-8`} />
        </div>
        <div className={` flex flex-col min-h-[20rem] `}>
          <Link className={` my-7`} href={'/'}>
            <img src={'/asset/nav/home.png'} alt="icon" className={`w-6 `} />
          </Link>
          <Link className={` my-7`} href={'/'}>
            <img src={'/asset/nav/home.png'} alt="icon" className={`w-6 `} />
          </Link>
          <Link className={` my-7`} href={'/'}>
            <img src={'/asset/nav/home.png'} alt="icon" className={`w-6 `} />
          </Link>
          <Link className={` my-7`} href={'/'}>
            <img src={'/asset/nav/home.png'} alt="icon" className={`w-6 `} />
          </Link>
        </div>
        <img src="/asset/nav/log.png" alt="img" className={`w-6`} />
      </div>
    </div>
  )
}

export default Navbar
