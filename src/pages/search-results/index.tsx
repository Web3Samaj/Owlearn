import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Card, { Icard } from '@/src/components/landing/Card'
import { searchCourses } from '@/src/services/graph/graph'
import { CourseMetadata } from '@/src/constants/metadata_formats'

type Course = {
  id: `0x${string}`
  uri: string
  title: string
  creatorId: string
  mintModule: string | null
}

// TODO: These temp value are for temporary use until we resolved the way to get these datas
const TEMP_PRICE = 10
const TEMP_RATING = 4.5
const DEFAULT_SEARCH_RESULT_AMOUNT = 10

const SearchResults = () => {
  const router = useRouter()
  const [query, setQuery] = React.useState<string>()
  const [pageNumber, setPageNumber] = React.useState<number>()
  const [input, setInput] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [courses, setCourses] = React.useState<Icard[]>([])
  const isEmpty = courses.length === 0
  const isFirstPage = pageNumber === 1
  const isLastPage = courses.length < DEFAULT_SEARCH_RESULT_AMOUNT

  const courseCards = courses.map((course) => {
    return <Card key={course.id} {...course} />
  })

  useEffect(() => {
    const query = router.query.query
    const pageNum = router.query.page
    if (query) {
      setInput(query as string)
      setQuery(query as string)
    }
    if (pageNum && parseInt(pageNum as string) > 0) {
      setPageNumber(parseInt(pageNum as string))
    } else {
      setPageNumber(1)
    }
  }, [router.query])

  useEffect(() => {
    setIsLoading(true)
    if (query && pageNumber) {
      fetchCourses()
    }
  }, [query, pageNumber])

  async function fetchCourses() {
    const res = await searchCourses(
      DEFAULT_SEARCH_RESULT_AMOUNT,
      (pageNumber! - 1) * DEFAULT_SEARCH_RESULT_AMOUNT,
      query!
    )
    const courseData = res.data.courses
    if (courseData) {
      const coursesRes = await Promise.allSettled(
        courseData.map((course) =>
          fetchCourseData({
            id: course.id,
            uri: course.courseURI,
            title: course.name,
            creatorId: course.creatorId,
            mintModule: course.mintModule,
          })
        )
      )
      const courses = coursesRes.filter(
        (course) => course.status === 'fulfilled'
      ) as PromiseFulfilledResult<Icard>[]
      setCourses(courses.map((course) => course.value))
    }
    setIsLoading(false)
  }

  async function fetchCourseData(course: Course) {
    const res = await fetch(course.uri)
    const data: CourseMetadata = await res.json()
    return {
      id: course.id,
      src: data.thumbnailURI,
      title: course.title,
      author: course.creatorId,
      rating: TEMP_RATING,
      price: course.mintModule ? TEMP_PRICE : 0,
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
        {isLoading ? 'LOADING...' : isEmpty ? 'No results found' : courseCards}
      </div>

      <div className="flex w-full mx-auto justify-center pt-10">
        {!isFirstPage && (
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
        )}
        {!isLastPage && (
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
        )}
      </div>
    </div>
  )
}

export default SearchResults
