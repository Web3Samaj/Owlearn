import React, { useState } from 'react'
import { useRouter } from 'next/router'

const ManageCourse = () => {
  const router = useRouter()
  const [editSlide, setEditSlide] = useState<string | null>(null)
  const courseData = {
    courseId: router.query.courseID,
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
        id: 'jsdaj',
        title: 'The Introduction',
        playbackId: 'the id which we have stored to ipfs',
        description:
          'this video is all about the what we are going to do in the video',
        assignments: [
          {
            id: 'abc', //will take this input from the user and will sort in ascending order in frontend
            links: [
              'external link of the assignment or ipfs link to assignment',
            ],
          },
          {
            id: 'def', //will take this input from the user and will sort in ascending order in frontend
            links: [
              'external link of the assignment or ipfs link to assignment',
            ],
          },
        ],
        resources: [
          'should be in the format like this is the abc link ---> https://twitter.com/owlearn',
          'another link ---> https://ethereum.com ',
        ],
      },
      {
        id: 'sgdi',
        title: 'The second vid',
        playbackId: 'the id which we have stored to ipfs',
        description:
          'this second video is all about the what we are going to do in the video',
        assignments: [
          {
            id: 'ds', //will take this input from the user and will sort in ascending order in frontend
            links: [
              'external link of the assignment or ipfs link to assignment',
            ],
          },
          {
            id: 'gs', //will take this input from the user and will sort in ascending order in frontend
            links: [
              'external link of the assignment or ipfs link to assignment',
            ],
          },
        ],
        resources: [
          'should be in the format like this is the abc link ---> https://twitter.com/owlearn',
          'another link ---> https://ethereum.com ',
        ],
      },
    ],
  }

  function manageEdits(id: string) {}

  return (
    <div className="  w-full min-h-screen bg-[#252525] text-white py-20 md:px-20 px-10 ">
      <div className={` w-full  flex flex-col`}>
        <img src={courseData.img} alt="img" className={`w-full`} />

        <div className={` flex flex-col md:text-6xl text-4xl items-start pt-5`}>
          <p className="truncate text-lg   text-white/50">Total Earnings</p>
          <p> ${courseData?.totalearnings} </p>
        </div>
        <div
          className={`w-full md:text-4xl text-3xl flex justify-between   items-center flex-wrap-reverse pt-7 `}
        >
          {courseData?.courseName}
        </div>

        <div className={` md:w-[50%] w-full py-3  flex justify-between`}>
          <div className={` flex flex-col items-start`}>
            <p className="truncate md:text-lg te  text-white/50">Prize</p>
            <p>${courseData.prize} 💶</p>
          </div>
          <div className={` flex flex-col items-center`}>
            <p className="truncate md:text-lg te  text-white/50">Rating</p>
            <p> {courseData?.rating} </p>
          </div>
          <div className={` flex flex-col items-center`}>
            <p className="truncate md:text-lg te  text-white/50">
              Total Students{' '}
            </p>
            <p>{courseData?.enrolledStudent} 👩🏻‍🎓</p>
          </div>
        </div>

        <h1 className={`w-full text-lg text-white/70`}>
          {courseData?.description}
        </h1>
      </div>

      <div className=" grid md:grid-cols-[1fr_2fr]  pt-7 w-full   ">
        <div className={`w-full md:px-4 px-2  `}>
          {courseData.allvideos.map((data) => {
            return (
              <div
                key={data.id}
                onClick={() => setEditSlide(data.id)}
                className=" hover:-translate-y-0.5 hover:shadow-md hover:shadow-black transition-all duration-200 ease-linear bg-stone-700 mb-2 rounded-md  cursor-pointer  w-full flex items-center justify-between py-2 px-4  "
              >
                <span className={`truncate  `}>{data.title}</span>
                <span className={`text-xs text-white/50  `}>Edit </span>
              </div>
            )
          })}
        </div>
        <div className={` w-full min-h-[50vh]  `}>
          {editSlide ? (
            courseData.allvideos.map((vid) => {
              if (vid.id !== editSlide) return
              return <div key={vid.id}>{vid.title}</div>
            })
          ) : (
            <img
              src={'/asset/manageCourse/manage.png'}
              alt="icon"
              className={` max-h-[50vh] mx-auto invert mix-blend-screen  transition-all duration-300 ease-linear    `}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ManageCourse
