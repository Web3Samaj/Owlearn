import React, { useRef, useState } from 'react'
import Upload from './components/Upload'

interface IUploadComp {
  video: any
  title: string
}

interface IrestInput {
  courseTitle: string
  description: string
  category: string
  price: number
}
const Publish = () => {
  const [uploadNo, setUploadNo] = useState<number>(1)
  const [uploadComp, setUploadComp] = useState<IUploadComp[]>([
    {
      video: '',
      title: '',
    },
  ])

  const [restInp, setRestInp] = useState<IrestInput>({
    courseTitle: '',
    description: '',
    category: '',
    price: null,
  })

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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
          video: '',
          title: '',
        },
      ]
    })
  }

  function handleVideoChange(idx: number, vid: string, title: string) {
    setUploadComp((prev) => {
      const mock = prev
      mock[idx].title = title
      mock[idx].video = vid

      return mock
    })
  }
  // console.log(uploadComp)
  function deleteVidComp(idx: number) {
    if (uploadComp.length === 1) return
    setUploadComp((prev) => {
      const updated = prev.filter((_, i) => i !== idx)
      return updated
    })
  }

  function uploadAll() {
    console.log(uploadComp)
    console.log(restInp)
  }
  return (
    <div
      className={`bg-black flex flex-col py-10 items-center justify-start w-full min-h-screen `}
    >
      <div className={`w-[60%] bg-stone-800 p-5 rounded-xl`}>
        <h1 className={`text-2xl font-semibold`}>Course Name & Description </h1>
        <p className={`mt-4`}>Course Title</p>
        <input
          onChange={handleInputChange}
          name="courseTitle"
          type="text"
          placeholder="Enter Course Name"
          className={`bg-black placeholder:text-white/50 py-2 px-4 text-sm rounded-md w-full mt-2 active:outline-none  focus:outline-none`}
        />
        <p className={`mt-4`}>Course Desciption</p>
        <textarea
          onChange={handleInputChange}
          name="description"
          placeholder="Add a description of a course"
          className={`bg-black placeholder:text-white/50 py-2 px-4 text-sm rounded-md w-full mt-2 resize-none h-32  active:outline-none  focus:outline-none`}
        />
        <p className={`mt-4`}>Upload Videos</p>

        <div className={`max-w-full flex  flex-wrap justify-start`}>
          {uploadComp.map((_, idx) => (
            <Upload
              key={idx}
              deleteComp={deleteVidComp}
              idx={idx}
              handleChange={handleVideoChange}
            />
          ))}
          <button
            className={`w-[8.5rem] h-[7rem] bg-black m-3 rounded-xl flex items-center justify-center`}
            onClick={addUploads}
          >
            <img
              src="https://img.icons8.com/emoji/48/000000/plus-emoji.png"
              alt="add"
              className={`select-none`}
            />
          </button>
        </div>
        <p className={`mt-4`}>Course Category</p>
        <input
          name="category"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Course Category"
          className={`bg-black placeholder:text-white/50 py-2 px-4 text-sm rounded-md w-full mt-2 active:outline-none  focus:outline-none`}
        />
        <p className={`mt-4`}>Course Price</p>
        <input
          onChange={handleInputChange}
          name="price"
          type="number"
          min={0}
          placeholder="Enter Course Price - $$"
          className={`bg-black placeholder:text-white/50 py-2 px-4 text-sm rounded-md w-full mt-2 active:outline-none  focus:outline-none`}
        />
        <button
          onClick={uploadAll}
          className={`bg-stone-500 mt-4 placeholder:text-white/50 py-2 px-4 text-sm rounded-md w-full  active:outline-none  focus:outline-none`}
        >
          Publish
        </button>
      </div>
    </div>
  )
}

export default Publish
