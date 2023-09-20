import React, { useEffect, useRef, useState } from 'react'
import Upload from './components/Upload'
import { IUploadComp, IrestInput } from '@/src/utils/interface'
import { useStore } from '@/src/store/store'
import { uploadVideo } from './utils'

const Publish = () => {
  const addingCourse = useStore((store) => store.setCourseData)
  const allCourse = useStore((store) => store.courseData)
  const preview = useRef<string | undefined>(undefined)
  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement)[]>([])
  const [uploadComp, setUploadComp] = useState<IUploadComp[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [steps, setSteps] = useState<number>(1)
  useEffect(() => {
    setUploadComp([
      {
        idx: crypto.randomUUID(),
        video: null,
        title: '',
      },
    ])
  }, [])

  const [restInp, setRestInp] = useState<IrestInput>({
    courseTitle: '',
    description: '',
    category: '',
    thumbnail: null,
    price: '',
  })

  const addInputRef = (ref: HTMLInputElement | HTMLTextAreaElement | null) => {
    if (ref && !inputRefs.current.includes(ref)) {
      inputRefs.current.push(ref)
    }
  }

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const nextIndex = index + 1

      if (nextIndex < inputRefs.current.length) {
        inputRefs.current[nextIndex].focus()
      }
    }
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (e.target.name === 'thumbnail') {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return
      const src = URL.createObjectURL(file)
      preview.current = src
      setRestInp((prev) => {
        return {
          ...prev,
          thumbnail: file,
        }
      })
    }
    console.log(e.target.name)
    setRestInp((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  function addUploads() {
    setUploadComp((prev) => {
      return [
        ...prev,
        {
          idx: crypto.randomUUID(),
          video: null,
          title: '',
        },
      ]
    })
  }

  function getVideo(arr: IUploadComp[], idx: string) {
    const vid = arr.find((val) => val.idx === idx)
    return vid
  }

  function handleVideoChange(idx: string, vid: File) {
    setUploadComp((prev) => {
      const updatedUploadComp = prev.map((uploadComp) => {
        if (uploadComp.idx === idx) {
          return { ...uploadComp, video: vid }
        }
        return uploadComp
      })

      return updatedUploadComp
    })
  }

  function handleTitleChange(idx: string, title: string) {
    setUploadComp((prev) => {
      const updatedUploadComp = prev.map((uploadComp) => {
        if (uploadComp.idx === idx) {
          return { ...uploadComp, title }
        }
        return uploadComp
      })

      return updatedUploadComp
    })
  }
  // console.log(uploadComp)
  function deleteVidComp(idx: string) {
    if (uploadComp.length === 1) return
    setUploadComp((prev) => {
      const updated = prev.filter((val, i) => val.idx !== idx)
      return updated
    })
  }

  async function uploadAll() {
    // console.log(uploadComp)
    // console.log(restInp)
    if (
      !restInp.category &&
      !restInp.courseTitle &&
      !restInp.description &&
      !restInp.price &&
      !restInp.thumbnail
    ) {
      console.log("User didn't filled all the inputs for course")
      return
    }
    for (let i = 0; i < uploadComp.length; i++) {
      if (!uploadComp[i].title || !uploadComp[i].video) {
        console.log("User didn't filled all the inputs for videos")
        return
      }
    }
    setLoading(true)

    // const courseRes = await fetch(
    //   process.env.NEXT_PUBLIC_API_URL + '/upload-json-ipfs',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(restInp),
    //   }
    // )
    // const { cid: courseCid } = await courseRes.json()

    const lecturesUploaded = []

    for (let i = 0; i < uploadComp.length; i++) {
      const res = await uploadVideo(
        uploadComp[i].title,
        uploadComp[i].video as File
      )
      const jsonData = {
        title: uploadComp[i].title,
        video: res.playbackId,
      }
      console.log('jsonData : ', jsonData)
      const cidRes = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/upload-json-ipfs',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData),
        }
      )
      const { cid } = await cidRes.json()
      lecturesUploaded.push(cid)
    }
    console.log('lecturesUploaded :', lecturesUploaded)
  }

  return (
    <div
      className={`bg-black text-white flex flex-col py-20 items-center justify-start w-full min-h-screen `}
    >
      <div
        className={`md:w-[60%] w-[80%] relative h-10 flex items-center  overflow-hidden  mb-10 `}
      >
        <div
          className={`flex items-center justify-between absolute w-full z-30`}
        >
          <div
            className={` w-10 h-10 rounded-full bg-[#5EF8BF] text-black flex items-center justify-center `}
          >
            1
          </div>
          <div
            className={` w-10 h-10 rounded-full ${
              steps >= 2 ? 'bg-[#5EF8BF]' : 'bg-stone-600 text-white'
            } text-black flex items-center justify-center `}
          >
            2
          </div>
          <div
            className={`${
              steps >= 3 ? 'bg-[#5EF8BF]' : 'bg-stone-600 text-white'
            }  w-10 h-10 rounded-full bg-[#5EF8BF] text-black flex items-center justify-center `}
          >
            3
          </div>
        </div>
        <div className={`w-full h-1.5 bg-stone-600  relative `}>
          <div
            className={` absolute ${steps === 1 && 'w-0'} ${
              steps === 2 && 'w-1/2'
            } ${steps === 3 && 'w-full'}  h-1.5 bg-[#5EF8BF]  `}
          ></div>
        </div>
      </div>
      <div className={`md:w-[60%] w-[80%] bg-stone-800 p-5 rounded-xl`}>
        <h1 className={`text-2xl font-semibold`}>Publishing Course </h1>
        <h1 className={`text-base font-semibold mt-3`}>Step {steps} </h1>
        {steps === 1 && (
          <>
            <p className={` mt-2  `}>Course Title</p>
            <input
              value={restInp.courseTitle}
              ref={(ref) => addInputRef(ref)}
              onKeyDown={(e) => handleKeyPress(e, 0)}
              onChange={handleInputChange}
              name="courseTitle"
              type="text"
              placeholder="Enter Course Name"
              className={`bg-black placeholder:text-white/50 py-2 px-4 text-sm rounded-md w-full mt-2 active:outline-none  focus:outline-none`}
            />
            <p className={`mt-4`}>Course Desciption</p>
            <textarea
              value={restInp.description}
              ref={(ref) => addInputRef(ref)}
              onKeyDown={(e) => handleKeyPress(e, 1)}
              onChange={handleInputChange}
              name="description"
              placeholder="Add a description of a course"
              className={`bg-black placeholder:text-white/50 py-2 px-4 text-sm rounded-md w-full mt-2 resize-none h-32 mb-4  active:outline-none  focus:outline-none`}
            />
          </>
        )}

        {steps === 2 && (
          <>
            <p className={`mt-4 mb-2`}>Course Thumbnail</p>
            <img
              src={preview.current}
              alt="img"
              className={`${
                preview.current === undefined ? 'hidden' : 'block'
              } `}
            />
            <input
              onChange={handleInputChange}
              className="block w-1/2 mt-3 text-xs text-white rounded-md cursor-pointer bg-black  focus:outline-none "
              name="thumbnail"
              accept="image/png, image/gif, image/jpeg"
              type="file"
            />
            <p className={`mt-4`}>Upload Videos</p>

            <div className={`w-full flex  flex-col justify-start`}>
              {uploadComp.map((val, idx) => (
                <Upload
                  key={val.idx}
                  deleteComp={deleteVidComp}
                  idx={val.idx}
                  handleVideoChange={handleVideoChange}
                  handleTitleChange={handleTitleChange}
                  vid={val.video}
                  tit={val.title}
                />
              ))}
              <button
                disabled={loading}
                className={`w-[20%] mx-auto h-[4rem] mt-4 bg-lime-900/50  mr-auto rounded-xl flex items-center justify-center`}
                onClick={addUploads}
              >
                <img
                  src="/asset/manageCourse/add.png"
                  alt="add"
                  className={`select-none w-10 `}
                />
              </button>
            </div>
          </>
        )}

        {steps === 3 && (
          <>
            <p className={`mt-4`}>Course Category</p>
            <input
              value={restInp.category}
              ref={(ref) => addInputRef(ref)}
              onKeyDown={(e) => handleKeyPress(e, 2)}
              name="category"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter Course Category"
              className={`bg-black placeholder:text-white/50 py-2 px-4 text-sm rounded-md w-full mt-2 active:outline-none  focus:outline-none`}
            />
            <p className={`mt-4`}>Course Price</p>
            <input
              value={restInp.price}
              ref={(ref) => addInputRef(ref)}
              onKeyDown={(e) => handleKeyPress(e, 3)}
              onChange={handleInputChange}
              name="price"
              type="number"
              min={0}
              placeholder="Enter Course Price - $$"
              className={`bg-black placeholder:text-white/50 py-2 px-4 text-sm rounded-md w-full mt-2 active:outline-none  focus:outline-none`}
            />
            <button
              disabled={loading}
              onClick={uploadAll}
              className={`bg-[#5EF8BF] mt-4 py-2 px-4 text-sm rounded-md w-full text-black`}
            >
              Publish
            </button>
          </>
        )}
      </div>
      <div
        className={`flex w-[40%] select-none  mx-auto items-center mt-10 justify-between `}
      >
        <img
          onClick={() => steps > 1 && setSteps((prev) => prev - 1)}
          src={'asset/landing/back.png'}
          alt="icon"
          draggable="false"
          className={` transition-all select-none duration-300 ease-linear w-10 rounded-full cursor-pointer `}
        />
        <img
          onClick={() => steps < 3 && setSteps((prev) => prev + 1)}
          src={'asset/landing/next.png'}
          alt="icon"
          className={`  transition-all select-none duration-300 ease-linear w-10 rounded-full cursor-pointer `}
          draggable="false"
        />
      </div>
    </div>
  )
}

export default Publish
