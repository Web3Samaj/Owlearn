import { useContext, useEffect, useState } from 'react'
import { getJSONFromIPFS } from '@/modules/ipfs/utils'
import LectureContext from '@/modules/watch-course/contexts/LectureContext'

type Lecture = {
  title: string
  playbackId: string
}

type cidResponse = {
  title: string
  video: string
}

type LectureProps = {
  index: number
  cid: string
}

export default function Home({ cid, index }: LectureProps): JSX.Element {
  const lectureContext = useContext(LectureContext)
  const [lecture, setLecture] = useState<Lecture | null>(null)

  useEffect(() => {
    async function fetchLecture() {
      const res = await getJSONFromIPFS<cidResponse>(cid)
      const lecture = {
        title: res.title,
        playbackId: res.video,
      }
      setLecture(lecture)
    }
    fetchLecture()
  }, [cid])

  useEffect(() => {
    if (lecture && lectureContext.lectureIndex === index) {
      lectureContext.setTitle(lecture?.title)
      lectureContext.setPlaybackId(lecture?.playbackId)
    }
  }, [lectureContext.lectureIndex, lecture])

  return (
    <div>
      <div
        onClick={() => {
          lectureContext.setLectureIndex(index)
        }}
        className={`hover:-translate-y-0.5 hover:shadow-md hover:shadow-black transition-all duration-200 ease-linear mb-2 ${
          lectureContext.lectureIndex === index
            ? 'bg-[#5EF8BF] text-black'
            : ' bg-stone-700'
        } rounded-md  cursor-pointer  w-full flex items-center justify-between py-2 px-4 `}
      >
        <span className={`truncate  `}>{lecture?.title}</span>
        <input
          className={`text-xs ${
            lectureContext.lectureIndex === index
              ? ' text-black'
              : ' text-white/50'
          }  `}
          type="checkbox"
          defaultChecked={
            lectureContext.completed.has(index) &&
            lectureContext.completed.get(index)
          }
        />
      </div>
    </div>
  )
}
