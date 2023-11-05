import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Card, { Icard } from '@/src/components/landing/Card'
import { SearchCourseResult, searchCourses } from '@/src/services/graph/graph'
import { CourseMetadata } from '@/src/constants/metadata_formats'

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

type Course = {
  id: `0x${string}`
  uri: string
  title: string
  creatorId: string
  mintModule: string | null
}

const SearchResults = () => {
  const router = useRouter()
  const [input, setInput] = React.useState<string>('')
  const [courses, setCourses] = React.useState<Course[]>([])

  useEffect(() => {
    const query = router.query.query
    if (query) {
      setInput(query as string)
    }
    fetchCourses()
  }, [router.query.query])

  async function fetchCourses() {
    const query = router.query.query
    if (query) {
      const res = await searchCourses(10, query as string)
      const courseData = res.data
      if (courseData) {
        const courses = courseData.map((course) => {
          return {
            id: course.id,
            uri: course.courseURI,
            title: course.name,
            creatorId: course.creatorId,
            mintModule: course.mintModule,
          }
        })
        setCourses(courses)
      }
    }
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-start justify-start py-20 bg-[#252525]`}
    >
      <div
        className={`flex items-center justify-start w-[90%] mx-auto bg-stone-700 rounded-2xl overflow-hidden`}
      >
        <img
          src="/asset/landing/search.png"
          alt="searchimg"
          loading="lazy"
          draggable="false"
          className={`h-12 w-12 p-2 opacity-40`}
        />
        <input
          type="text"
          name="search"
          id="search"
          value={input}
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

      <div className="md:w-[90%] w-full mx-auto px-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-10 items-center gap-y-10">
        {/* {fakeCourseData?.map((data, idx) => {
          return <Card key={data.id} {...data} />
        })} */}
        {courses.map((course) => {
          return <SearchCard key={course.id} course={course} />
        })}
      </div>

      <div className="flex w-full mx-auto justify-center pt-10">
        <a
          href="#"
          className="flex items-center justify-center px-4 h-10 mr-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="w-3.5 h-3.5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </a>
        <a
          href="#"
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

function SearchCard({ course }: { course: Course }) {
  const [courseData, setCourseData] = React.useState<Icard | null>(null)

  useEffect(() => {
    async function fetchCourseData() {
      const res = await fetch(course.uri)
      const data: CourseMetadata = await res.json()
      setCourseData({
        id: course.id,
        src: data.thumbnailURI,
        title: data.name,
        author: course.creatorId,
        rating: 4.7,
        price: course.mintModule ? 10 : 0,
      })
    }
    fetchCourseData()
  }, [])
  return <></>
}

export default SearchResults
