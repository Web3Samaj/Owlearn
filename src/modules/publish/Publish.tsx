import React, { useEffect, useRef, useState } from 'react'
import Upload from './components/Upload'
import { IUploadComp, IrestInput } from '@/src/utils/interface'
import { useStore } from '@/src/store/store'
import { useAsset, useCreateAsset } from '@livepeer/react'

const Publish = () => {
  const addingCourse = useStore((store) => store.setCourseData)
  const allCourse = useStore((store) => store.courseData)
  const preview = useRef(null!)
  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement)[]>([])
  const [uploadComp, setUploadComp] = useState<IUploadComp[]>([])
  const [loading, setLoading] = useState(false)

  const sources = uploadComp.map((video) => {
    return {
      name: video.title,
      file: video.video,
      storage: {
        ipfs: true,
        metadata: {
          name: video.title,
          // description: 'a great description of the video',
        },
      },
    }
  })
  console.log('sources', sources)
  const {
    mutate: createAsset,
    data: assets,
    status,
    progress,
    error,
  } = useCreateAsset(
    // we use a `const` assertion here to provide better Typescript types
    // for the returned data
    uploadComp.length > 0
      ? {
          sources: sources,
        }
      : null
  )
  console.log('upload data', { assets, status, progress, error })

  const totalProgress = progress
    ? (progress.reduce((acc, curr) => {
        if (curr.phase === 'uploading') {
          return acc + curr.progress
        } else if (curr.phase === 'processing') {
          // uploading is done and now it's processing
          return acc + curr.progress + 1
        } else if (curr.phase === 'ready') {
          return acc + 2 // curr.progress should be 1 here
        }
        return acc
      }, 0) *
        100) /
      (2 * progress.length) // 2 phases: uploading and processing
    : 0

  console.log('totalProgress', totalProgress)

  useEffect(() => {
    if (status === 'error') {
      console.log('error', error)
    }
    if (!assets) return
    let isAnyUploadFailed = false
    let isAllUploadReady = true
    for (let i = 0; i < progress.length; i++) {
      if (progress[i].phase === 'failed') {
        isAnyUploadFailed = true
      }
      if (progress[i].phase !== 'ready') {
        isAllUploadReady = false
      }
      // no need to check further if any upload failed and not all uploads are ready
      if (isAnyUploadFailed && !isAllUploadReady) {
        break
      }
    }
    if (isAnyUploadFailed) {
      console.log('At least one upload failed')
      return
    }
    if (!isAllUploadReady) {
      console.log('Not all uploads are ready')
      return
    }
    console.log('All uploads are ready')
    const ipfsUrls = assets.map((asset) => asset.storage.ipfs.nftMetadata.cid)
    // upload course details to get cid for course and then create a transaction to create course.
  }, [status, progress, error, assets])

  useEffect(() => {
    setUploadComp([
      {
        idx: crypto.randomUUID(),
        video: null,
        title: '',
      },
    ])
  }, [])

  console.log('uploadComp', uploadComp)

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
      if (!(e.target as HTMLInputElement).files[0]) return
      const src = URL.createObjectURL((e.target as HTMLInputElement).files[0])
      preview.current = src
      setRestInp((prev) => {
        return {
          ...prev,
          thumbnail: (e.target as HTMLInputElement).files[0],
        }
      })
    }

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
      const mock = prev
      getVideo(mock, idx).video = vid
      return mock
    })
  }

  function handleTitleChange(idx: string, title: string) {
    setUploadComp((prev) => {
      const mock = prev
      getVideo(mock, idx).title = title
      return mock
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

  function uploadAll() {
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
    createAsset?.()
    // const fresh: IUploadComp[] = uploadComp.filter(
    //   (val) => val.title !== '' && val.video !== null
    // )
    // addingCourse(fresh, restInp)

    // setRestInp({
    //   courseTitle: '',
    //   description: '',
    //   category: '',
    //   thumbnail: null,
    //   price: '',
    // })

    // setUploadComp([])
  }

  return (
    <div
      className={`bg-black text-white flex flex-col py-10 items-center justify-start w-full min-h-screen `}
    >
      <div className={`w-[60%] bg-stone-800 p-5 rounded-xl`}>
        <h1 className={`text-2xl font-semibold`}>Course Name & Description </h1>
        <p className={`mt-4`}>Course Title</p>
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
          className={`bg-black placeholder:text-white/50 py-2 px-4 text-sm rounded-md w-full mt-2 resize-none h-32  active:outline-none  focus:outline-none`}
        />
        <p className={`mt-4`}>Course Thumbnail</p>
        {restInp.thumbnail ? <img src={preview.current} alt="img" /> : null}
        <input
          onChange={handleInputChange}
          className="block w-1/2 mt-2 text-xs text-white rounded-md cursor-pointer bg-black  focus:outline-none "
          name="thumbnail"
          accept="image/png, image/gif, image/jpeg"
          type="file"
        />
        <p className={`mt-4`}>Upload Videos</p>

        <div className={`max-w-full flex  flex-wrap justify-start`}>
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
          className={`bg-stone-500 mt-4 placeholder:text-white/50 py-2 px-4 text-sm rounded-md w-full  active:outline-none  focus:outline-none`}
        >
          Publish
        </button>
      </div>
    </div>
  )
}

export default Publish
