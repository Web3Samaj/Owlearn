import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { ViewCourseData } from '@/src/utils/interface'

const courseData = {
  courseId: '123',
  totalearnings: 9074,
  enrolledStudent: 938433,
  prize: 23,
  rating: 4.5,
  courseName: 'The blockchain 32 hr course',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E4uV4XLjClPiysUJ9IKbM5xf-zPfjlM7ew&usqp=CAU',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, perspiciatis assumenda, enim voluptate hic dicta dolorum consequatur totam fugiat unde debitis aut sit sequi explicabo maiores quos nihil reiciendis dignissimos tempore esse? Ipsam incidunt quaerat ad dolorum quasi, temporibus beatae non autem amet praesentium aperiam, id veritatis. Magni ab excepturi at sunt ipsa, ea aliquam commodi aut expedita reprehenderit fuga tenetur necessitatibus culpa animi hic consequuntur dolorum quia minus? Reprehenderit.',
  allvideos: [
    {
      id: '1',
      title: 'The Introduction',
    },
    {
      id: '2',
      title: 'The second vid',
    },
    {
      id: '3',
      title: 'The third vid',
    },
    {
      id: '4',
      title: 'The fourth vid',
    },
    {
      id: '5',
      title: 'The fifth vid',
    },
    {
      id: '6',
      title: 'The sixth vid',
    },
    {
      id: '7',
      title: 'The seventh vid',
    },
    {
      id: '8',
      title: 'The Introduction',
    },
    {
      id: '9',
      title: 'The second vid',
    },
    {
      id: '10',
      title: 'The third vid',
    },
    {
      id: '11',
      title: 'The fourth vid',
    },
    {
      id: '12',
      title: 'The fifth vid',
    },
    {
      id: '13',
      title: 'The sixth vid',
    },
    {
      id: '14',
      title: 'The seventh vid',
    },
    {
      id: '15',
      title: 'The fourth vid',
    },
    {
      id: '16',
      title: 'The fifth vid',
    },
    {
      id: '17',
      title: 'The sixth vid',
    },
    {
      id: '18',
      title: 'The seventh vid',
    },
  ],
}

const ViewCourse = () => {
  const router = useRouter()
  const [data, setData] = useState<ViewCourseData>({
    courseId: '',
    totalearnings: 0,
    enrolledStudent: 0,
    prize: 0,
    rating: 0,
    courseName: '',
    img: '',
    description: '',
    allvideos: [
      {
        id: '',
        title: '',
      },
    ],
  })

  useEffect(() => {
    const courseId = router.query.id as string
    setData(courseData)
  }, [router.query.id])

  return (
    <div className="overflow-hidden w-full min-h-screen bg-[#252525] text-white py-20 md:px-20 px-10">
      <div className={`w-full flex flex-col`}>
        <img src={courseData.img} alt="img" className={`w-full rounded-md`} />

        <div className={`flex flex-col md:text-6xl text-4xl items-start pt-5`}>
          <p className="truncate text-lg text-white/50">Total Earnings</p>
          <p className="">${data.totalearnings}</p>
        </div>
        <p
          className={`w-full md:text-4xl text-3xl flex justify-between bg-inherit items-center flex-wrap-reverse mt-7 focus:outline-none`}
        >
          {data?.courseName}
        </p>

        <div className={`md:w-[50%] w-full py-3 flex justify-between`}>
          <div className={`flex flex-col items-start`}>
            <p className="truncate md:text-lg te text-white/50">Prize</p>
            <p
              className={`focus:outline-none bg-inherit [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
            >
              {data?.prize}
            </p>
          </div>
          <div className={`flex flex-col items-center`}>
            <p className="truncate md:text-lg te text-white/50">Rating</p>
            <p> {courseData?.rating} </p>
          </div>
          <div className={`flex flex-col items-center`}>
            <p className="truncate md:text-lg te text-white/50">
              Total Students
            </p>
            <p>{courseData?.enrolledStudent} 👩🏻‍🎓</p>
          </div>
        </div>

        <p
          className={`max-w-full focus:outline-none resize-none bg-inherit text-lg text-white/70`}
        >
          {data?.description}
        </p>
      </div>
      <button
        className={`w-max mx-auto flex mt-4 bg-lime-900 py-2 px-4 text-xl rounded-lg hover:bg-lime-800 hover:-translate-y-0.5 transition-all duration-200 ease-linear hover:shadow-md hover:shadow-black`}
      >
        Enroll Now
      </button>

      <div className={`w-full flex flex-col items-center mt-7`}>
        <p className="truncate text-2xl text-white/50 font-bold">Contents</p>
      </div>
      <div className="mx-auto py-1 mt-2 px-4 overflow-auto max-h-[75vh] lg:w-1/2 md:w-3/4 w-11/12 text-lg [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded [&::-webkit-scrollbar-track]:bg-[#f1f1f1] [&::-webkit-scrollbar-thumb]:bg-[#888] [&::-webkit-scrollbar-thumb]:rounded hover:[&::-webkit-scrollbar-thumb]:bg-[#555]">
        {data?.allvideos.map((data) => {
          return (
            <div
              key={data.id}
              className={`hover:bg-[#5EF8BF] hover:text-black hover:-translate-y-0.5 hover:shadow-md hover:shadow-black transition-all duration-200 ease-linear mb-2 bg-stone-700 rounded-md cursor-pointer truncate w-full flex items-center justify-between py-2 px-4`}
            >
              <span className={`truncate max-w-full`}>{data.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ViewCourse
