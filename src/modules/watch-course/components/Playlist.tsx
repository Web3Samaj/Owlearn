import Lecture from '@/modules/watch-course/components/Lecture'
import { useContext, useEffect } from 'react'
import LectureContext from '@/modules/watch-course/contexts/LectureContext'

type cid = string
type PlaylistProps = {
  cids: cid[]
}

export default function Home({ cids }: PlaylistProps): JSX.Element {
  const lectureContext = useContext(LectureContext)

  useEffect(() => {
    lectureContext.setLectureIndex(0)
    const completed = new Map()
    completed.set(0, true)
    lectureContext.setCompleted(completed)
  }, [])

  return (
    <div className="flex flex-col overflow-y-auto h-screen gap-2 pt-2 md:px-4 px-2 pb-4 md:pb-0">
      {cids.map((cid, i) => {
        return <Lecture key={i} cid={cid} index={i} />
      })}
    </div>
  )
}
