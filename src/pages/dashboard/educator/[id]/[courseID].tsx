import React, { useEffect, useRef, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { Player } from '@livepeer/react'
import { CourseData } from '@/src/utils/interface'
import AuthContext from '@/modules/auth/contexts/AuthContext'

const ManageCourse = () => {
  const authContext = useContext(AuthContext)
  const textAreaRef = useRef<HTMLTextAreaElement>(null!)
  const [editSlide, setEditSlide] = useState<string | null>(null)
  const [data, setData] = useState<CourseData>({
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
        playbackId: '',
        vdescription: '',
        assignments: [
          {
            id: '',
            alinks: '',
          },
        ],
        resources: [
          {
            id: '',
            rlinks: '',
          },
        ],
      },
    ],
  })

  const courseData = {
    // courseId: router.query.courseID as string ,
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
        playbackId:
          'bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe',
        vdescription:
          'Magni ab excepturi at sunt ipsa, ea aliquam commodi aut expedita reprehenderit fuga tenetur necessitatibus culpa animi hic consequuntur dolorum quia minus? Reprehenderit',
        assignments: [
          {
            id: 'abc',
            alinks:
              'external link of the assignment or ipfs link to assignment',
          },
          {
            id: 'def',
            alinks:
              'external link of the assignment or ipfs link to assignment',
          },
        ],
        resources: [
          {
            id: 'sahl',
            rlinks: 'https://twitter.com/kajdkjajf',
          },
          {
            id: 'dashdh',
            rlinks: 'https://aksjflasdlfhd.com ',
          },
        ],
      },
      {
        id: 'sgdi',
        title: 'The second vid',
        playbackId: 'f5eese9wwl88k4g8',
        vdescription:
          'tempore esse? Ipsam incidunt quaerat ad dolorum quasi, temporibus beatae non autem amet praesentium aperiam, id veritatis. Magni ab excepturi at sunt ipsa, ea aliquam commodi aut expedita reprehenderit fuga tenetur necessitatibus culpa',
        assignments: [
          {
            id: 'ds',
            alinks:
              'external link of the assignment or ipfs link to assignment',
          },
          {
            id: 'gs',
            alinks:
              'external link of the assignment or ipfs link to assignment',
          },
        ],
        resources: [
          {
            id: 'jg',
            rlinks: 'https://twitter.com/owlearn',
          },
          {
            id: 'dsjh',
            rlinks: 'https://ethereum.com ',
          },
        ],
      },
    ],
  }

  useEffect(() => {
    setData(courseData)
  }, [])

  useEffect(() => {
    if (!textAreaRef.current) return
    textAreaRef.current.style.height = '0px'
    const scrollHeight = textAreaRef.current?.scrollHeight
    textAreaRef.current.style.height = scrollHeight + 'px'
  }, [textAreaRef.current, data?.description])

  function manageEdits(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id?: number
  ) {
    setData((prev: any) => {
      if (e.target.name === 'prize') {
        return {
          ...prev,
          [e.target.name]: +e.target.value,
        }
      }
      if (e.target.name === 'title') {
        // const alter = data.allvideos.find(val => val.id === id)
        const temp = { ...prev }
        if (id === undefined) return
        // console.log(temp.allvideos[id]);
        temp.allvideos[id].title = e.target.value
        console.log(temp.allvideos[id].title)

        return {
          ...temp,
          // prev.allvideos[id].title : e.taget.value
        }
      }
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  // getCookie('owlearn_auth_cookie')

  return (
    <div className="  overflow-hidden w-full min-h-screen bg-[#252525] text-white py-20 md:px-20 px-10 ">
      <div className={` w-full  flex flex-col`}>
        <img src={courseData.img} alt="img" className={`w-full rounded-md`} />

        <div className={` flex flex-col md:text-6xl text-4xl items-start pt-5`}>
          <p className="truncate text-lg   text-white/50">Total Earnings</p>
          <p className="">${data.totalearnings}</p>

          {/* <input type='number' name='totalearnings' value={data.totalearnings} onChange={manageEdits} className={`focus:outline-none bg-inherit [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`} />  */}
        </div>
        <input
          type="text"
          name="courseName"
          value={data?.courseName}
          onChange={manageEdits}
          className={`w-full md:text-4xl text-3xl flex justify-between bg-inherit   items-center flex-wrap-reverse mt-7 focus:outline-none`}
        />
        {/* {courseData?.courseName} */}
        {/* </input> */}

        <div className={` md:w-[50%] w-full py-3  flex justify-between`}>
          <div className={` flex flex-col items-start`}>
            <p className="truncate md:text-lg te  text-white/50">Prize</p>
            <input
              type="number"
              name="prize"
              value={data?.prize}
              onChange={manageEdits}
              className={`focus:outline-none bg-inherit [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
            />
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

        <textarea
          onChange={manageEdits}
          name="description"
          spellCheck="false"
          ref={textAreaRef}
          value={data?.description}
          className={`max-w-full focus:outline-none resize-none  bg-inherit text-lg text-white/70`}
        />
      </div>

      <div className=" grid md:grid-cols-[1fr_2fr]  md:pt-10 pt-7  w-full   ">
        <div className={`w-full truncate md:px-4 px-2 pb-4 md:pb-0`}>
          {data?.allvideos.map((data) => {
            return (
              <div
                key={data.id}
                onClick={() => setEditSlide(data.id)}
                className={`hover:-translate-y-0.5 hover:shadow-md hover:shadow-black transition-all duration-200 ease-linear mb-2 ${
                  editSlide === data.id
                    ? 'bg-[#5EF8BF] text-black'
                    : ' bg-stone-700'
                } rounded-md  cursor-pointer truncate w-full flex items-center justify-between py-2 px-4 `}
              >
                <span className={`truncate max-w-full  `}>{data.title}</span>
                <span
                  className={`text-xs ${
                    editSlide === data.id ? ' text-black' : ' text-white/50'
                  }  `}
                >
                  Edit{' '}
                </span>
              </div>
            )
          })}
        </div>
        <div className={` w-full min-h-[50vh]  `}>
          {editSlide ? (
            data?.allvideos.map((vid, idx) => {
              if (vid.id !== editSlide) return
              return (
                <div key={vid.id}>
                  <Player
                    title="course"
                    playbackId={vid.playbackId}
                    accessKey={authContext.getJwtToken() || ''}
                    loop
                    autoPlay
                    showTitle={false}
                    muted
                    showPipButton
                    objectFit="cover"
                    priority
                    // jwt={jwt}  we can also use jwt for protecting
                  />
                  <div className={`px-2 `}>
                    <input
                      type="text"
                      name="title"
                      value={vid.title}
                      onChange={(e) => manageEdits(e, idx)}
                      className={`w-full bg-inherit focus:outline-none md:text-3xl text-2xl pt-3 pb-2  truncate`}
                    />
                    {/* <h1 className={` md:text-3xl text-2xl pt-3 pb-2 `}>
                      {vid.title}
                    </h1> */}
                    <p className={`text-xs text-white/50   `}>Description </p>
                    <p className={`text-sm  pb-3 `}>{vid.vdescription}</p>
                    <p className={`text-xs text-white/50   `}>Assignments </p>
                    {vid.assignments.map((assign) => {
                      return (
                        <div key={assign.id} className={`text-sm  `}>
                          {assign.alinks}
                        </div>
                      )
                    })}
                    <p className={`text-xs text-white/50  pt-3 `}>Resources </p>
                    {vid.resources.map((rec) => {
                      return (
                        <div key={rec.id} className={`text-sm  `}>
                          {rec.rlinks}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })
          ) : (
            <img
              src={'/asset/manageCourse/manage.png'}
              alt="icon"
              className={` max-h-[50vh] mx-auto invert mix-blend-screen      `}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ManageCourse
