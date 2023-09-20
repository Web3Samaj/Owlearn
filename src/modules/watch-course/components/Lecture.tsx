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
    <div
      className="w-full flex justify-between border rounded-md p-2 hover:bg-gray-700 cursor-pointer"
      onClick={() => {
        lectureContext.setLectureIndex(index)
      }}
    >
      <p
        className="flex-1 w-full text-white/50"
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {lecture?.title}
      </p>
      <input
        className="flex-none"
        type="checkbox"
        defaultChecked={
          lectureContext.completed.has(index) &&
          lectureContext.completed.get(index)
        }
      />
    </div>
  )
}
