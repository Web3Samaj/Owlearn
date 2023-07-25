import { IUploadComp } from '@/src/utils/interface'
import React, { useRef, useState } from 'react'

const Upload = ({
  deleteComp,
  idx,
  handleTitleChange,
  handleVideoChange,
  vid,
  tit,
}) => {
  const vidcomp = useRef(null!)

  const [val, setVal] = useState<IUploadComp>({
    idx,
    video: vid,
    title: tit,
  })

  const [dragcomp, setDragComp] = useState(true)

  function handlevideo(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files[0]
    if (!file) return
    const blobUrl = URL.createObjectURL(file)
    vidcomp.current.style.display = 'block'
    vidcomp.current.src = blobUrl
    setDragComp(false)
    setVal((prev) => {
      return { ...prev, video: e.target.files[0] }
    })
    handleVideoChange(idx, e.target.files[0])
  }

  function handletitle(e: React.ChangeEvent<HTMLInputElement>) {
    setVal((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })

    handleTitleChange(idx, e.target.value)
  }

  function deleteit() {
    vidcomp.current.style.display = 'hidden'
    vidcomp.current.src = ''
    setDragComp(true)
    setVal({
      idx: idx,
      video: null,
      title: '',
    })
    deleteComp(idx)
  }

  return (
    <div className={`flex flex-col  relative`}>
      <label className="flex mx-2 mt-2 w-[8.5rem]  h-[5.5rem] flex-col rounded-t-md bg-black py-2 px-4 border-dashed   group text-center overflow-hidden">
        <div
          className={`pointer-none text-gray-500 text-xs text-center flex flex-col items-center  ${
            dragcomp ? 'block mb-4' : 'hidden group-hover:flex mb-4    '
          } `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-9 text-stone-600 group-hover:text-stone-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <span className={`text-xs `}>Drag and drop your files here</span>
        </div>

        <video
          ref={vidcomp}
          className={`hidden w-[10rem]`}
          controls
          autoPlay
          loop
        >
          Your browser does not support the video tag.
        </video>

        <input
          name="video"
          accept="video/mp4,video/x-m4v,video/*"
          type="file"
          className="hidden"
          onChange={handlevideo}
        />
      </label>
      <input
        value={val.title}
        name="title"
        type="text"
        placeholder="Video title"
        className=" bg-stone-900 placeholder:text-white/60 w-[8.5rem] h-8 truncate placeholder:px-2 placeholder:text-center text-xs rounded-b-md mx-2 active:outline-none  focus:outline-none px-2"
        onChange={handletitle}
      />

      <img
        src="https://img.icons8.com/stencil/32/000000/close-window.png"
        alt="close"
        className={` ${
          idx === 0 ? 'hidden' : 'absolute'
        } right-3 top-3 w-4 cursor-pointer`}
        onClick={deleteit}
      />
    </div>
  )
}

export default Upload
