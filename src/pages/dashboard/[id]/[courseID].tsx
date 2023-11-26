import React, { useEffect, useRef, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { Player } from '@livepeer/react'
import { CourseData } from '@/src/utils/interface'
import AuthContext from '@/modules/auth/contexts/AuthContext'
import { getCourse } from '@/src/services/graph/graph'
import { getJSONFromIPFS } from '@/src/modules/ipfs/utils'
import {
  CourseMetadata,
  ResourceMetadata,
} from '@/src/constants/metadata_formats'

// TODO: This page should be gated
// TODO: These temp value are for temporary use until we resolved the way to get these datas
const TEMP_TOTAL_EARNING = 7500
const TEMP_RATING = 4.8
const TEMP_ENROLLED_STUDENTS = 9000
const TEMP_PRICE = 10

const ManageCourse = () => {
  const authContext = useContext(AuthContext)
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true) // This is for loading state of whole page
  const [resourcesLoaded, setResourcesLoaded] = useState<Map<string, boolean>>(
    new Map()
  )
  const [loadingResource, setLoadingResource] = useState<boolean>(false) // This is for loading state of resource (video ) of a particular slide when it's clicked
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
        uri: '',
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

  const testCourseData = {
    courseId: router.query.courseID as `0x${string}`,
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
        uri: 'abc',
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
        uri: 'abc',
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
    // setData(testCourseData)
    if (!router.query.courseID) return
    getCourse(router.query.id as `0x${string}`).then((res) => {
      console.log({ res })
      if (!res.data.course) {
        router.push('/404')
        return
      }
      setData({
        courseId: res.data.course.id as string,
        totalearnings: TEMP_TOTAL_EARNING,
        enrolledStudent: TEMP_ENROLLED_STUDENTS,
        prize: TEMP_PRICE,
        rating: TEMP_RATING,
        courseName: res.data.course.name as string,
        img: '',
        description: '',
        allvideos: res.data.course?.resources.map((vid) => {
          return {
            id: vid.resourceId as string,
            uri: vid.resourceURI as string,
            title: '',
            playbackId: '',
            vdescription: '',
            assignments: [],
            resources: [],
          }
        }),
      })
      ;(async () => {
        const result = await getJSONFromIPFS<CourseMetadata>(
          res.data.course!.courseURI
        )
        setData((prev) => {
          return {
            ...prev,
            img: result.thumbnailURI,
            description: result.description,
          }
        })
        setLoading(false)
      })()
    })
  }, [router.query.courseID])

  async function loadResource(id: string, cid: string) {
    const result = await getJSONFromIPFS<ResourceMetadata>(cid)
    setData((prev) => {
      const temp = { ...prev }
      const index = temp.allvideos.findIndex((val) => val.id === id)
      temp.allvideos[index].title = result.name
      temp.allvideos[index].vdescription = result.description || ''
      temp.allvideos[index].playbackId = result.playbackId
      temp.allvideos[index].assignments =
        result.assignmentURIs?.map((assign, index) => {
          return {
            id: index.toString(),
            alinks: assign,
          }
        }) || []
      temp.allvideos[index].resources =
        result.externalURIs?.map((rec, index) => {
          return {
            id: index.toString(),
            rlinks: rec,
          }
        }) || []
      return {
        ...temp,
      }
    })
    setResourcesLoaded((prev) => {
      const temp = new Map(prev)
      temp.set(id, true)
      return temp
    })
  }

  useEffect(() => {
    if (!editSlide) return
    setLoadingResource(true)
    if (resourcesLoaded.has(editSlide as string)) {
      setLoadingResource(false)
      return
    }
    const index = data.allvideos.findIndex((val) => val.id === editSlide)
    const cid = data.allvideos[index].uri
    loadResource(editSlide as string, cid)
    setLoadingResource(false)
  }, [editSlide])

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

  return (
    <div className="  overflow-hidden w-full min-h-screen bg-[#252525] text-white py-20 md:px-20 px-10 ">
      <div className={` w-full  flex flex-col`}>
        <img
          src={testCourseData.img}
          alt="img"
          className={`w-full rounded-md`}
        />

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
            <p> {testCourseData?.rating} </p>
          </div>
          <div className={` flex flex-col items-center`}>
            <p className="truncate md:text-lg te  text-white/50">
              Total Students{' '}
            </p>
            <p>{testCourseData?.enrolledStudent} 👩🏻‍🎓</p>
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
