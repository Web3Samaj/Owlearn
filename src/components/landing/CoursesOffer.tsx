import React, { useEffect, useRef } from 'react'
import Card, { Icard } from './Card'
import { useRouter } from 'next/router'

const fakeCourseData: Icard[] = [
  {
    id: '1',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E4uV4XLjClPiysUJ9IKbM5xf-zPfjlM7ew&usqp=CAU',
    title: 'Lorem ipsum dolor sit amet',
    author: 'By Arnold Swachger',
    rating: 4.7,
    price: 10,
  },
  {
    id: '2',
    src: 'https://assets-global.website-files.com/5f75fe1dce99248be5a892db/643fca2691c09c6e05c64a03_Understanding-Blockchain-Scalability-Banner_V1.png',
    title: 'Another Book Title',
    author: 'By John Doe',
    rating: 3.5,
    price: 15,
  },
  {
    id: '3',
    src: 'https://d.line-scdn.net/stf/linecorp/ja/pr/LINEBlockchain_main.png',
    title: 'A Third Book Title',
    author: 'By Jane Doe',
    rating: 4.2,
    price: 20,
  },
  {
    id: '4',
    src: 'https://cdn.consensys.net/uploads/2022/05/31145801/blockchain-bridges-feature.png',
    title: 'Fourth Book Title',
    author: 'By Michael Johnson',
    rating: 4.0,
    price: 18,
  },
  {
    id: '5',
    src: 'https://www.demandsage.com/wp-content/uploads/2022/07/Blockchain-Statistics-DemandSage-1024x576.png',
    title: 'Fifth Book Title',
    author: 'By Emily Williams',
    rating: 4.8,
    price: 12,
  },
  {
    id: '6',
    src: 'https://assets-global.website-files.com/60f93c8e038fc32afa829f7d/64941694c32a3c2b9fe36a84_Enjin%20Blockchain%20-%20Press%20release%20header.png',
    title: 'Sixth Book Title',
    author: 'By Andrew Davis',
    rating: 4.5,
    price: 22,
  },
  {
    id: '7',
    src: 'https://authena.io/wp-content/uploads/2020/12/2.jpg',
    title: 'Seventh Book Title',
    author: 'By Sarah Johnson',
    rating: 3.9,
    price: 16,
  },
  {
    id: '8',
    src: 'https://dynamicmedia.accenture.com/is/image/accenture/accenture-hyperledger-blockchain-660x330?qlt=85&wid=1024&ts=1675236845354&$auto-png-alpha$&fit=constrain&dpr=off',
    title: 'Eighth Book Title',
    author: 'By James Smith',
    rating: 4.2,
    price: 19,
  },
  {
    id: '9',
    src: 'https://i.ytimg.com/vi/Zw3O_QEVOKg/maxresdefault.jpg',
    title: 'Ninth Book Title',
    author: 'By Olivia Brown',
    rating: 4.6,
    price: 14,
  },
  {
    id: '10',
    src: 'https://academy-public.coinmarketcap.com/optimized-uploads/2b6ccf98473b4996b7317829328f112c.png',
    title: 'Tenth Book Title',
    author: 'By Sam Smith',
    rating: 4.9,
    price: 25,
  },
]

const CoursesOffer = () => {
  const router = useRouter()
  const [input, setInput] = React.useState<string>('')

  return (
    <div className="containerizer rounded-b-3xl overflow-hidden">
      <div className={`min-h-screen flex w-full bg-[#252525] `}>
        <section
          className={`w-[100vw] relative flex flex-col items-start justify-start md:pb-10 pb-20 pt-32 bg-[#252525]`}
        >
          <h1
            className={`pinnedContainer w-[90%] mb-4 font-bold font-jakarta text-3xl text-start mx-auto`}
          >
            Courses we offer
          </h1>
          <div
            className={`flex items-center justify-start w-[90%] mx-auto bg-stone-700 rounded-2xl overflow-hidden`}
          >
            <img
              src="asset/landing/search.png"
              alt="searchimg"
              loading="lazy"
              draggable="false"
              className={`h-[3rem] w-[3rem] p-2 opacity-40`}
            />
            <input
              type="text"
              name="search"
              id="search"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  router.push(`/search-results?query=${input}`)
                }
              }}
              placeholder="Patrik Collins Blockchain Course"
              className={`w-full bg-stone-700 placeholder:text-white/70 text-lg font-thin py-1 px-2 rounded-md focus:outline-none focus:border-none active:outline-none active:border-none`}
            />
          </div>

          <div className="md:w-[80%] w-full mx-auto md:px-20 px-10 grid md:grid-cols-5 grid-cols-2 my-[10%] items-center gap-y-10">
            {fakeCourseData?.map((data, idx) => {
              return <Card key={data.id} {...data} />
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
