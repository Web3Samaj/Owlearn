import VideoPlayer from '@/modules/watch-course/components/VideoPlayer'
import Playlist from '@/modules/watch-course/components/Playlist'
import { LectureContextProvider } from '@/modules/watch-course/contexts/LectureContext'

type WatchCourseProps = {
  cids: string[]
}

export default function Home({ cids }: WatchCourseProps): JSX.Element {
  return (
    <LectureContextProvider>
      <div className="w-full h-full flex">
        <div className="w-9/12 bg-stone-800">
          <VideoPlayer />
        </div>
        <div className="w-3/12 bg-stone-900">
          <Playlist cids={cids} />
        </div>
      </div>
    </LectureContextProvider>
  )
}
