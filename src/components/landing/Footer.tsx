import Link from 'next/link'
import React from 'react'

function Footer() {
  function handleContact(e: string) {
    window.open(e)
  }

  return (
    <footer className="bg-stone-800 text-white p-4">
      <div className="container mx-auto flex justify-between font-mono items-center">
        <div className={`text-sm w-auto`}>
          <p className="font-bold ">Copyright ©2023 Owlearn</p>
          <p>All right reserved</p>
        </div>

        <Link
          className={` scroll-smooth cursor-pointer  flex items-center justify-center  group `}
          href={'/'}
        >
          <img
            src={'/asset/nav/owl.png'}
            alt="icon"
            className={` group-hover:scale-110  transition-all duration-300 ease-linear w-8  `}
          />
        </Link>

        <div className="space-x-4 flex gap-2">
          <div onClick={() => handleContact('https://github.com/shikhar360')}>
            <img
              className="cursor-pointer"
              src="/asset/landing/discord.png"
              alt="bg"
              width={20}
            />
          </div>
          <div onClick={() => handleContact('https://github.com/shikhar360')}>
            <img
              className="cursor-pointer"
              src="/asset/landing/twitter.png"
              alt="bg"
              width={20}
            />
          </div>
          <div onClick={() => handleContact('https://github.com/shikhar360')}>
            <img
              className="cursor-pointer"
              src="/asset/landing/call.png"
              alt="bg"
              width={20}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
